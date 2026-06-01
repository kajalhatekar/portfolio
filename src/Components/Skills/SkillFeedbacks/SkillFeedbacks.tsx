import { useState, type FC } from "react";

import classNames from "classnames";

import styles from "./SkillFeedbacks.module.css";

const CRITERIA = [
  "ui craft",
  "planning",
  "communication",
  "ownership",
  "code quality",
  "delivery",
] as const;

const FEEDBACKS = [
  {
    color: "var(--theme-primary-dark)",
    votes: [4, 4, 4, 4, 4, 4],
  },
  {
    color: "var(--theme-primary-bright)",
    votes: [4, 3, 4, 4, 4, 3],
  },
  {
    color: "var(--theme-secondary-dark)",
    votes: [4, 4, 3, 4, 4, 4],
  },
  {
    color: "var(--theme-secondary-bright)",
    votes: [3, 4, 4, 3, 4, 4],
  },
] as const;

const AVERAGE = FEEDBACKS.map((feedback) => feedback.votes)
  .reduce(
    (acc, current) => acc.map((vote, index) => vote + current[index]),
    [0, 0, 0, 0, 0, 0],
  )
  .map((sum) => sum / FEEDBACKS.length);

const HEXAGON_VERTICES = {
  0: [
    [150, 150],
    [150, 150],
    [150, 150],
    [150, 150],
    [150, 150],
    [150, 150],
  ],
  1: [
    [138, 127],
    [163, 127],
    [176, 150],
    [163, 173],
    [138, 173],
    [125, 150],
  ],
  2: [
    [117, 92],
    [184, 92],
    [217, 150],
    [184, 208],
    [117, 208],
    [84, 150],
  ],
  3: [
    [94, 53],
    [206, 53],
    [262, 150],
    [206, 247],
    [94, 247],
    [38, 150],
  ],
  4: [
    [75, 20],
    [225, 20],
    [300, 150],
    [225, 280],
    [75, 280],
    [0, 150],
  ],
} as const;

const AVERAGE_POINTS = AVERAGE.map((average, index) => {
  const nextInteger = Math.ceil(average) as 0 | 1 | 2 | 3 | 4;
  const previousInteger = Math.floor(average) as 0 | 1 | 2 | 3 | 4;
  const nextVertex = HEXAGON_VERTICES[nextInteger][index];
  const previousVertex = HEXAGON_VERTICES[previousInteger][index];

  return [
    previousVertex[0] +
      (nextVertex[0] - previousVertex[0]) * (1 - (nextInteger - average)),
    previousVertex[1] +
      (nextVertex[1] - previousVertex[1]) * (1 - (nextInteger - average)),
  ].join(",");
}).join(" ");

export const SkillFeedbacks: FC = () => {
  const [tableView, setTableView] = useState(false);

  return (
    <div className={styles.container}>
      <button
        className={styles.switchButton}
        onClick={() => setTableView((currentView) => !currentView)}
        type="button"
      >
        Switch to <strong>{tableView ? "graphical" : "table"}</strong> view
      </button>

      <div className={styles.flip}>
        <div
          className={classNames(styles.flipper, {
            [styles.flipperFlipped]: tableView,
          })}
        >
          <div aria-hidden={tableView} className={styles.front}>
            <GraphicalView active={!tableView} />
          </div>
          <div aria-hidden={!tableView} className={styles.back}>
            <TableView />
          </div>
        </div>
      </div>
    </div>
  );
};

const GraphicalView: FC<{ active: boolean }> = ({ active }) => {
  const [showFeedback, setShowFeedback] = useState(0);

  return (
    <div aria-hidden>
      <svg viewBox="-125 -25 550 350">
        {Object.values(HEXAGON_VERTICES).map((points, index) => (
          <polygon
            className={styles.hexagon}
            key={index}
            points={points.map((point) => point.join(",")).join(" ")}
          />
        ))}

        <text className={styles.label} textAnchor="middle" x="65.047" y="0">
          {CRITERIA[0]}
        </text>
        <text className={styles.label} textAnchor="middle" x="234.953" y="0">
          {CRITERIA[1]}
        </text>
        <text className={styles.label} dominantBaseline="middle" x="320" y="150">
          {CRITERIA[2]}
        </text>
        <text className={styles.label} textAnchor="middle" x="234.953" y="310">
          {CRITERIA[3]}
        </text>
        <text className={styles.label} textAnchor="middle" x="65.047" y="310">
          {CRITERIA[4]}
        </text>
        <text
          className={styles.label}
          dominantBaseline="middle"
          textAnchor="end"
          x="-20"
          y="150"
        >
          {CRITERIA[5]}
        </text>

        <line
          className={styles.line}
          x1="234.953"
          x2="65.047"
          y1="297.252"
          y2="2.748"
        />
        <line className={styles.line} x1="-20" x2="320" y1="150" y2="150" />
        <line
          className={styles.line}
          x1="65.047"
          x2="234.953"
          y1="297.252"
          y2="2.748"
        />

        {showFeedback === 0 && (
          <polygon className={styles.data} points={AVERAGE_POINTS} />
        )}

        {showFeedback > 0 && (
          <polygon
            className={styles.feedback}
            fill={FEEDBACKS[showFeedback - 1].color}
            points={FEEDBACKS[showFeedback - 1].votes
              .map((vote, voteIndex) =>
                HEXAGON_VERTICES[vote][voteIndex].join(","),
              )
              .join(" ")}
            stroke={FEEDBACKS[showFeedback - 1].color}
          />
        )}
      </svg>

      <div className={styles.buttonGroup} title="Select individual feedback">
        <button
          aria-pressed={showFeedback === 0}
          className={styles.button}
          disabled={!active}
          onClick={() => setShowFeedback(0)}
          type="button"
        >
          <span
            className={styles.buttonIcon}
            style={{
              backgroundColor: "var(--theme-secondary-dark)",
              borderColor: "var(--theme-primary-bright)",
            }}
          />
          Average
        </button>
        {FEEDBACKS.map((feedback, index) => {
          const feedbackNumber = index + 1;

          return (
            <button
              aria-pressed={showFeedback === feedbackNumber}
              className={styles.button}
              disabled={!active}
              key={feedback.color}
              onClick={() => setShowFeedback(feedbackNumber)}
              type="button"
            >
              <span
                className={styles.buttonIcon}
                style={{
                  backgroundColor: feedback.color,
                  borderColor: feedback.color,
                }}
              />
              Feedback #{feedbackNumber}
            </button>
          );
        })}
      </div>
    </div>
  );
};

const TableView = () => (
  <table className={styles.tableView}>
    <caption>
      Data summarized from colleague feedback.
      <br />
      Maximum score is 4.
    </caption>
    <thead>
      <tr>
        <th />
        {FEEDBACKS.map((feedback, index) => (
          <th key={feedback.color}>Feedback #{index + 1}</th>
        ))}
        <th>Average</th>
      </tr>
    </thead>
    <tbody>
      {CRITERIA.map((criterion, criterionIndex) => (
        <tr key={criterion}>
          <td>{criterion}</td>
          {FEEDBACKS.map((feedback) => (
            <td key={feedback.color}>{feedback.votes[criterionIndex]}</td>
          ))}
          <td>{AVERAGE[criterionIndex]}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

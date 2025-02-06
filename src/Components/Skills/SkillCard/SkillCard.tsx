import { type FC, type ReactElement, type ReactNode } from 'react';
// import dynamic from 'next/dynamic';
import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';
import { DialogDisclosure, useDialogState } from 'reakit/Dialog';
import { VisuallyHidden } from 'reakit/VisuallyHidden';

import { ChevronDoubleDownIcon } from 'assets/svg/ChevronDoubleDownIcon';
import { ChevronDoubleUpIcon } from 'assets/svg/ChevronDoubleUpIcon';
import { ChevronDownIcon } from 'assets/svg/ChevronDownIcon';
import { ChevronTripleDownIcon } from 'assets/svg/ChevronTripleDownIcon';
import { ChevronTripleUpIcon } from 'assets/svg/ChevronTripleUpIcon';
import { ChevronUpIcon } from 'assets/svg/ChevronUpIcon';
import { OpenBookIcon } from 'assets/svg/OpenBookIcon';

import styles from "./SkillCard.module.css";

// const SkillCardDialog = dynamic(() =>
//   import('./SkillCardDialog/SkillCardDialog').then(
//     ({ SkillCardDialog }) => SkillCardDialog,
//   ),
// );

type Props = {
  backgroundColor: string;
  brief?: ReactElement;
  description: ReactElement;
  featured: boolean;
  icon: ReactNode;
  id: string;
  name: string;
  scrollBarTrackColor?: string;
  studying: boolean;
  textColor: string;
  usageLevel: -1 | -2 | -3 | 1 | 2 | 3;
  yearsExperience?: number;
};

const USAGE = {
  [-1]: {
    Icon: ChevronDownIcon,
    description: "I haven't used this in the last year",
  },
  [-2]: {
    Icon: ChevronDoubleDownIcon,
    description: "I haven't used this in the last two years",
  },
  [-3]: {
    Icon: ChevronTripleDownIcon,
    description: "I haven't used this in the last five years",
  },
  1: {
    Icon: ChevronUpIcon,
    description: "I've used this it the last year",
  },
  2: {
    Icon: ChevronDoubleUpIcon,
    description: "I've been using this recently",
  },
  3: {
    Icon: ChevronTripleUpIcon,
    description: "I've been using this everyday",
  },
};

const STUDYING_LABEL = "I've been studying this recently";

export const SkillCard: FC<Props> = ({
  backgroundColor,
  brief,
  featured,
  icon,
  name,
  studying,
  usageLevel,
  yearsExperience,
}) => {

  const { inView, ref } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const { Icon, description: usageDescription } = USAGE[usageLevel];

  const dialog = useDialogState();

  const  isContrastMode = true

  return (
    <div
      className={classNames(styles.card, {
        [styles.border]: isContrastMode,
        [styles.featured]: featured,
        [styles.hidden]: !inView,
      })}
      ref={ref}
      style={{
        backgroundImage: `linear-gradient(#160e1b, #0e141b), radial-gradient(circle at top, ${backgroundColor}, transparent 90%)`,
        // borderColor: isContrastMode ? backgroundColor : '',
        boxShadow: `${backgroundColor}${
            isContrastMode ? 20 : 40
        } 0 5px 50px`,
        // border: `2px solid ${backgroundColor}`
      }}
    >
      <div className={styles.blurContainer}>
        <div
          className={classNames(styles.blur, {
            // [styles.light]: colorScheme === 'light',
          })}
          style={{
            background: "#5b2c89",
          }}
        />
      </div>
      <div className={styles.content}>
        <DialogDisclosure {...dialog} className={styles.button}>
          <span className={styles.image}>{icon}</span>

          <span className={styles.name}>
            {name}
            <VisuallyHidden>.</VisuallyHidden>
          </span>

          {featured && brief && (
            <span
              className={classNames(styles.brief, {
                [styles.contrast]: isContrastMode,
              })}
            >
              {brief}
            </span>
          )}

          <span className={styles.info}>
            <span
              className={classNames(styles.contentWrapper, {
                [styles.contrast]: isContrastMode,
              })}
            >
              {yearsExperience && (
                <>
                  <span className={styles.content}>
                    <span
                      className={styles.contentTitle}
                      title="experience"
                    >
                      {featured ? 'experience' : 'exp.'}
                    </span>
                    <span
                      title={`${yearsExperience} year${
                        yearsExperience >= 2 ? 's' : ''
                      }`}
                    >
                      {yearsExperience} yr
                      {yearsExperience >= 2 ? 's' : ''}
                    </span>
                    <VisuallyHidden>.</VisuallyHidden>
                  </span>

                  <span className={styles.divider} />
                </>
              )}
              <span className={styles.content}>
                <span className={styles.contentTitle} title="usage">
                  {featured ? '' : ''}
                </span>
                <span title={usageDescription}>
                  <Icon aria-label={usageDescription} />
                </span>
                <VisuallyHidden>.</VisuallyHidden>
              </span>
              {studying && (
                <>
                  <span className={styles.divider} />

                  <span className={styles.content}>
                    <span
                      className={styles.contentTitle}
                      title="studying"
                    >
                      {featured ? 'studying' : 'stu.'}
                    </span>
                    <span title={STUDYING_LABEL}>
                      <OpenBookIcon aria-label={STUDYING_LABEL} />
                    </span>
                    <VisuallyHidden>.</VisuallyHidden>
                  </span>
                </>
              )}
            </span>
          </span>
        </DialogDisclosure>
      </div>
    </div>
  );
};

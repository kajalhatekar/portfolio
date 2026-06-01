import { type FC, type ReactElement, type ReactNode } from 'react';

import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';
import * as Dialog from '@radix-ui/react-dialog';
import { ChevronDoubleDownIcon } from 'assets/svg/ChevronDoubleDownIcon';
import { ChevronDoubleUpIcon } from 'assets/svg/ChevronDoubleUpIcon';
import { ChevronDownIcon } from 'assets/svg/ChevronDownIcon';
import { ChevronTripleDownIcon } from 'assets/svg/ChevronTripleDownIcon';
import { ChevronTripleUpIcon } from 'assets/svg/ChevronTripleUpIcon';
import { ChevronUpIcon } from 'assets/svg/ChevronUpIcon';
import { OpenBookIcon } from 'assets/svg/OpenBookIcon';
import { VisuallyHidden } from "Components/VisuallyHidden/VisuallyHidden";

import { SkillCardDialog } from "./SkillCardDialog/SkillCardDialog";
import styles from "./SkillCard.module.css";

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
    description: "She has not used this heavily in the last year.",
  },
  [-2]: {
    Icon: ChevronDoubleDownIcon,
    description: "She has not used this heavily in the last two years.",
  },
  [-3]: {
    Icon: ChevronTripleDownIcon,
    description: "She has not used this heavily in the last five years.",
  },
  1: {
    Icon: ChevronUpIcon,
    description: "She has used this in recent work.",
  },
  2: {
    Icon: ChevronDoubleUpIcon,
    description: "She has been using this recently.",
  },
  3: {
    Icon: ChevronTripleUpIcon,
    description: "She uses this regularly in day-to-day development.",
  },
};

const STUDYING_LABEL = "I've been studying this recently";

export const SkillCard: FC<Props> = ({
  backgroundColor,
  brief,
  description,
  featured,
  icon,
  id,
  name,
  scrollBarTrackColor,
  studying,
  textColor,
  usageLevel,
  yearsExperience,
}) => {
  const { inView, ref } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const { Icon, description: usageDescription } = USAGE[usageLevel];

  const isContrastMode = true;

  return (
    <div
      className={classNames(styles.card, {
        [styles.border]: isContrastMode,
        [styles.featured]: featured,
        [styles.hidden]: !inView,
      })}
      ref={ref}
      style={{
        backgroundImage: `linear-gradient(var(--theme-background), var(--theme-background)), radial-gradient(circle at top, ${backgroundColor}, transparent 90%)`,
        borderColor: isContrastMode ? backgroundColor : "transparent",
        boxShadow: `${backgroundColor}${isContrastMode ? 20 : 40} 0 5px 50px`,
      }}
    >
      <div className={styles.blurContainer}>
        <div
          className={styles.blur}
          style={{
            background: backgroundColor,
          }}
        />
      </div>
      <div className={styles.content}>
        <Dialog.Root>
          <SkillCardDialog
            backgroundColor={backgroundColor}
            brief={brief}
            description={description}
            icon={icon}
            id={id}
            name={name}
            scrollBarTrackColor={scrollBarTrackColor}
            studying={studying}
            textColor={textColor}
            usageDescription={usageDescription}
            yearsExperience={yearsExperience}
          />
          <Dialog.Trigger asChild>
            <button className={styles.button} type="button">
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
                          {featured ? "experience" : "exp."}
                        </span>
                        <span
                          title={`${yearsExperience} year${
                            yearsExperience >= 2 ? "s" : ""
                          }`}
                        >
                          {yearsExperience} yr
                          {yearsExperience >= 2 ? "s" : ""}
                        </span>
                        <VisuallyHidden>.</VisuallyHidden>
                      </span>
                      <span className={styles.divider} />
                    </>
                  )}
                  <span className={styles.content}>
                    <span className={styles.contentTitle} title="usage">
                      {featured ? "usage" : "usg."}
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
                          {featured ? "studying" : "stu."}
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
            </button>
          </Dialog.Trigger>
        </Dialog.Root>
      </div>
    </div>
  );
};

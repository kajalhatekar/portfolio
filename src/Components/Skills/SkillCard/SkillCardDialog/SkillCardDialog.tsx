import {
  Children,
  type CSSProperties,
  type FC,
  type ReactElement,
  type ReactNode,
} from "react";

import * as Dialog from "@radix-ui/react-dialog";

import CloseNavMenu from "assets/svg/CloseNavMenu";
import { VisuallyHidden } from "Components/VisuallyHidden/VisuallyHidden";

import styles from "./SkillCardDialog.module.css";

type Props = {
  backgroundColor: string;
  brief?: ReactElement;
  description: ReactElement;
  icon: ReactNode;
  id: string;
  name: string;
  scrollBarTrackColor?: string;
  studying: boolean;
  textColor: string;
  usageDescription: string;
  yearsExperience?: number;
};

export const SkillCardDialog: FC<Props> = ({
  backgroundColor,
  brief,
  description,
  icon,
  id,
  name,
  scrollBarTrackColor,
  studying,
  textColor,
  usageDescription,
  yearsExperience,
}) => {
  const descriptionChildren = (description.props as { children?: ReactNode })
    .children;
  const hasDescription = Children.count(descriptionChildren) > 0;

  return (
    <Dialog.Portal>
      <Dialog.Overlay className={styles.backdrop} />
      <Dialog.Content
        aria-describedby={`skill-${id}-description`}
        className={styles.dialog}
        style={
          {
            "--theme-scrollbar-thumb-color": backgroundColor,
            "--theme-scrollbar-track-color":
              scrollBarTrackColor || "var(--theme-scrollbar-track-color)",
            boxShadow: `${backgroundColor}30 0 5px 100px`,
          } as CSSProperties
        }
      >
        <header
          className={styles.header}
          style={{
            background: backgroundColor,
            color: textColor,
          }}
        >
          <div
            className={styles.headerRow}
            style={{ borderBottomColor: backgroundColor }}
          >
            <div className={styles.image}>{icon}</div>
            <Dialog.Title className={styles.title}>
              {name}
              <VisuallyHidden>.</VisuallyHidden>
            </Dialog.Title>
            <Dialog.Close className={styles.closeButton} title="Close dialog">
              <CloseNavMenu aria-hidden />
            </Dialog.Close>
          </div>
        </header>

        <div className={styles.content} id={`skill-${id}-description`}>
          {hasDescription ? (
            description
          ) : (
            <>
              {brief && <div className={styles.brief}>{brief}</div>}
              <p>
                Kajal uses {name} as part of her front-end development toolkit.
                {yearsExperience
                  ? ` She has about ${yearsExperience} year${
                      yearsExperience >= 2 ? "s" : ""
                    } of hands-on experience with it.`
                  : ""}
              </p>
              <p>
                {usageDescription}
                {studying
                  ? " She is also actively improving this skill through recent practice and study."
                  : ""}
              </p>
            </>
          )}
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
};

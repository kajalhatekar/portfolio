import type { CSSProperties, FC, ReactNode } from "react";

import styles from "./TestimonialCard.module.css";

type Props = {
  accent: string;
  authorInitials: string;
  authorName: string;
  authorRole: string;
  children: ReactNode;
  currentTestimonial: number;
  isActive: boolean;
  stackPosition: string;
  totalTestimonial: number;
};

export const TestimonialCard: FC<Props> = ({
  accent,
  authorInitials,
  authorName,
  authorRole,
  children,
  currentTestimonial,
  isActive,
  stackPosition,
  totalTestimonial,
}) => (
  <div
    className={styles.card}
    data-active={isActive}
    data-stack={stackPosition}
    style={{ "--testimonial-accent": accent } as CSSProperties}
  >
    <span className={styles.visuallyHidden}>
      Testimonial {currentTestimonial} out of {totalTestimonial}. {authorName},{" "}
      {authorRole}.
    </span>

    <div className={styles.quote}>{children}</div>
    <div aria-hidden className={styles.author}>
      <span className={styles.authorPicture}>{authorInitials}</span>
      <div className={styles.authorTitle}>
        <span className={styles.authorName}>{authorName}</span>
        <span className={styles.authorRole}>{authorRole}</span>
      </div>
    </div>
  </div>
);

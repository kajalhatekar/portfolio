import {
  useEffect,
  useState,
  type FC,
  type ReactNode,
} from "react";
import { useInView } from "react-intersection-observer";

import type { Company, Period } from "./experiences.const";

import styles from "./ExperienceCard.module.css";

type Props = {
  children: ReactNode;
  company: Company;
  consultant?: boolean;
  jobTitle: string;
  period: Period;
  title: string;
};

const formatDate = (date?: Date) =>
  date
    ? date.toLocaleDateString("en", {
        month: "long",
        timeZone: "UTC",
        year: "numeric",
      })
    : "Present";

const formatDuration = (from: Date, to: Date) => {
  const years = to.getUTCFullYear() - from.getUTCFullYear();
  const months = to.getUTCMonth() - from.getUTCMonth();
  const totalMonths = Math.max(0, years * 12 + months + 1);
  const durationYears = Math.floor(totalMonths / 12);
  const durationMonths = totalMonths % 12;

  if (totalMonths <= 1) {
    return "< 1 month";
  }

  if (durationYears === 0) {
    return `${durationMonths} month${durationMonths > 1 ? "s" : ""}`;
  }

  if (durationMonths === 0) {
    return `${durationYears} year${durationYears > 1 ? "s" : ""}`;
  }

  return `${durationYears} year${
    durationYears > 1 ? "s" : ""
  }, ${durationMonths} month${durationMonths > 1 ? "s" : ""}`;
};

const useReducedMotion = () => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setIsReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  return isReducedMotion;
};

const ExperienceCard: FC<Props> = ({
  children,
  company,
  consultant,
  jobTitle,
  period,
  title,
}) => {
  const isReducedMotion = useReducedMotion();
  const [ref, inView] = useInView({
    rootMargin: "-100px",
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <li
      className={styles.card}
      data-revealed={inView || isReducedMotion}
      ref={ref}
    >
      <div className={styles.dot} />
      <div
        className={styles.companyLogo}
        style={{
          background: company.color,
          padding: company.padding,
        }}
      >
        <svg aria-hidden>
          <use href={`#${company.logo}`} />
        </svg>
      </div>
      <div className={styles.content}>
        <h3 className={styles.company}>
          {title}
          {consultant && "*"}
        </h3>
        <span className={styles.jobTitle}>{jobTitle}</span>
        <em className={styles.period}>
          {formatDate(period.from)} - {formatDate(period.to)} (
          {formatDuration(period.from, period.to || new Date())})
        </em>
        {consultant && (
          <span className={styles.consultant}>
            * as a consultant, client details cannot be disclosed
          </span>
        )}
        <div className={styles.description}>{children}</div>
      </div>
      <div className={styles.reveal} />
    </li>
  );
};

export default ExperienceCard;

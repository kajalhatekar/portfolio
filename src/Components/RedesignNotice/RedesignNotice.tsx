import { useState } from "react";

import { FiInfo, FiX } from "react-icons/fi";

import styles from "./RedesignNotice.module.css";

const STORAGE_KEY = "portfolio-redesign-notice-dismissed-v2";

const getInitialDismissedState = () => {
  try {
    return window.sessionStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    return false;
  }
};

export const RedesignNotice = () => {
  const [dismissed, setDismissed] = useState(getInitialDismissedState);

  const dismissNotice = () => {
    setDismissed(true);

    try {
      window.sessionStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // Keep the notice dismissible even if storage is unavailable.
    }
  };

  if (dismissed) return null;

  return (
    <aside
      aria-label="Portfolio redesign notice"
      className={styles.notice}
      role="status"
    >
      <span aria-hidden="true" className={styles.icon}>
        <FiInfo />
      </span>

      <div className={styles.content}>
        <strong>Redesign in progress</strong>
        <p>
          I'm actively redesigning this portfolio with improved frontend
          architecture, UI enhancements, and AI-powered interactions. Some
          sections are updated already, while others are currently being
          refined.
        </p>
      </div>

      <button
        aria-label="Dismiss redesign notice"
        className={styles.closeButton}
        onClick={dismissNotice}
        title="Dismiss"
        type="button"
      >
        <FiX aria-hidden="true" />
      </button>
    </aside>
  );
};

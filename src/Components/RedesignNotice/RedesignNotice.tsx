import { useEffect, useState } from "react";

import { FiClock, FiX } from "react-icons/fi";

import styles from "./RedesignNotice.module.css";

const STORAGE_KEY = "portfolio-redesign-notice-dismissed-v3";
const AUTO_HIDE_DELAY = 6200;

const getInitialDismissedState = () => {
  try {
    return window.sessionStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    return false;
  }
};

export const RedesignNotice = () => {
  const [dismissed, setDismissed] = useState(getInitialDismissedState);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    if (dismissed) return undefined;

    const hideTimer = window.setTimeout(() => {
      setIsLeaving(true);
    }, AUTO_HIDE_DELAY);

    const removeTimer = window.setTimeout(() => {
      setDismissed(true);
    }, AUTO_HIDE_DELAY + 280);

    return () => {
      window.clearTimeout(hideTimer);
      window.clearTimeout(removeTimer);
    };
  }, [dismissed]);

  const dismissNotice = () => {
    setIsLeaving(true);
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
      data-leaving={isLeaving}
      role="status"
    >
      <span aria-hidden="true" className={styles.icon}>
        <FiClock />
      </span>

      <div className={styles.content}>
        <strong>Portfolio update</strong>
        <p>
          This website is still being polished. A few sections may change while
          the final experience comes together.
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

import { useEffect, useLayoutEffect, useMemo, useState } from "react";

type TypingStage =
  | "firstName"
  | "lastName"
  | "subtitle"
  | "subtitlePause"
  | "subtitleDelete";

type Options = {
  firstName: string;
  lastName: string;
  resetKey?: number;
  subtitles: string[];
};

export const useHeroTypingEffect = ({
  firstName,
  lastName,
  resetKey = 0,
  subtitles,
}: Options) => {
  const [stage, setStage] = useState<TypingStage>("firstName");
  const [firstNameLength, setFirstNameLength] = useState(0);
  const [lastNameLength, setLastNameLength] = useState(0);
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [subtitleLength, setSubtitleLength] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const currentSubtitle = useMemo(
    () => subtitles[subtitleIndex] || subtitles[0] || "",
    [subtitleIndex, subtitles],
  );

  useLayoutEffect(() => {
    setStage("firstName");
    setFirstNameLength(0);
    setLastNameLength(0);
    setSubtitleIndex(0);
    setSubtitleLength(0);
  }, [resetKey]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    syncMotionPreference();
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", syncMotionPreference);
    } else {
      mediaQuery.addListener(syncMotionPreference);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", syncMotionPreference);
      } else {
        mediaQuery.removeListener(syncMotionPreference);
      }
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    let timeoutId: number | undefined;

    if (stage === "firstName") {
      if (firstNameLength < firstName.length) {
        timeoutId = window.setTimeout(
          () => setFirstNameLength((length) => length + 1),
          firstNameLength === 0 ? 260 : 92,
        );
      } else {
        timeoutId = window.setTimeout(() => setStage("lastName"), 180);
      }
    }

    if (stage === "lastName") {
      if (lastNameLength < lastName.length) {
        timeoutId = window.setTimeout(
          () => setLastNameLength((length) => length + 1),
          92,
        );
      } else {
        timeoutId = window.setTimeout(() => setStage("subtitle"), 240);
      }
    }

    if (stage === "subtitle") {
      if (subtitleLength < currentSubtitle.length) {
        timeoutId = window.setTimeout(
          () => setSubtitleLength((length) => length + 1),
          54,
        );
      } else {
        timeoutId = window.setTimeout(() => setStage("subtitlePause"), 1600);
      }
    }

    if (stage === "subtitlePause") {
      timeoutId = window.setTimeout(() => setStage("subtitleDelete"), 360);
    }

    if (stage === "subtitleDelete") {
      if (subtitleLength > 0) {
        timeoutId = window.setTimeout(
          () => setSubtitleLength((length) => length - 1),
          28,
        );
      } else {
        setSubtitleIndex((index) =>
          subtitles.length > 0 ? (index + 1) % subtitles.length : 0,
        );
        setStage("subtitle");
      }
    }

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [
    currentSubtitle,
    firstName,
    firstNameLength,
    lastName,
    lastNameLength,
    prefersReducedMotion,
    stage,
    subtitleLength,
    subtitles.length,
  ]);

  const typedFirstName = prefersReducedMotion
    ? firstName
    : firstName.slice(0, firstNameLength);
  const typedLastName = prefersReducedMotion
    ? lastName
    : lastName.slice(0, lastNameLength);
  const typedSubtitle = prefersReducedMotion
    ? currentSubtitle
    : currentSubtitle.slice(0, subtitleLength);

  const isFirstNameTypingComplete = typedFirstName === firstName;
  const isLastNameTypingComplete = typedLastName === lastName;
  const isSubtitleTypingComplete = typedSubtitle === currentSubtitle;

  return {
    firstName: typedFirstName,
    isFirstNameTypingComplete,
    isFullNameTypingComplete:
      isFirstNameTypingComplete && isLastNameTypingComplete,
    isLastNameTypingComplete,
    isSubtitleTypingComplete,
    lastName: typedLastName,
    subtitle: typedSubtitle,
  };
};

import { useCallback, useEffect, useRef, type RefObject } from "react";

import { useInView } from "react-intersection-observer";

type Return = {
  scrollRef: RefObject<HTMLDivElement>;
  setIntroductionRefs: (node: HTMLDivElement) => void;
};

const clamp = (value: number, min = 0, max = 1) =>
  Math.min(Math.max(value, min), max);

export const useIntroductionProgress = (): Return => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const introductionRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const currentProgressRef = useRef(0);
  const targetProgressRef = useRef(0);
  const [introductionInViewRef, introductionInView] = useInView();

  const setIntroductionRefs = useCallback(
    (node: HTMLDivElement) => {
      introductionRef.current = node;
      introductionInViewRef(node);
    },
    [introductionInViewRef],
  );

  useEffect(() => {
    if (!introductionInView) return;

    const setProgress = (progress: number) => {
      introductionRef.current?.style.setProperty("--scroll", `${progress}`);
    };

    const animateProgress = () => {
      const currentProgress = currentProgressRef.current;
      const targetProgress = targetProgressRef.current;
      const nextProgress =
        currentProgress + (targetProgress - currentProgress) * 0.18;

      if (Math.abs(targetProgress - nextProgress) < 0.001) {
        currentProgressRef.current = targetProgress;
        setProgress(targetProgress);
        animationFrameRef.current = null;
        return;
      }

      currentProgressRef.current = nextProgress;
      setProgress(nextProgress);
      animationFrameRef.current = window.requestAnimationFrame(animateProgress);
    };

    const startProgressAnimation = () => {
      if (animationFrameRef.current !== null) return;
      animationFrameRef.current = window.requestAnimationFrame(animateProgress);
    };

    const scrollHandler = () => {
      if (!scrollRef.current || !introductionRef.current) return;

      const maxOffset = Math.max(
        1,
        scrollRef.current.clientHeight - window.innerHeight,
      );
      const sectionTop =
        scrollRef.current.getBoundingClientRect().top + window.scrollY;
      const offset = clamp((window.scrollY - sectionTop) / maxOffset);

      targetProgressRef.current = offset;
      startProgressAnimation();
    };

    document.addEventListener("scroll", scrollHandler, { passive: true });
    window.addEventListener("resize", scrollHandler);
    scrollHandler();

    return () => {
      document.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("resize", scrollHandler);

      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [introductionInView]);

  return { scrollRef, setIntroductionRefs };
};

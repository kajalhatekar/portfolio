import {
  memo,
  type CSSProperties,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { FiArrowDown } from "react-icons/fi";
import KajalLogo from "assets/svg/KajalLogo";
import {
  HeroContent,
  HeroInitial,
  HeroName,
  HeroTitle,
  HeroSubtitle,
  HeroWaves,
  HeroTypedName,
  FlyingHeroLogo,
  MainContainer,
  ScreenReaderText,
  ScrollCue,
} from "style/Home";
import { useHeroTypingEffect } from "./useHeroTypingEffect";

const SUBTITLES = [
  "software engineer",
  "frontend developer",
  "react developer",
  "web developer",
  "ui enthusiast",
];

const clamp = (value: number, min = 0, max = 1) =>
  Math.min(Math.max(value, min), max);

const easeInOut = (value: number) => value * value * (3 - 2 * value);
const HERO_LOGO_START_RATIO = 0.1;
const HERO_LOGO_END_RATIO = 0.62;
const HERO_NAME_HOLD_PROGRESS = 0.18;
const HERO_NAME_FADE_END_PROGRESS = 0.32;
const HERO_LOGO_APPEAR_PROGRESS = 0.31;
const HERO_LOGO_FORM_PROGRESS = 0.4;
const HERO_LOGO_TAKEOFF_PROGRESS = 0.4;
const HERO_LOGO_WIDTH = 54;
const HERO_LOGO_HEIGHT = 38;
const FLYING_LOGO_SETTLE_MS = 880;
const RETURN_CURSOR_VISIBLE_PROGRESS = 0.14;

const Waves = () => (
  <HeroWaves aria-hidden="true">
    <svg>
      <defs>
        <path
          d="M 0 47.8 C 50.432 47.8 90.43 0 139.988 0 C 189.548 0 229.545 47.8 279.977 47.8 L 279.977 48.938 C 229.545 48.938 189.548 1.138 139.988 1.138 C 90.43 1.138 50.432 48.938 0 48.938 Z"
          id="home_wave_path"
        />
        {(["primary", "secondary"] as const).map((type) => (
          <pattern
            height="102"
            id={`home_wave_${type}`}
            key={type}
            patternUnits="userSpaceOnUse"
            width="280"
          >
            <use
              className="wavePattern"
              fill={
                type === "primary"
                  ? "var(--theme-primary-bright)"
                  : "var(--theme-secondary-dark)"
              }
              href="#home_wave_path"
            />
          </pattern>
        ))}
      </defs>

      <g style={{ transform: "translateX(-100px)" }}>
        <rect
          className="wave wavePrimary"
          fill="url(#home_wave_primary)"
          height="100%"
          width="100%"
        />
      </g>
      <g style={{ transform: "translate(-100px, 51px)" }}>
        <rect
          className="wave waveSecondary"
          fill="url(#home_wave_secondary)"
          height="100%"
          width="100%"
        />
      </g>
    </svg>
  </HeroWaves>
);

export const WavyBackground = memo(Waves);

const HomeSec = () => {
  const [typingResetKey, setTypingResetKey] = useState(0);
  const [heroDockProgress, setHeroDockProgress] = useState(0);
  const [isFlyingLogoSettled, setFlyingLogoSettled] = useState(false);
  const [isReturningHome, setReturningHome] = useState(false);
  const [hasHeroIntroCompleted, setHeroIntroCompleted] = useState(false);
  const [logoOrigin, setLogoOrigin] = useState<{ x: number; y: number } | null>(
    null,
  );
  const heroNameRef = useRef<HTMLHeadingElement>(null);
  const logoOriginRef = useRef<{ x: number; y: number } | null>(null);
  const hasScrolledAwayFromHero = useRef(false);
  const previousScrollY = useRef(0);
  const {
    firstName,
    isFirstNameTypingComplete,
    isFullNameTypingComplete,
    isLastNameTypingComplete,
    isSubtitleTypingComplete,
    lastName,
    subtitle,
  } = useHeroTypingEffect({
    firstName: "kajal",
    lastName: "Hatekar",
    resetKey: typingResetKey,
    subtitles: SUBTITLES,
  });

  const measureLogoOrigin = useCallback(() => {
    const heroNameRect = heroNameRef.current?.getBoundingClientRect();

    if (!heroNameRect) return;

    const nextOrigin = {
      x: heroNameRect.left + heroNameRect.width / 2 - HERO_LOGO_WIDTH / 2,
      y: heroNameRect.top + heroNameRect.height / 2 - HERO_LOGO_HEIGHT / 2,
    };

    logoOriginRef.current = nextOrigin;
    setLogoOrigin(nextOrigin);
  }, []);

  useLayoutEffect(() => {
    measureLogoOrigin();
    window.addEventListener("resize", measureLogoOrigin);

    return () => {
      window.removeEventListener("resize", measureLogoOrigin);
    };
  }, [measureLogoOrigin]);

  useEffect(() => {
    if (isFullNameTypingComplete && isSubtitleTypingComplete) {
      setHeroIntroCompleted(true);
      measureLogoOrigin();
    }
  }, [isFullNameTypingComplete, isSubtitleTypingComplete, measureLogoOrigin]);

  useEffect(() => {
    const resetTypingWhenHomeReturns = () => {
      const scrollY = window.scrollY;
      const flyStart = window.innerHeight * HERO_LOGO_START_RATIO;
      const flyEnd = window.innerHeight * HERO_LOGO_END_RATIO;
      const nextProgress = clamp((scrollY - flyStart) / (flyEnd - flyStart));
      const isScrollingUp = scrollY < previousScrollY.current - 1;
      const isScrollingDown = scrollY > previousScrollY.current + 1;

      if (scrollY > window.innerHeight * 0.34) {
        hasScrolledAwayFromHero.current = true;
      }

      if (hasScrolledAwayFromHero.current && isScrollingUp && scrollY > 8) {
        setReturningHome(true);
      }

      if (isScrollingDown && isReturningHome) {
        setReturningHome(false);
      }

      if (!logoOriginRef.current) {
        measureLogoOrigin();
      }

      setHeroDockProgress(nextProgress);

      if (scrollY <= 8 && hasScrolledAwayFromHero.current) {
        hasScrolledAwayFromHero.current = false;
        setReturningHome(false);
        setHeroIntroCompleted(false);
        measureLogoOrigin();
        setHeroDockProgress(0);
        setTypingResetKey((key) => key + 1);
      }

      previousScrollY.current = scrollY;
    };

    resetTypingWhenHomeReturns();
    window.addEventListener("scroll", resetTypingWhenHomeReturns, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", resetTypingWhenHomeReturns);
    };
  }, [isReturningHome, measureLogoOrigin]);

  useEffect(() => {
    if (isReturningHome || heroDockProgress < 1) {
      setFlyingLogoSettled(false);
      return;
    }

    const settleTimer = window.setTimeout(() => {
      setFlyingLogoSettled(true);
    }, FLYING_LOGO_SETTLE_MS);

    return () => {
      window.clearTimeout(settleTimer);
    };
  }, [heroDockProgress, isReturningHome]);

  const nameConvertProgress = easeInOut(
    clamp(
      (heroDockProgress - HERO_NAME_HOLD_PROGRESS) /
        (HERO_NAME_FADE_END_PROGRESS - HERO_NAME_HOLD_PROGRESS),
    ),
  );
  const logoFormProgress = easeInOut(
    clamp(
      (heroDockProgress - HERO_LOGO_APPEAR_PROGRESS) /
        (HERO_LOGO_FORM_PROGRESS - HERO_LOGO_APPEAR_PROGRESS),
    ),
  );
  const logoFlyProgress = easeInOut(
    clamp(
      (heroDockProgress - HERO_LOGO_TAKEOFF_PROGRESS) /
        (1 - HERO_LOGO_TAKEOFF_PROGRESS),
    ),
  );
  const logoOpacity =
    isReturningHome || heroDockProgress <= HERO_LOGO_APPEAR_PROGRESS
      ? 0
      : logoFormProgress;
  const logoStartX = logoOrigin?.x ?? 0;
  const logoStartY = logoOrigin?.y ?? 0;
  const logoEndX = 76;
  const logoEndY = 41;
  const logoX = logoStartX + (logoEndX - logoStartX) * logoFlyProgress;
  const logoY = logoStartY + (logoEndY - logoStartY) * logoFlyProgress;
  const logoScale = 2.65 + (1 - 2.65) * logoFlyProgress;
  const returnCursorProgress = easeInOut(1 - heroDockProgress);
  const returnCursorX =
    logoEndX + (logoStartX - logoEndX) * returnCursorProgress;
  const returnCursorY =
    logoEndY + (logoStartY - logoEndY) * returnCursorProgress;
  const returnCursorScale = 1 + (2.65 - 1) * returnCursorProgress;
  const returnCursorOpacity = clamp(
    (returnCursorProgress - RETURN_CURSOR_VISIBLE_PROGRESS) / 0.12,
  );
  const scrollCueOpacity =
    hasHeroIntroCompleted && !isReturningHome
      ? 1 - clamp((heroDockProgress - 0.06) / 0.12)
      : 0;
  const heroNameStyle = {
    "--hero-name-opacity": String(
      isReturningHome ? 0 : 1 - nameConvertProgress,
    ),
    "--hero-name-scale": String(1 - 0.64 * nameConvertProgress),
  } as CSSProperties;
  const flyingLogoStyle = {
    "--logo-opacity": String(
      isReturningHome
        ? returnCursorOpacity
        : isFlyingLogoSettled
          ? 0
          : logoOpacity,
    ),
    "--logo-scale": String(isReturningHome ? returnCursorScale : logoScale),
    "--logo-x": `${isReturningHome ? returnCursorX : logoX}px`,
    "--logo-y": `${isReturningHome ? returnCursorY : logoY}px`,
  } as CSSProperties;
  const scrollCueStyle = {
    "--scroll-cue-opacity": String(scrollCueOpacity),
    "--scroll-cue-y": `${(1 - scrollCueOpacity) * 14}px`,
  } as CSSProperties;

  return (
    <>
      <MainContainer id="home">
        <WavyBackground />

        <HeroContent>
          <HeroName
            ref={heroNameRef}
            aria-label="Kajal Hatekar, frontend developer"
            data-complete={isFullNameTypingComplete && isSubtitleTypingComplete}
            style={heroNameStyle}
          >
            <HeroTitle data-caret={!isFirstNameTypingComplete}>
              <HeroInitial>{firstName.charAt(0)}</HeroInitial>
              <HeroTypedName data-complete={isFullNameTypingComplete}>
                {firstName.slice(1)}
              </HeroTypedName>
            </HeroTitle>

            <HeroTitle
              data-caret={isFirstNameTypingComplete && !isLastNameTypingComplete}
            >
              <HeroInitial>{lastName.charAt(0)}</HeroInitial>
              <HeroTypedName data-complete={isFullNameTypingComplete}>
                {lastName.slice(1)}
              </HeroTypedName>
            </HeroTitle>

            <HeroSubtitle
              data-caret={isFirstNameTypingComplete && isLastNameTypingComplete}
            >
              {subtitle}
            </HeroSubtitle>

            <ScreenReaderText>Kajal Hatekar, frontend developer</ScreenReaderText>
          </HeroName>
        </HeroContent>

        <ScrollCue
          key={`${typingResetKey}-${hasHeroIntroCompleted ? "ready" : "typing"}`}
          href="#introduction"
          aria-hidden={scrollCueOpacity <= 0.02}
          aria-label="Scroll to introduction"
          data-ready={hasHeroIntroCompleted && scrollCueOpacity > 0.02}
          style={scrollCueStyle}
        >
          <FiArrowDown />
          <span>Scroll down</span>
        </ScrollCue>
      </MainContainer>

      <FlyingHeroLogo
        aria-hidden="true"
        data-visible={
          Boolean(logoOrigin) &&
          ((isReturningHome &&
            heroDockProgress > 0 &&
            returnCursorOpacity > 0.02) ||
            (heroDockProgress > 0 &&
              heroDockProgress <= 1 &&
              !isFlyingLogoSettled))
        }
        data-returning={isReturningHome}
        style={flyingLogoStyle}
      >
        {isReturningHome ? (
          <span>_</span>
        ) : (
          <KajalLogo />
        )}
      </FlyingHeroLogo>
    </>
  );
};

export default HomeSec;

import styled, { keyframes } from "styled-components";

export const fadeInAndMoveDown = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, -28px, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const heroReveal = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 28px, 0) scale(0.98);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
  }
`;

const wave = keyframes`
  0% {
    transform: translate3d(100px, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`;

const scrollPulse = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

const scrollCueEnter = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(-50%, 14px, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(-50%, var(--scroll-cue-y, 0), 0);
  }
`;

const arrowDraw = keyframes`
  0% {
    stroke-dasharray: 190;
    stroke-dashoffset: 190;
  }
  78% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dasharray: 190;
    stroke-dashoffset: 0;
  }
`;

const cueTextReveal = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 8px, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const blinkCursor = keyframes`
  0%, 44% {
    opacity: 1;
  }
  45%, 100% {
    opacity: 0;
  }
`;

export const MainContainer = styled.section`
  width: 100%;
  min-height: 106vh;
  min-height: 106svh;
  display: grid;
  place-items: center;
  position: relative;
  isolation: isolate;
  overflow: hidden;
  padding: 118px 24px 104px;
  background:
    radial-gradient(ellipse at 48% 40%, var(--theme-primary-soft, rgba(255, 255, 255, 0.035)), transparent 35%),
    linear-gradient(180deg, var(--theme-background, rgba(7, 13, 20, 0.98)), var(--theme-background, rgba(5, 10, 16, 0.98)));

  &::after {
    content: "";
    position: absolute;
    inset: auto 0 0;
    height: 24%;
    z-index: -1;
    pointer-events: none;
    background: linear-gradient(to bottom, rgba(7, 13, 20, 0), var(--theme-background, rgba(7, 13, 20, 0.92)));
  }

  @media (max-width: 767px) {
    padding: 104px 18px 92px;
  }
`;

export const HeroWaves = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  width: 100vw;
  height: 100%;
  overflow: hidden;
  background: var(--theme-background, #07111a);

  svg {
    position: sticky;
    top: 0;
    transform: translateY(-20px);
    width: calc(120vw + 200px);
    height: 100vh;
    stroke-width: 0;
    mask-image: linear-gradient(rgb(0 0 0 / 50%) 0%, transparent 100%);
    -webkit-mask-image: linear-gradient(
      rgb(0 0 0 / 50%) 0%,
      transparent 100%
    );
  }

  .wavePattern {
    transition: fill 500ms ease-in-out;
  }

  .wave {
    will-change: transform, fill;
    animation: ${wave} 10s infinite ease-in-out;
  }

  .wavePrimary {
    animation-direction: alternate-reverse;
  }

  .waveSecondary {
    animation-direction: alternate;
  }

  @media (prefers-reduced-motion: reduce) {
    .wave {
      animation: none;
    }
  }
`;

export const HeroContent = styled.div`
  position: fixed;
  inset: 0;
  z-index: 80;
  width: min(100%, 760px);
  height: 100vh;
  height: 100svh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--theme-text, #ffffff);
  pointer-events: none;
  animation: ${heroReveal} 0.9s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const HeroName = styled.h1`
  position: relative;
  width: min(100%, 6ch);
  min-width: 6ch;
  min-height: min(29vmin, 16rem);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: 0;
  color: var(--theme-text, rgba(255, 255, 255, 0.96));
  font-family: "Major Mono Display", "Rajdhani", monospace;
  font-size: min(12vmin, 6.67rem);
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0;
  text-align: left;
  transform-origin: center;
  opacity: var(--hero-name-opacity, 1);
  transform: scale(var(--hero-name-scale, 1));
  transition:
    opacity 0.12s linear,
    transform 0.12s linear;

  @media (max-width: 30rem) {
    width: min(100%, 80vmin);
    min-width: min(100%, 80vmin);
    min-height: 43vmin;
    font-size: clamp(52px, 16vmin, 74px);
  }
`;

export const FlyingHeroLogo = styled.span`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 38px;
  color: var(--theme-text, #ffffff);
  font-family: "Major Mono Display", "Rajdhani", monospace;
  font-size: 22px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0;
  pointer-events: none;
  opacity: var(--logo-opacity, 0);
  transform: translate3d(var(--logo-x, calc(50vw - 21px)), var(--logo-y, 47vh), 0)
    scale(var(--logo-scale, 2.8));
  transform-origin: center;
  will-change: opacity, transform;
  transition:
    opacity 0.12s linear,
    transform 0.12s linear;

  svg {
    display: block;
    width: 100%;
    height: 100%;
    overflow: visible;
    filter: drop-shadow(0 0 10px var(--theme-shadow, rgba(51, 214, 244, 0.22)));
  }

  &[data-returning="true"] {
    font-size: 26px;
    font-weight: 500;

    > span {
      color: var(--theme-text, #ffffff);
      text-shadow: none;
    }
  }

  @media (max-width: 767px) {
    &[data-visible="true"] {
      opacity: 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    &[data-visible="true"] {
      opacity: 0;
    }
  }
`;

export const HeroTitle = styled.span`
  position: relative;
  display: block;
  min-height: 1em;
  margin: 0;
  font: inherit;
  line-height: 1em;
  white-space: nowrap;
  transition: font-size 100ms ease-in-out 100ms;

  &[data-caret="true"]::after {
    content: "_";
    display: inline-block;
    animation: ${blinkCursor} 1s steps(1) infinite;
  }
`;

export const HeroInitial = styled.span`
  user-select: none;
  display: inline-block;
  margin: 0;
  padding: 0;
  color: inherit;
  font: inherit;
  font-style: normal;
  letter-spacing: 0;
  text-decoration: none;
  background: none;
  transition: inherit;
`;

export const HeroTypedName = styled.em`
  display: inline-block;
  color: inherit;
  font: inherit;
  font-style: normal;
  letter-spacing: 0;
  transition: opacity 250ms ease-in-out;

  &[data-complete="false"] {
    color: var(--theme-text, rgba(255, 255, 255, 0.96));
  }
`;

export const HeroSubtitle = styled.span`
  position: relative;
  display: block;
  align-self: flex-end;
  min-width: min(100%, 19ch);
  min-height: 1em;
  margin: 1vmin 0 0 auto;
  color: var(--theme-muted-text, rgba(255, 255, 255, 0.9));
  font: inherit;
  font-size: min(3vmin, 1.67rem);
  font-weight: normal;
  line-height: 1em;
  letter-spacing: 0;
  text-align: right;
  white-space: nowrap;
  transition: font-size 100ms ease-in-out 100ms;

  &[data-caret="true"]::after {
    content: "_";
    display: inline-block;
    animation: ${blinkCursor} 1s steps(1) infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    &[data-caret="true"]::after {
      animation: none;
    }
  }

  @media (max-width: 30rem) {
    font-size: 5vmin;
  }
`;

export const ScreenReaderText = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  white-space: nowrap;
`;

export const ScrollCue = styled.a`
  position: fixed;
  left: 50%;
  top: calc(50% + min(32vmin, 300px));
  z-index: 90;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  color: var(--theme-text, #ffffff);
  text-decoration: none;
  font-family: "Inter", "Segoe UI", Arial, sans-serif;
  font-size: clamp(16px, 1.30vw, 20px);
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0;
  opacity: var(--scroll-cue-opacity, 1);
  pointer-events: auto;
  transform: translate3d(-50%, var(--scroll-cue-y, 0), 0);
  transition:
    opacity 0.18s ease,
    transform 0.18s ease,
    color 0.22s ease,
    filter 0.22s ease;

  svg {
    width: clamp(52px, 4.4vw, 62px);
    height: clamp(52px, 4.4vw, 62px);
    overflow: visible;
    animation: ${scrollPulse} 1.6s ease 1.35s infinite;

    path,
    line,
    polyline {
      fill: none;
      stroke: currentColor;
      stroke-width: 3.1px;
      stroke-linecap: round;
      stroke-linejoin: round;
      vector-effect: non-scaling-stroke;
      animation: ${arrowDraw} 1.25s ease-in-out both;
    }
  }

  span {
    opacity: 0;
    animation: ${cueTextReveal} 0.34s ease-out 0.88s both;
  }

  &[data-ready="true"] {
    animation: ${scrollCueEnter} 0.36s ease-out both;
  }

  &:hover,
  &:focus-visible {
    color: var(--theme-text, #ffffff);
    filter: drop-shadow(0 0 14px var(--theme-shadow, rgba(255, 255, 255, 0.32)));
  }

  &[aria-hidden="true"] {
    pointer-events: none;
  }

  &:focus-visible {
    outline: 3px solid var(--theme-shadow, rgba(255, 255, 255, 0.3));
    outline-offset: 8px;
    border-radius: 8px;
  }

  @media (prefers-reduced-motion: reduce) {
    &[data-ready="true"],
    svg {
      animation: none;
    }

    svg path,
    svg line,
    svg polyline,
    span {
      animation: none;
      opacity: 1;
      stroke-dashoffset: 0;
    }
  }

  @media (max-width: 520px) {
    top: calc(50% + 190px);
    font-size: 18px;

    svg {
      width: 52px;
      height: 52px;
    }
  }
`;

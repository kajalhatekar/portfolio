import styled, { css, keyframes } from "styled-components";

const spinSlow = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const popoverReveal = keyframes`
  from {
    opacity: 0;
    transform: translateX(-12px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
`;

const drawIconAnimation = keyframes`
  0% {
    stroke-dasharray: 200;
    stroke-dashoffset: 200;
    fill: transparent;
    fill-opacity: 0;
    stroke: currentColor;
    stroke-width: var(--icon-draw-stroke, 1.4px);
  }

  70% {
    stroke-dashoffset: 0;
    fill: transparent;
    fill-opacity: 0;
    stroke: currentColor;
    stroke-width: var(--icon-draw-stroke, 1.4px);
  }

  100% {
    stroke-dashoffset: 0;
    fill: var(--icon-draw-fill-color, transparent);
    fill-opacity: 1;
    stroke: currentColor;
    stroke-width: var(--icon-final-stroke, 1.4px);
  }
`;

const iconFillReveal = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: var(--icon-fill-opacity, 1);
  }
`;

const logoArrive = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.86);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Header = styled.div`
  height: 11vh;
  backdrop-filter: blur(15px) !important;
  background-color: #1b1a2ea9 !important;
  box-shadow: 0 10px 10px 0 rgba(9, 5, 29, 0.171) !important;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  color: ${(props) => props.theme.color.second};
  transition: opacity 0.5s;
`;

export const LogoWrapper = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: 0;
  color: var(--theme-text, ${(props) => props.theme.color.second});
  line-height: 0;
`;

export const NavBrandLogo = styled.span`
  position: relative;
  z-index: 0;
  width: 0;
  max-width: 0;
  margin-right: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: var(--theme-text, #ffffff);
  line-height: 1;
  opacity: 0;
  pointer-events: none;
  transform: scale(0.86);
  transform-origin: center;
  transition:
    width 0.46s cubic-bezier(0.16, 1, 0.3, 1),
    max-width 0.46s cubic-bezier(0.16, 1, 0.3, 1),
    margin-right 0.46s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.28s ease,
    transform 0.38s cubic-bezier(0.16, 1, 0.3, 1);

  svg {
    display: block;
    width: 54px;
    height: 38px;
    overflow: visible;
    filter: drop-shadow(0 0 8px var(--theme-shadow, rgba(51, 214, 244, 0.2)));
  }
`;

export const ControlCluster = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: clamp(22px, 2.2vw, 34px);
  --icon-draw-stroke: 0.8px;
  --icon-draw-duration: 1.75s;
  --icon-final-stroke: 0px;
  --icon-draw-fill-color: currentColor;

  > button:first-child {
    --icon-draw-delay: 1.45s;
  }

  > div button {
    --icon-draw-delay: 1.8s;
  }

  @media (max-width: 767px) {
    gap: clamp(12px, 4vw, 20px);
  }
`;

const drawnIconBase = css`
  width: 28px;
  height: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: var(--theme-text, #ffffff);
  text-decoration: none;
  transition:
    color 0.14s ease,
    transform 0.14s cubic-bezier(0.2, 0, 0.2, 1),
    filter 0.14s ease;

  svg {
    width: 30px;
    height: 30px;
    filter: drop-shadow(0 2px 0 rgba(255, 255, 255, 0.08));

    path:not([data-icon-fill]),
    circle:not([data-icon-fill]),
    rect:not([data-icon-fill]),
    line:not([data-icon-fill]),
    polyline:not([data-icon-fill]),
    polygon:not([data-icon-fill]) {
      stroke: currentColor;
      stroke-width: var(--icon-draw-stroke, 1.4px);
      stroke-linecap: round;
      stroke-linejoin: round;
      vector-effect: non-scaling-stroke;
      fill: var(--icon-draw-fill-color, transparent);
      animation: var(
        --icon-draw-animation,
        ${drawIconAnimation} var(--icon-draw-duration, 1.25s) ease-in-out both
      );
      animation-delay: var(--icon-draw-delay, 1.25s);
    }

    [data-icon-fill] {
      fill: var(--icon-part-fill-color, transparent);
      stroke: none;
      opacity: 0;
      animation: ${iconFillReveal} 180ms ease both;
      animation-delay: calc(
        var(--icon-draw-delay, 1.25s) + var(--icon-draw-duration, 1.25s)
      );
    }
  }

  &:hover,
  &:focus-visible {
    color: var(--theme-text, #ffffff);
    transform: translateY(-3px) rotate(-3deg);
    filter: drop-shadow(0 8px 16px rgba(255, 255, 255, 0.16));
  }

  &:focus-visible {
    outline: none;
  }

  @media (prefers-reduced-motion: reduce) {
    svg {
      path,
      circle,
      rect,
      line,
      polyline,
      polygon {
        animation: none;
        fill: var(--icon-draw-fill-color, transparent);
        stroke-dashoffset: 0;
        fill-opacity: 1;
      }

      [data-icon-fill] {
        fill: var(--icon-part-fill-color, transparent);
        opacity: var(--icon-fill-opacity, 1);
        stroke: none;
      }
    }
  }
`;

export const SketchIconLink = styled.a`
  ${drawnIconBase}
`;

export const ThemePickerWrapper = styled.div`
  position: relative;
  display: inline-flex;
  line-height: 0;
`;

export const ThemeControlButton = styled.button`
  ${drawnIconBase}
  --mode-icon-draw-duration: 1.75s;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;

  svg {
    animation: none;
    transform-origin: center;

    path,
    circle,
    rect,
    line,
    polyline,
    polygon {
      stroke: currentColor;
      stroke-width: var(--icon-draw-stroke, 0.8px);
      fill: var(--icon-draw-fill-color, transparent);
      animation: ${drawIconAnimation} var(--mode-icon-draw-duration, 1.15s)
        ease-in-out both;
      animation-delay: var(--icon-draw-delay, 1.25s);
    }
  }

  &[aria-expanded="true"],
  &[aria-pressed="true"] {
    color: #33d6f4;
  }

  &[aria-pressed="true"] svg {
    animation: ${spinSlow} 8s linear infinite;
    animation-delay: calc(
      var(--icon-draw-delay, 1.25s) + var(--mode-icon-draw-duration, 1.15s)
    );
  }
`;

export const ThemePopover = styled.div`
  position: absolute;
  top: calc(100% + 24px);
  left: -16px;
  width: clamp(210px, 20vw, 280px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: clamp(12px, 1.35vw, 15px) clamp(10px, 1.25vw, 13px)
    clamp(11px, 1.25vw, 13px);
  border: 2px solid transparent;
  border-radius: clamp(14px, 1.6vw, 18px);
  color: var(--theme-text, #ffffff);
  background:
    linear-gradient(
      135deg,
      color-mix(in srgb, var(--theme-surface, #1f242a) 96%, transparent),
      color-mix(in srgb, var(--theme-surface, #1f242a) 88%, var(--theme-background, #0e141b) 12%)
    ) padding-box,
    linear-gradient(135deg, var(--theme-primary-bright, rgba(210, 91, 244, 0.95)), var(--theme-secondary-bright, rgba(125, 170, 255, 0.98))) border-box;
  box-shadow:
    0 10px 22px rgba(0, 0, 0, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  z-index: 1100;
  transform-origin: left center;
  animation: ${popoverReveal} 360ms cubic-bezier(0.16, 1, 0.3, 1) both;

  &::before {
    content: "";
    position: absolute;
    top: -12px;
    left: 30px;
    width: 0;
    height: 0;
    border-right: 12px solid transparent;
    border-bottom: 12px solid var(--theme-primary-bright, rgba(201, 94, 244, 0.95));
    border-left: 12px solid transparent;
    transform: translateX(-50%);
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    top: -10px;
    left: 30px;
    width: 0;
    height: 0;
    border-right: 10px solid transparent;
    border-bottom: 10px solid var(--theme-surface, rgba(36, 25, 72, 0.99));
    border-left: 10px solid transparent;
    transform: translateX(-50%);
    pointer-events: none;
  }

  @media (max-width: 520px) {
    left: -8px;
    width: min(260px, calc(100vw - 32px));
    padding: 14px 12px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const ThemePopoverTitle = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  margin: 0;
  color: inherit;
  font-size: clamp(14px, 1.16vw, 17px);
  font-weight: 600;
  line-height: 1.05;
  text-align: center;
  letter-spacing: 0;

  svg {
    flex: 0 0 auto;
    width: clamp(17px, 1.45vw, 20px);
    height: clamp(17px, 1.45vw, 20px);
    color: var(--theme-primary-bright, #8f65ff);
    filter: drop-shadow(0 0 8px var(--theme-shadow, rgba(143, 101, 255, 0.28)));
  }

  @media (max-width: 560px) {
    gap: 8px;
    font-size: 16px;
  }
`;

export const ThemePopoverSubtitle = styled.span`
  display: block;
  margin-top: 5px;
  color: var(--theme-muted-text, rgba(236, 240, 255, 0.72));
  font-size: clamp(8px, 0.8vw, 10px);
  font-weight: 400;
  line-height: 1.25;
  text-align: center;

  @media (max-width: 560px) {
    margin-top: 8px;
    font-size: 12px;
  }
`;

export const ThemeGrid = styled.div`
  width: 100%;
  max-width: 244px;
  display: grid;
  grid-template-columns: repeat(4, minmax(32px, 1fr));
  justify-content: center;
  gap: clamp(5px, 0.8vw, 8px);
  margin-top: clamp(10px, 1.25vw, 13px);

  @media (max-width: 760px) {
    grid-template-columns: repeat(2, minmax(90px, 1fr));
    row-gap: 16px;
  }
`;

export const ThemeSwatchOption = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

  button[aria-pressed="true"] + span {
    color: #ffffff;
  }
`;

export const ThemeSwatchButton = styled.button<{
  $primary: string;
  $secondary: string;
  $shadow: string;
}>`
  position: relative;
  width: clamp(29px, 2.9vw, 37px);
  height: clamp(29px, 2.9vw, 37px);
  padding: 0;
  border: 2px solid rgba(12, 14, 28, 0.82);
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    ${(props) => props.$primary} 0%,
    ${(props) => props.$primary} 47%,
    rgba(255, 255, 255, 0.86) 48%,
    rgba(255, 255, 255, 0.86) 55%,
    ${(props) => props.$secondary} 56%,
    ${(props) => props.$secondary} 100%
  );
  box-shadow:
    0 6px 14px rgba(0, 0, 0, 0.34),
    0 0 0 1px rgba(255, 255, 255, 0.5),
    0 0 12px ${(props) => props.$shadow},
    inset 0 -8px 14px rgba(0, 0, 0, 0.12),
    inset 0 8px 14px rgba(255, 255, 255, 0.26);
  cursor: pointer;
  transition:
    transform 0.28s cubic-bezier(0.16, 1, 0.3, 1);

  &::before {
    content: "";
    position: absolute;
    inset: 9%;
    border-radius: inherit;
    background:
      radial-gradient(circle at 33% 22%, rgba(255, 255, 255, 0.48), transparent 30%),
      linear-gradient(145deg, rgba(255, 255, 255, 0.18), transparent 45%);
    pointer-events: none;
  }

  &[aria-pressed="true"] {
    border-color: #ffffff;
    box-shadow:
      0 0 0 3px rgba(255, 255, 255, 0.98),
      0 6px 16px rgba(0, 0, 0, 0.32),
      0 0 14px ${(props) => props.$shadow},
      inset 0 -8px 14px rgba(0, 0, 0, 0.12),
      inset 0 8px 14px rgba(255, 255, 255, 0.26);
  }

  &:hover,
  &:focus-visible {
    transform: translateY(-3px) scale(1.02);
  }

  &:focus-visible {
    outline: 3px solid rgba(255, 255, 255, 0.7);
    outline-offset: 4px;
  }
`;

export const ThemeSelectedMark = styled.span<{
  $primary: string;
  $secondary: string;
  $shadow: string;
}>`
  position: absolute;
  top: -7px;
  right: -7px;
  width: clamp(17px, 1.7vw, 21px);
  height: clamp(17px, 1.7vw, 21px);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #ffffff;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    ${(props) => props.$primary},
    ${(props) => props.$secondary}
  );
  color: #ffffff;
  box-shadow: 0 4px 10px ${(props) => props.$shadow};
  z-index: 2;

  svg {
    width: 62%;
    height: 62%;
    stroke-width: 3;
  }
`;

export const ThemeSwatchLabel = styled.span`
  max-width: 100%;
  color: var(--theme-text, rgba(255, 255, 255, 0.9));
  font-size: clamp(7px, 0.68vw, 9px);
  font-weight: 500;
  line-height: 1.1;
  text-align: center;
  white-space: normal;
`;

export const ThemeOptions = styled.div`
  margin-top: clamp(8px, 1vw, 10px);
  padding: 3px 8px;
  border: 1px solid var(--theme-shadow, rgba(255, 255, 255, 0.14));
  border-radius: 999px;
  background: var(--theme-primary-soft, rgba(255, 255, 255, 0.08));
`;

export const ThemeCheckbox = styled.label`
  min-height: 22px;
  display: flex;
  align-items: center;
  gap: 5px;
  color: var(--theme-muted-text, rgba(255, 255, 255, 0.86));
  font-size: 9px;
  line-height: 1;
  cursor: pointer;

  input {
    width: 12px;
    height: 12px;
    accent-color: var(--theme-primary-bright, #964fdd);
    cursor: pointer;
  }
`;

export const SocialCluster = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: clamp(12px, 1.25vw, 18px);
  margin-left: auto;
  --icon-draw-duration: 1.75s;

  > a:nth-child(4) {
    --icon-draw-delay: 1.45s;
  }

  > a:nth-child(3) {
    --icon-draw-delay: 1.8s;
  }

  > a:nth-child(2) {
    --icon-draw-delay: 2.15s;
  }

  > a:nth-child(1) {
    --icon-draw-delay: 2.5s;
  }

  @media (max-width: 767px) {
    gap: clamp(7px, 2.4vw, 12px);
  }

  @media (max-width: 520px) {
    display: none;
  }
`;

export const MobileSocialWrapper = styled.div`
  position: relative;
  display: none;
  margin-left: auto;

  @media (max-width: 520px) {
    display: inline-flex;
  }
`;

export const MobileSocialButton = styled.button`
  ${drawnIconBase}
  --icon-final-stroke: 1.3px;
  display: inline-flex;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;

  svg {
    width: 28px;
    height: 28px;
  }
`;

export const MobileSocialPopover = styled.div`
  position: absolute;
  top: calc(100% + 18px);
  right: 0;
  z-index: 1200;
  width: 100px;
  padding: 12px 14px 14px;
  border-radius: 5px;
  color: #111827;
  background: #ffffff;
  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.22);
  animation: ${popoverReveal} 240ms cubic-bezier(0.16, 1, 0.3, 1) both;

  &::before {
    content: "";
    position: absolute;
    top: -9px;
    right: 12px;
    width: 18px;
    height: 18px;
    background: #ffffff;
    transform: rotate(45deg);
  }

  span {
    position: relative;
    z-index: 1;
    display: block;
    margin-bottom: 12px;
    color: #111827;
    font-size: 13px;
    line-height: 1;
    text-align: center;
  }

  div {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px 18px;
    align-items: center;
    justify-items: center;
  }

  a {
    --icon-draw-delay: 0.35s;
    --icon-draw-duration: 0.85s;
    --icon-final-stroke: 1.1px;
    width: 24px;
    height: 24px;
    flex-basis: 24px;
    color: #111827;
    filter: none;

    svg,
    &[data-social="email"] svg,
    &[data-social="resume"] svg,
    &[data-social="linkedin"] svg,
    &[data-social="github"] svg {
      width: 24px;
      height: 24px;
      filter: none;
    }

    svg {
      path:not([data-icon-fill]),
      circle:not([data-icon-fill]),
      rect:not([data-icon-fill]),
      line:not([data-icon-fill]),
      polyline:not([data-icon-fill]),
      polygon:not([data-icon-fill]) {
        animation-delay: 0s;
        animation-delay: var(--icon-draw-delay);
      }

      [data-icon-fill] {
        animation-delay: calc(
          var(--icon-draw-delay) + var(--icon-draw-duration)
        );
      }
    }

    &:hover,
    &:focus-visible {
      color: #111827;
      filter: none;
      transform: translateY(-2px);
    }
  }

  a:nth-child(2) {
    --icon-draw-delay: 0.7s;
  }

  a:nth-child(3) {
    --icon-draw-delay: 1.05s;
  }

  a:nth-child(4) {
    --icon-draw-delay: 1.4s;
  }
`;

export const SocialIconLink = styled.a`
  ${drawnIconBase}
  --icon-final-stroke: 1px;
  width: 34px;
  height: 34px;
  flex: 0 0 34px;

  svg {
    width: 30px;
    height: 30px;
    overflow: visible;
  }

  &[data-social="email"] svg {
    width: 31px;
    height: 31px;
  }

  &[data-social="resume"] {
    --icon-draw-fill-color: color-mix(in srgb, var(--theme-text, #ffffff) 34%, transparent);
    --icon-final-stroke: 1.25px;
  }

  &[data-social="resume"] svg {
    width: 30px;
    height: 30px;
  }

  &[data-social="linkedin"] {
    --icon-draw-fill-color: color-mix(in srgb, var(--theme-text, #ffffff) 78%, transparent);
    --icon-final-stroke: 0.35px;
  }

  &[data-social="linkedin"] svg {
    width: 29px;
    height: 29px;
  }

  &[data-social="github"] {
    --icon-draw-fill-color: color-mix(in srgb, var(--theme-text, #ffffff) 46%, var(--theme-background, #0e141b));
    --icon-final-stroke: 0.9px;
  }

  &[data-social="github"] svg {
    width: 29px;
    height: 29px;
  }

  &[data-social="email"] {
    --icon-part-fill-color: color-mix(in srgb, var(--theme-text, #ffffff) 34%, transparent);
    --icon-fill-opacity: 0.85;
    --icon-final-stroke: 1.35px;
  }

  @media (max-width: 520px) {
    width: 28px;
    height: 28px;
    flex-basis: 28px;

    svg,
    &[data-social="email"] svg,
    &[data-social="resume"] svg,
    &[data-social="linkedin"] svg,
    &[data-social="github"] svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const Navbar = styled.nav`
  position: fixed;
  top: 26px;
  left: 50%;
  width: calc(100% - 64px);
  min-height: 56px;
  z-index: 1000;
  padding: 0;
  border: none;
  outline: none;
  border-radius: 0;
  background: transparent;
  backdrop-filter: blur(0);
  transform: translateX(-50%);
  transition:
    transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.35s ease,
    width 0.24s ease,
    top 0.24s ease,
    min-height 0.24s ease,
    padding 0.24s ease,
    background 0.24s ease,
    backdrop-filter 0.24s ease,
    border-color 0.24s ease,
    box-shadow 0.24s ease;

  &.nav-hidden {
    opacity: 0;
    pointer-events: none;
    transform: translate(-50%, -120%);
  }

  &.sticky {
    top: 20px;
    min-height: 80px;
    padding: 0 clamp(26px, 2.5vw, 44px);
    border: none;
    outline: none;
    border-radius: 999px;
    background: rgba(31, 36, 42, 0.61);
    backdrop-filter: blur(14px) saturate(120%);
    -webkit-backdrop-filter: blur(22px) saturate(125%);
    box-shadow: 0 18px 46px rgba(0, 0, 0, 0.18);
  }

  &.sticky.logo-docked {
    top: 20px;
    width: calc(100% - 64px);
    min-height: 80px;
    padding: 0 clamp(26px, 2.5vw, 44px);
    border: none;
    outline: none;
    border-radius: 999px;
    background: rgba(31, 36, 42, 0.61);
    backdrop-filter: blur(14px) saturate(120%);
    -webkit-backdrop-filter: blur(14px) saturate(120%);
    box-shadow: 0 18px 46px rgba(0, 0, 0, 0.18);
  }

  html[data-color-scheme="light"] &.sticky,
  html[data-color-scheme="light"] &.sticky.logo-docked,
  :root[data-color-scheme="light"] &.sticky,
  :root[data-color-scheme="light"] &.sticky.logo-docked {
    background: rgba(31, 36, 42, 0.58);
  }

  html[data-color-scheme="light"] &.sticky,
  :root[data-color-scheme="light"] &.sticky {
    ${NavBrandLogo},
    ${ThemeControlButton},
    ${SocialIconLink},
    ${MobileSocialButton} {
      color: #ffffff;
    }

    ${NavBrandLogo} svg,
    ${ThemeControlButton} svg,
    ${SocialIconLink} svg,
    ${MobileSocialButton} svg {
      color: #ffffff;
    }

    ${ThemeControlButton}[aria-expanded="true"],
    ${ThemeControlButton}[aria-pressed="true"] {
      color: #33d6f4;
    }

    ${ThemeControlButton}[aria-expanded="true"] svg,
    ${ThemeControlButton}[aria-pressed="true"] svg {
      color: #33d6f4;
    }
  }

  &.icons-ready {
    ${ControlCluster} {
      > button:first-child,
      > div button {
        --icon-draw-delay: 0s;
        --mode-icon-draw-duration: 0.82s;
      }
    }
  }

  &.logo-slot-ready {
    ${NavBrandLogo} {
      width: 54px;
      max-width: 54px;
      margin-right: clamp(16px, 1.6vw, 24px);
      overflow: visible;
      opacity: 0;
    }
  }

  &.logo-docked {
    ${NavBrandLogo} {
      animation: ${logoArrive} 0.28s cubic-bezier(0.16, 1, 0.3, 1) 0.86s both;
    }
  }

  &.logo-returning {
    ${NavBrandLogo} {
      opacity: 0;
      transform: scale(0.82);
      animation: none;
    }
  }

  .max-width {
    width: 100%;
    min-height: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    gap: 24px;
  }

  @media (max-width: 767px) {
    top: 18px;
    width: calc(100% - 32px);
    min-height: 56px;

    &.sticky {
      top: 14px;
      min-height: 60px;
      padding: 0 12px;
    }

    .max-width {
      gap: 10px;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1100px) {
    width: calc(100% - 48px);
  }

  @media (max-width: 520px) {
    width: calc(100% - 20px);

    &.sticky,
    &.sticky.logo-docked {
      width: calc(100% - 20px);
      padding: 0 10px;
    }

    ${NavBrandLogo} svg {
      width: 46px;
      height: 34px;
    }
  }
`;

export const ScrollUpBtn = styled.div`
  position: fixed;
  height: 45px;
  width: 42px;
  background: #1e3551;
  right: 30px;
  bottom: 10px;
  text-align: center;
  line-height: 45px;
  color: #fff;
  z-index: 9999;
  font-size: 30px;
  border-radius: 6px;
  border-bottom-width: 2px;
  cursor: pointer;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;

  &.show {
    bottom: 30px;
    opacity: 1;
    pointer-events: auto;
  }

  &:hover {
    filter: brightness(90%);
  }
`;

export const Section = styled.section`
  padding: 100px 0;

  .max-width {
    max-width: 1300px;
    margin: auto;
  }
`;

export const HomeContent = styled.div`
  .text-1 {
    font-size: 24px;
  }

  .text-2 {
    font-size: 40px;
  }

  .text-3 {
    font-size: 24px;
  }
`;

export const Container = styled.div``;

export const BackToTopButton = styled.button`
  position: fixed;
  right: 30px;
  bottom: 34px;
  width: 48px;
  height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 1px solid color-mix(in srgb, var(--theme-secondary-bright, #33d6f4) 52%, #ffffff);
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    var(--theme-primary-bright, #964fdd),
    var(--theme-secondary-bright, #33d6f4)
  );
  color: #ffffff;
  cursor: pointer;
  z-index: 1000;
  box-shadow:
    0 14px 28px rgba(9, 5, 29, 0.34),
    0 0 18px var(--theme-shadow, rgba(127, 0, 255, 0.24)),
    inset 0 1px 0 rgba(255, 255, 255, 0.32);
  isolation: isolate;
  overflow: hidden;
  transition:
    transform 0.24s cubic-bezier(0.16, 1, 0.3, 1),
    filter 0.24s ease,
    box-shadow 0.24s ease;

  &::before {
    content: "";
    position: absolute;
    inset: 5px;
    z-index: -1;
    border-radius: inherit;
    background:
      radial-gradient(circle at 34% 22%, rgba(255, 255, 255, 0.42), transparent 34%),
      rgba(0, 0, 0, 0.08);
  }

  svg {
    font-size: 17px;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.28));
    transition: transform 0.24s cubic-bezier(0.16, 1, 0.3, 1);
  }

  &:hover {
    transform: translateY(-4px) scale(1.04);
    filter: brightness(1.05);
    box-shadow:
      0 18px 34px rgba(9, 5, 29, 0.38),
      0 0 26px var(--theme-shadow, rgba(127, 0, 255, 0.32)),
      inset 0 1px 0 rgba(255, 255, 255, 0.38);
  }

  &:hover svg {
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 3px solid color-mix(in srgb, var(--theme-secondary-bright, #33d6f4) 60%, transparent);
    outline-offset: 4px;
  }

  @media (max-width: 767px) {
    right: 16px;
    bottom: 20px;
    width: 44px;
    height: 44px;
  }
`;

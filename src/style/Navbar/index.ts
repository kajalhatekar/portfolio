import { ListItemProps } from "interfaces";
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

export const Unorderli = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(18px, 2vw, 32px);
  min-width: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transform: translate(-50%, calc(-50% - 8px));
  transition:
    opacity 0.24s ease,
    visibility 0.24s ease,
    transform 0.24s ease;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const Listitems = styled.li<ListItemProps>`
  display: flex;
  align-items: center;
  margin: 0;
  color: var(--theme-text, ${(props) => props.theme.color.second});

  a {
    min-height: 38px;
    display: inline-flex;
    align-items: center;
    position: relative;
    padding: 0 2px;
    color: inherit;
    text-decoration: none;
    font-size: clamp(13px, 1vw, 15px);
    font-weight: 600;
    line-height: 1;
    letter-spacing: 0;
    white-space: nowrap;
    transition: color 0.24s ease;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 7px;
      height: 2px;
      border-radius: 999px;
      background: linear-gradient(
        90deg,
        var(--theme-secondary-bright, #33d6f4),
        var(--theme-primary-bright, #964fdd)
      );
      transform: scaleX(${(props) => (props.isActive ? 1 : 0)});
      transform-origin: center;
      transition: transform 0.24s ease;
    }

    &:focus-visible {
      outline: 3px solid var(--theme-shadow, rgba(150, 79, 221, 0.42));
      outline-offset: 5px;
      border-radius: 6px;
    }
  }

  &:hover {
    a {
      color: var(--theme-text, #f7f1ff);

      &::after {
        transform: scaleX(1);
      }
    }
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
    width: min(92vw, calc(100vw - 32px));
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
    gap: 12px;
    font-size: 28px;
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
    margin-top: 12px;
    font-size: 16px;
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
    row-gap: 24px;
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
    display: none;
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
`;

export const InnerWrapper = styled.div`
  width: 100%;
  max-width: 290px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 96px 32px 42px;
  text-align: center;
  background:
    radial-gradient(ellipse at 20% 18%, var(--theme-primary-soft, rgba(150, 79, 221, 0.28)), transparent 36%),
    radial-gradient(ellipse at 82% 76%, var(--theme-secondary-dark, rgba(51, 214, 244, 0.14)), transparent 38%),
    var(--theme-background, #140c1c);

  ${Listitems} {
    width: 100%;

    a {
      width: 100%;
      min-height: 56px;
      justify-content: center;
      padding: 0 18px;
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.055);
      font-size: 20px;
      transition:
        background 0.24s ease,
        border-color 0.24s ease,
        transform 0.24s ease;

      &::after {
        display: none;
      }

      &:hover {
        border-color: var(--theme-shadow, rgba(150, 79, 221, 0.54));
        background: var(--theme-primary-soft, rgba(150, 79, 221, 0.18));
        transform: translateY(-2px);
      }
    }
  }

  @media (max-width: 767px) {
    padding: 88px 22px 34px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    padding: 104px 34px 46px;
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
    width 0.24s ease,
    top 0.24s ease,
    min-height 0.24s ease,
    padding 0.24s ease,
    background 0.24s ease,
    backdrop-filter 0.24s ease,
    border-color 0.24s ease,
    box-shadow 0.24s ease;

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
    min-height: 60px;

    &.sticky {
      top: 20px;
      padding: 0 12px;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1100px) {
    width: calc(100% - 48px);
  }
`;

export const MobileRightSection = styled.div`
  display: none;
  align-items: center;
  margin-left: auto;

  @media (max-width: 1100px) {
    display: flex;
  }
`;

export const MobileMenuIconWrapper = styled.button`
  --icon-draw-delay: 1.25s;
  --icon-final-stroke: 0.85px;

  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.07);
  color: var(--theme-text, #ffffff);
  cursor: pointer;
  transition:
    transform 0.24s ease,
    background 0.24s ease,
    border-color 0.24s ease;

  svg {
    width: 24px;
    height: 24px;

    path,
    circle,
    rect,
    line,
    polyline,
    polygon {
      stroke: currentColor;
      stroke-width: var(--icon-draw-stroke, 1.4px);
      stroke-linecap: round;
      stroke-linejoin: round;
      vector-effect: non-scaling-stroke;
      animation: ${drawIconAnimation} 2.6s ease-in-out both;
      animation-delay: var(--icon-draw-delay, 1.25s);
    }
  }

  &:hover {
    transform: translateY(-2px);
    border-color: var(--theme-shadow, rgba(150, 79, 221, 0.55));
    background: var(--theme-primary-soft, rgba(150, 79, 221, 0.18));
  }

  &:focus-visible {
    outline: 3px solid var(--theme-shadow, rgba(150, 79, 221, 0.42));
    outline-offset: 4px;
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
        fill: var(--icon-fill-color, transparent);
        stroke-dashoffset: 0;
        fill-opacity: 1;
      }
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
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    var(--theme-primary-bright, #964fdd),
    var(--theme-secondary-bright, #33d6f4)
  );
  color: #ffffff;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 14px 28px rgba(9, 5, 29, 0.34);
  transition:
    transform 0.24s ease,
    filter 0.24s ease;

  svg {
    font-size: 16px;
  }

  &:hover {
    transform: translateY(-3px);
    filter: brightness(1.05);
  }

  @media (max-width: 767px) {
    right: 16px;
    bottom: 20px;
  }
`;

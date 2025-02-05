import { useRef, FC } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate
} from "framer-motion";
import "./styles.css";

interface ContentLineProps {
  content: string;
}

const Content: FC<ContentLineProps> = ({ content }) => {
  const contentRef = useRef<HTMLSpanElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["end center", "start start"]
  });

  const scrollValue = useTransform(scrollYProgress, [0, 0.15], ["100%", "0%"]);
  const clipPathVal = useMotionTemplate`inset(0% ${scrollValue} 0% 0%)`;

  return (
    <span className="text-container" ref={contentRef}>
      <motion.span
        style={{ clipPath: clipPathVal }}
        className="highlighted-text"
        data-text={content}
      />
      <span className="static-text">{content}</span>
    </span>
  );
};

interface ScrollTextProps {
  content: string[];
}

export const ScrollText: FC<ScrollTextProps> = ({ content }) => {
  return (
    <div className="outer">
      <div className="inner">
        <p>
          {content.map((item) => (
            <Content key={item} content={item} />
          ))}
        </p>
      </div>
    </div>
  );
};

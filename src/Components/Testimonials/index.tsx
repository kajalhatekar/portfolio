import { useEffect, useState, type FC } from "react";

import classNames from "classnames";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useInView } from "react-intersection-observer";

import { TestimonialDivider } from "Components/Devider";
import { TestimonialSectionTransition } from "Components/TestimonialSectionTransition/TestimonialSectionTransition";

import { TestimonialCard } from "./TestimonialCard/TestimonialCard";
import { testimonials } from "./testimonials.const";

import styles from "./Testimonials.module.css";

const getWrappedIndex = (index: number) =>
  (index + testimonials.length) % testimonials.length;

const getStackPosition = (index: number, activeIndex: number) => {
  if (index === activeIndex) return "active";
  if (index === getWrappedIndex(activeIndex + 1)) return "next";
  if (index === getWrappedIndex(activeIndex - 1)) return "previous";
  if (index === getWrappedIndex(activeIndex + 2)) return "nextFar";
  if (index === getWrappedIndex(activeIndex - 2)) return "previousFar";

  return "hidden";
};

const Testimonials: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { inView, ref } = useInView({ threshold: 0.25 });

  useEffect(() => {
    if (!inView) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((index) => getWrappedIndex(index + 1));
    }, 8000);

    return () => window.clearInterval(intervalId);
  }, [inView]);

  const showPrevious = () => {
    setActiveIndex((index) => getWrappedIndex(index - 1));
  };

  const showNext = () => {
    setActiveIndex((index) => getWrappedIndex(index + 1));
  };

  return (
    <div className={styles.container}>
      <div aria-hidden className={styles.anchor} id="testimonials" />

      <TestimonialDivider position="top" />

      <section className={styles.content}>
        <h2 className={styles.title}>
          What my colleagues have to say about me?
        </h2>

        <div
          className={classNames(styles.carouselContainer, {
            [styles.carouselVisible]: inView,
          })}
          ref={ref}
        >
          <button
            aria-label="Previous testimonial"
            className={classNames(
              styles.navigationButton,
              styles.previousButton,
            )}
            onClick={showPrevious}
            type="button"
          >
            <FiChevronLeft />
          </button>

          <div className={styles.cardStage} aria-live="polite">
            {testimonials.map((testimonial, index) => {
              const stackPosition = getStackPosition(index, activeIndex);
              const isActive = stackPosition === "active";

              return (
                <article
                  aria-hidden={!isActive}
                  className={styles.cardShell}
                  data-stack={stackPosition}
                  key={testimonial.author.name}
                >
                  <TestimonialCard
                    accent={testimonial.author.accent}
                    authorInitials={testimonial.author.initials}
                    authorName={testimonial.author.name}
                    authorRole={testimonial.author.role}
                    currentTestimonial={index + 1}
                    isActive={isActive}
                    stackPosition={stackPosition}
                    totalTestimonial={testimonials.length}
                  >
                    {testimonial.quote}
                  </TestimonialCard>
                </article>
              );
            })}
          </div>

          <button
            aria-label="Next testimonial"
            className={classNames(styles.navigationButton, styles.nextButton)}
            onClick={showNext}
            type="button"
          >
            <FiChevronRight />
          </button>
        </div>

        <em className={styles.titleDescription}>
          All testimonials spontaneously provided by colleagues
        </em>
      </section>

      <TestimonialSectionTransition />
      <TestimonialDivider position="bottom" />
    </div>
  );
};

export default Testimonials;

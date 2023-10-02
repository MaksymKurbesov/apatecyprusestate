import React, { useRef, useState } from "react";
import styles from "./PlansList.module.scss";
import Plan from "./Plan/Plan";
import Slider from "react-slick";
import { useWindowSize } from "../../hooks/useWindowSize";
import RadioButton from "../../Shared UI/RadioButton/RadioButton";
import { ReactComponent as Chevron } from "../../assets/SVG/chevron-down.svg";
import { PLANS } from "../../utils/consts";
import { useFormContext } from "react-hook-form";

const setSlidesToShow = (windowSize) => {
  let slidesToShow;

  if (windowSize > 1200) {
    slidesToShow = 3;
  }

  if (windowSize <= 1200) {
    slidesToShow = 2;
  }

  if (windowSize <= 580) {
    slidesToShow = 1;
  }

  return slidesToShow;
};

const PlansList = ({ isPayNow }) => {
  const windowDimension = useWindowSize();
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [arrowsIsAvailable, setArrowsIsAvailable] = useState(true);
  const { watch, register } = useFormContext();

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: setSlidesToShow(windowDimension),
    slidesToScroll: 1,
    arrows: false,
    afterChange: (index) => {
      setArrowsIsAvailable(true);
      setCurrentSlide(index);
    },
  };

  const changeSlide = (e, direction) => {
    e.preventDefault();

    if (arrowsIsAvailable) {
      setCurrentSlide((prevState) => {
        setArrowsIsAvailable(false);
        sliderRef?.current?.slickGoTo(prevState + direction);
        return prevState + direction;
      });
    }
  };

  return (
    <>
      <Slider ref={sliderRef} {...settings}>
        {PLANS.map((plan, index) => {
          const isChecked = watch("region") === plan.name;
          const checkedClassName = isChecked && styles["isChecked"];

          return (
            <div
              key={index}
              className={`${styles["plan-wrapper"]} ${checkedClassName}`}
            >
              <RadioButton
                register={register}
                value={plan.name}
                radioName={"region"}
              >
                <Plan plan={plan} isPayNow={isPayNow} />
              </RadioButton>
            </div>
          );
        })}
      </Slider>
      <>
        <button
          className={styles["slick-arrow-prev"]}
          onClick={(e) => {
            e.preventDefault();
            // changeSlide(e, -1);
            sliderRef?.current?.slickPrev();
          }}
        >
          <Chevron />
        </button>

        <button
          className={styles["slick-arrow-next"]}
          onClick={(e) => {
            e.preventDefault();
            sliderRef?.current?.slickNext();
          }}
        >
          <Chevron />
        </button>
      </>
    </>
  );
};

export default PlansList;

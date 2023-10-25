import React, { useRef } from "react";
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

const PlansList = () => {
  const windowDimension = useWindowSize();
  const sliderRef = useRef(null);
  const { watch, register } = useFormContext();

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: setSlidesToShow(windowDimension),
    slidesToScroll: 1,
    arrows: false,
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
                <Plan plan={plan} />
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

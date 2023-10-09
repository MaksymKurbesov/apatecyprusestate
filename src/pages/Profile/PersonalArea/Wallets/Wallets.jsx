import React, { useRef } from "react";
import styles from "./Wallets.module.scss";
import Wallet from "./Wallet/Wallet";
import Slider from "react-slick";
import { ReactComponent as Chevron } from "../../../../assets/SVG/chevron-down.svg";
import { WALLETS } from "../../../../utils/consts";
import { useWindowSize } from "../../../../hooks/useWindowSize";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Wallets = ({ wallets }) => {
  const sliderRef = useRef(null);
  const windowSize = useWindowSize();
  const walletsSortedByAvailable = Object.entries(wallets).sort(
    (a, b) => b[1].available - a[1].available
  );

  return (
    <div className={styles["wallets"]}>
      <Slider ref={sliderRef} {...settings}>
        {walletsSortedByAvailable.map((wallet) => {
          const foundWallet = WALLETS.find((wlt) => wlt.name === wallet[0]);

          return (
            <Wallet
              key={wallet[0]}
              wallet={{ name: wallet[0], ...wallet[1], ...foundWallet }}
            />
          );
        })}
      </Slider>
      {windowSize > 480 ? (
        <>
          <button
            className={styles["slick-arrow-prev"]}
            onClick={() => sliderRef?.current?.slickPrev()}
          >
            <Chevron />
          </button>
          <button
            className={styles["slick-arrow-next"]}
            onClick={() => sliderRef?.current?.slickNext()}
          >
            <Chevron />
          </button>
        </>
      ) : null}
    </div>
  );
};

export default Wallets;

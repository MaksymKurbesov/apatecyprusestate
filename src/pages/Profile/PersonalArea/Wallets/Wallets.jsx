import React, { useRef } from "react";
import styles from "./Wallets.module.scss";
import Wallet from "./Wallet/Wallet";
import Slider from "react-slick";
import { ReactComponent as Chevron } from "../../../../assets/SVG/chevron-down.svg";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import {
  getCorrectWallets,
  sortWalletsByAvailable,
} from "../../../../utils/helpers";

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

  const userWallets = getCorrectWallets(wallets);
  const sortedUserWallets = sortWalletsByAvailable(userWallets);

  return (
    <div className={styles["wallets"]}>
      <Slider ref={sliderRef} {...settings}>
        {sortedUserWallets.map((userWallet) => {
          return <Wallet key={userWallet.name} wallet={userWallet} />;
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

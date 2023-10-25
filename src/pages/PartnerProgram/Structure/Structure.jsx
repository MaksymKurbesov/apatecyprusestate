import React from "react";
import styles from "./Structure.module.scss";
import Title from "../../../Shared UI/Title/Title";
import SectionLabel from "../../../Shared UI/SectionLabel/SectionLabel";
import { useTranslation } from "react-i18next";
import { ReactComponent as AdvancedStatus } from "../../../assets/SVG/referral status/advanced.svg";
import { ReactComponent as IronStatus } from "../../../assets/SVG/referral status/iron.svg";
import { ReactComponent as BronzeStatus } from "../../../assets/SVG/referral status/bronze.svg";
import { ReactComponent as SilverStatus } from "../../../assets/SVG/referral status/silver.svg";
import { ReactComponent as GoldStatus } from "../../../assets/SVG/referral status/gold.svg";
import { ReactComponent as PlatinumStatus } from "../../../assets/SVG/referral status/platinum.svg";
import { ReactComponent as DiamondStatus } from "../../../assets/SVG/referral status/diamond.svg";
import { ReactComponent as SapphireStatus } from "../../../assets/SVG/referral status/sapphire.svg";

const Structure = () => {
  const { t } = useTranslation("structure");

  return (
    <div className={styles["structure"]}>
      <div className={"container"}>
        <SectionLabel text={"Структуры"} style={{ marginBottom: 40 }} />
        <Title text={<>{t("title")}</>} />
        <p className={styles["subtitle"]}>{t("subtitle")}</p>
        <div className={styles["table-wrapper"]}>
          <table className={styles["table"]}>
            <thead>
              <tr>
                <th>{t("rank")}</th>
                <th>{t("structure_total")}</th>
                <th>{t("min_deposit")}</th>
                <th>{t("ref_bonus")}</th>
                <th>{t("reward")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles["rank"]}>
                  <AdvancedStatus /> {t("novice")}
                </td>
                <td>$3000</td>
                <td>$100</td>
                <td>5%-4%-3%-2%</td>
                <td>$150</td>
              </tr>
              <tr>
                <td className={styles["rank"]}>
                  <IronStatus /> {t("iron")}
                </td>
                <td>$9000</td>
                <td>$1000</td>
                <td>5%-4%-3%-2%-1%</td>
                <td>$450</td>
              </tr>
              <tr>
                <td className={styles["rank"]}>
                  <BronzeStatus />
                  {t("bronze")}
                </td>
                <td>$15000</td>
                <td>$3500</td>
                <td>6%-4%-3%-2%-1%-1%</td>
                <td>$1000</td>
              </tr>
              <tr>
                <td className={styles["rank"]}>
                  <SilverStatus />
                  {t("silver")}
                </td>
                <td>$21000</td>
                <td>$6000</td>
                <td>6%-5%-4%-3%-2%-1%</td>
                <td>$2000</td>
              </tr>
              <tr>
                <td className={styles["rank"]}>
                  <GoldStatus />
                  {t("gold")}
                </td>
                <td>$40000</td>
                <td>$10000</td>
                <td>7%-6%-5%-4%-3%-2%</td>
                <td>$3100</td>
              </tr>
              <tr>
                <td className={styles["rank"]}>
                  <PlatinumStatus />
                  {t("platinum")}
                </td>
                <td>$85000</td>
                <td>$20000</td>
                <td>8%-7%-6%-5%-4%-3%</td>
                <td>$6500</td>
              </tr>
              <tr>
                <td className={styles["rank"]}>
                  <DiamondStatus />
                  {t("brilliant")}
                </td>
                <td>$120000</td>
                <td>$40000</td>
                <td>9%-8%-6%-5%-4%-3%</td>
                <td>$12000</td>
              </tr>
              <tr>
                <td className={styles["rank"]}>
                  <SapphireStatus />
                  {t("sapphire")}
                </td>
                <td>$250000</td>
                <td>$80000</td>
                <td>10%-9%-8%-7%-6%-5%</td>
                <td>$25000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <ul className={styles["description"]}>
          <li>
            <span>1. {t("rank")}:</span>
            <p>{t("rank_description")}</p>
          </li>
          <li>
            <span>2. {t("structure_total")}:</span>
            <p>{t("structure_total_description")}</p>
          </li>
          <li>
            <span>3. {t("min_deposit")}:</span>
            <p>{t("min_deposit_description")}</p>
          </li>
          <li>
            <span>4. {t("ref_bonus")}:</span>
            <p>{t("ref_bonus_description")}</p>
          </li>
          <li>
            <span>5. {t("reward")}:</span>
            <p>{t("reward_description")}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Structure;

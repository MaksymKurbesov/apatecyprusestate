import React from "react";
import styles from "./Table.module.scss";
import { useTranslation } from "react-i18next";

const Table = ({ columns = [], data = [], className }) => {
  const { t } = useTranslation();
  const labelClassName = `${styles[`${className}-label`]} ${styles["label"]}`;

  return (
    <table className={`${styles["table"]} ${styles[className]}`}>
      <thead>
        <tr>
          {columns.map((column) => {
            return (
              <td
                className={`${styles[`${column.key}-thead`]}`}
                key={column.key}
                style={{ width: `${column.width}` }}
              >
                {t(`table_headers.${column.key}`)}
              </td>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          return (
            <tr key={index}>
              {columns.map((column, index) => {
                return (
                  <td
                    key={index}
                    className={`${styles[`${column.key}-cell`]}`}
                    style={{ width: `${column.width}` }}
                  >
                    {/*<div className={labelClassName}>{column.title}</div>*/}
                    <div className={labelClassName}>
                      {t(`table_headers.${column.key}`)}
                    </div>
                    <div>{item[column.key]}</div>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;

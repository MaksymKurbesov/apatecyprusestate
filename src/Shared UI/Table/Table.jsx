import React from "react";
import styles from "./Table.module.scss";

const Table = ({ columns = [], data = [], className }) => {
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
                {column.title}
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
                    <div className={labelClassName}>{column.title}</div>
                    <>{item[column.key]}</>
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

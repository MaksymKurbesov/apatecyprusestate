import React from "react";
import Icon1 from "../../../assets/SVG/1 benefit icon.svg";
import Icon2 from "../../../assets/SVG/2 benefit icon.svg";
import Icon3 from "../../../assets/SVG/3 benefit icon.svg";
import Icon4 from "../../../assets/SVG/4 benefit icon.svg";
import Icon5 from "../../../assets/SVG/5 benefit icon.svg";
import Icon6 from "../../../assets/SVG/6 benefit icon.svg";
import styles from "./JobBenefits.module.scss";
import Title from "../../../Shared UI/Title/Title";
import SectionLabel from "../../../Shared UI/SectionLabel/SectionLabel";

const BENEFITS = [
  {
    title: "Профессиональное управление",
    text: "Apate Cyprus Estate обеспечивает профессиональное управление проектами, что освобождает инвесторов от необходимости лично участвовать в управлении и мониторинге инвестиций.",
    icon: Icon1,
  },
  {
    title: "Минимальные риски",
    text: "Компания проводит тщательный анализ и выбор проектов, минимизируя риски для инвесторов. Это позволяет инвесторам вкладывать средства с уверенностью в успешный результат.",
    icon: Icon2,
  },
  {
    title: "Ликвидность и гибкость",
    text: "Несмотря на то, что инвестирование в недвижимость может считаться долгосрочным вложением, Apate Cyprus Estate предоставляет гибкость в вопросах сроков инвестирования и возврата средств.",
    icon: Icon3,
  },
  {
    title: "Устойчивое развитие",
    text: "Компания Apate Cyprus Estate стремится к устойчивому развитию, сбалансированному подходу к экономическим, экологическим и социальным аспектам. Мы строим не только для сегодняшнего дня, но и для будущих поколений.",
    icon: Icon4,
  },
  {
    title: "Прозрачность и доверие",
    text: "Мы ценим доверие наших клиентов и инвесторов. Вся наша деятельность основана на принципах прозрачности и открытости. Мы предоставляем детальную информацию о наших проектах, финансовых показателях и деятельности компании.",
    icon: Icon5,
  },
  {
    title: "Социальная ответственность",
    text: "Apate Cyprus Estate активно участвует в социальных и благотворительных инициативах, что говорит о нашей ответственности перед обществом.",
    icon: Icon6,
  },
];

const JobBenefits = () => {
  return (
    <section className={styles["job-benefits"]}>
      <div className={"container"}>
        <SectionLabel text={"Why we?"} style={{ marginBottom: 30 }} />
        <Title text={"Job Benefits"} />
        <ul className={styles["benefits-list"]}>
          {BENEFITS.map(({ title, text, icon }) => {
            return (
              <li key={title} className={styles["benefit"]}>
                <div className={styles["icon"]}>
                  <img src={icon} alt={"Icon"} />
                </div>

                <h4>{title}</h4>
                <p>{text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default JobBenefits;

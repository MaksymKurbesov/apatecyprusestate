import React from "react";
import "./Deposit.scss";
import styles from "./Deposit.module.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Table from "../../../../Shared UI/Table/Table";

const Deposits = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Active Deposits</Tab>
        <Tab>Completed Deposits</Tab>
      </TabList>
      <TabPanel>
        <Table />
      </TabPanel>
      <TabPanel>Content 2</TabPanel>
    </Tabs>
    // <div>
    //   <div>
    //     <p>Active Deposits</p>
    //     <p>Completed Deposits</p>
    //   </div>
    //   <table></table>
    // </div>
  );
};

export default Deposits;

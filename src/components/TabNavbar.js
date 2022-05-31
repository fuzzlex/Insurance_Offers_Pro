import {    Button, Tab, Tabs } from "@material-ui/core";
import {  AssignmentOutlined } from "@material-ui/icons";
import React, { useState } from "react";

const TabNavbar = ({ handleFetchData }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Tabs
          className="navbar-tab"
          indicatorColor="secondary"
          value={value}
          onChange={handleChange}
          aria-label="icon label tabs example"
        >
          <Tab
            style={{ fontWeight: "900" }}
            onClick={() => handleFetchData("task1")}
            icon={<AssignmentOutlined />}
            label="TASK 1"
          />
          <Tab
            onClick={() => handleFetchData("task2")}
            icon={<AssignmentOutlined />}
            label="TASK 2"
          />
          <Tab
            onClick={() => handleFetchData("task3")}
            icon={<AssignmentOutlined />}
            label="TASK 3"
          />
          <Button href="/" variant="outlined" color="primary">REFRESH</Button>
        </Tabs>
      </div>
    </div>
  );
};

export default TabNavbar;

import * as React from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="basic tabs example"
      className="!flex !gap-2 !space-x-1 !mr-3"
    >
      <Tab
        className="!border !rounded-lg !border-[#f2f4f5]"
        label="Все товары"
        {...a11yProps(0)}
      />
      <Tab
        className="!border !rounded-lg !border-[#f2f4f5] max-[312px]:!hidden"
        label="Инструменты"
        {...a11yProps(1)}
      />
      <Tab
        className="!border !rounded-lg !border-[#f2f4f5] max-[435px]:!hidden"
        label="Сантехника"
        {...a11yProps(2)}
      />
      <Tab
        className="!border !rounded-lg !border-[#f2f4f5] max-[555px]:!hidden"
        label="Для дома"
        {...a11yProps(3)}
      />
      <Tab
        className="!border !rounded-lg !border-[#f2f4f5] max-[674px]:!hidden"
        label="Для сада"
        {...a11yProps(4)}
      />
    </Tabs>
  );
}

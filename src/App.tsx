import * as React from "react";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Button from "@material-ui/core/Button";

import { TabPanel } from "./TabPanel";
import Home from "./Views/Home";
import Task1 from "./Views/Task1";
import Task2 from "./Views/Task2";
import Task3 from "./Views/Task3";
import Task4 from "./Views/Task4";

import useStyles from "./styles";
import { CssBaseline } from "@material-ui/core";
import { getFileUrl } from "./utils";

const a11yProps = (index: any) => ({
  id: `vertical-tab-${index}`
});

export default function App() {
  const classes = useStyles();
  const [tab, setTab] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTab(newValue);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={tab}
        onChange={handleChange}
        className={classes.tabs}
      >
        <Tab label="Главная" {...a11yProps(0)} />
        <Tab label="Задание 1" {...a11yProps(1)} />
        <Tab label="Задание 2" {...a11yProps(2)} />
        <Tab label="Задание 3" {...a11yProps(3)} />
        <Tab label="Задание 4" {...a11yProps(4)} />
        {window.top === window ? (
          <Button
            color="primary"
            className={classes.fab}
            onClick={() => {
              window.location.href = getFileUrl(
                "/public/tasks/task_1/index.js"
              );
            }}
          >
            Приступить
          </Button>
        ) : null}
      </Tabs>
      <TabPanel value={tab} index={0}>
        <Home />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <Task1 />
      </TabPanel>
      <TabPanel value={tab} index={2}>
        <Task2 />
      </TabPanel>
      <TabPanel value={tab} index={3}>
        <Task3 />
      </TabPanel>
      <TabPanel value={tab} index={4}>
        <Task4 />
      </TabPanel>
    </div>
  );
}

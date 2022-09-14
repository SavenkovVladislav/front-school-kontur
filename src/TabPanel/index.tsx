import * as React from "react";
import Box from "@material-ui/core/Box";

export interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

export function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          p={3}
          width="calc(100vw - 260px)"
          minWidth="500px"
          maxWidth="1000px"
        >
          {children}
        </Box>
      )}
    </div>
  );
}

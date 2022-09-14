import { makeStyles, Theme } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) => ({
  app: {
    fontFamily: "sans-serif"
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    minHeight: "100vh"
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    minWidth: 160
  },
  fab: {
    color: "#fff",
    backgroundColor: "#d92932",
    "&:hover": {
      backgroundColor: "#a7121a"
    }
  }
}));

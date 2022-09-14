import { makeStyles, Theme } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) => ({
  root: {
    "& p": {
      width: "100%"
    },
    "& pre": {
      width: "100%"
    }
  },
  code: {
    backgroundColor: "#f3f3f3",
    borderRadius: 5,
    padding: 6
  }
}));

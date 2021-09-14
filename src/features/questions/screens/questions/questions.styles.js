import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: "100vh",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      maxHeight: "750px",
    },
  },
}));

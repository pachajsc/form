import grey from "@material-ui/core/colors/grey";
import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    
    primary: {
      light: "#4b096b",
      main: "#4b096b",
      dark: "#4b096b",
      contrastText: "#ffffff",
    },
    secondary: {
      light: grey[200],
      main: grey[500],
      dark: grey[700],
      contrastText: "#ffffff",
    },
    background: {
      paper: "#ffffff",
      default: "#ffffff",
      appBar: "#ffffff",
      contentFrame: "#ffffff",
      chip: "#ffffff",
      avatar: "#ffffff",
    },
  },
  status: {
    danger: "red",
  },

  typography: {
    button: {
      fontWeight: 400,
      color: "#fff",
      textAlign: "capitalize",
    },
  },
});

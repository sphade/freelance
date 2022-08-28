import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    button: {
      fontSize: "1rem",
    },
    fontFamily: "wave",
    allVariants: {
      fontFamily: "wave",
    },
    },
    palette: {
        primary: {
            main:'#00539cff'
        },
        secondary: {
            main:'#eea47fff'
        },
    }
});

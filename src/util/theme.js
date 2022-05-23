import { createTheme } from "@mui/material/styles";

const globalTheme = createTheme({
  palette: {
    primary: {
      main: "#0a192f"
    },
    secondary: {
      main: "#64ffda"
    },
    background: {
      default: "#0a192f",
      paper: "#112240"
    }
  },
  typography: {
    fontSize: 14,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: 18,
      fontWeight: 400,
      color: "#64ffda"
    },
    h2: {
      fontSize: 64,
      fontWeight: 600,
      color: "#F5F5F5"
    },
    h3: {
      fontSize: 32,
      fontWeight: 600,
      color: "#ccd6f6"
    },
    p: {
      fontSize: 18,
      color: "#C1BDDB",
      paddingBottom: "2rem"
    }
  },
  breakpoints: {
    values: {
      xs: 375,
      sm: 600,
      md: 768,
      lg: 1000,
      xl: 1300
    }
  }
});

const theme = createTheme(
  {
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "#__next": {
            // Flex column that is height
            // of viewport so that footer
            // can push self to bottom by
            // with auto margin-top
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            // Prevent child elements from
            // shrinking when content
            // is taller than the screen
            // (quirk of flex parent)
            "& > *": {
              flexShrink: 0
            }
          }
        }
      }
    }
  },

  globalTheme
);

export default theme;

import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Paper,
  Container,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

function Wrapper({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Wrapper
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main">
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          {children}
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default Wrapper;

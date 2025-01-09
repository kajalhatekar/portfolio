import { ThemeProvider } from "styled-components";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Home from "pages/home";
import { theme } from "Theme";
import { ToastContainer } from 'react-toastify'
// import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <BrowserRouter>
          <ThemeProvider theme={theme}>
            {/* <AnimatedCursor
              innerSize={10}
              outerSize={30}
              color = "221, 160, 221"
              outerAlpha={0.4}
              innerScale={0.6}
              outerScale={0}
            /> */}
            <ToastContainer autoClose={1000} />
            <Home />
          </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

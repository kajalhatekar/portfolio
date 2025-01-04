import { ThemeProvider } from "styled-components";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Home from "pages/home";
import { theme } from "Theme";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "store";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <ThemeProvider theme={theme}>
            <AnimatedCursor
              innerSize={10}
              outerSize={30}
              color = "221, 160, 221"
              outerAlpha={0.4}
              innerScale={0.6}
              outerScale={0}
            />
            <Home />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CartContextProvider } from "./contexts/CartContext";
import { Router } from "./Router";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import ScrollToTop from "./components/ScrollToTop";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ScrollToTop />
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}

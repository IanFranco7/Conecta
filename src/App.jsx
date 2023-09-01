import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "./themes/default";

export function App() {

  return (
    <div>
      <ThemeProvider theme={DefaultTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
      <GlobalStyle/>
    </div>
  )
}



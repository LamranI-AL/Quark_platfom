import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Homme from "./pages/Homme";
import Detaille from "./pages/Detaille";
import ContactUs from "./pages/ContactUs";
import PageNotFounded from "./pages/PageNotFounded";
import { ChakraProvider } from "@chakra-ui/react";
import Events from "./pages/Events";
function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homme />} />
            <Route path="/details" element={<Detaille />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="*" element={<PageNotFounded />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./componenet/Home";
import Nevbar from "./componenet/Nevbar";
import StockTable from "./table/StockTable";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./products/Product";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nevbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stocktable" element={<StockTable />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

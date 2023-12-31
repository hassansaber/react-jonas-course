import { Routes, BrowserRouter, Route } from "react-router-dom";

import HomePage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import { useEffect, useState } from "react";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";

const BASE_URL = "http://localhost:8000/";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [cities, setCities] = useState([]);

  useEffect(function () {
    async function getCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}cities`);
        const data = await res.json();
        setCities(data);
      } catch (err) {
        throw new Error(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    getCities();
  }, []);

  // console.log(countries);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route
            index
            element={
              <CityList cities={cities} isLoading={isLoading} />
            }
          />
          <Route
            path="cities"
            element={
              <CityList cities={cities} isLoading={isLoading} />
            }
          />
          <Route path="cities/:id" element={<City />} />

          <Route
            path="countries"
            element={
              <CountryList cities={cities} isLoading={isLoading} />
            }
          />
          <Route path="form" element={<p>form</p>} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

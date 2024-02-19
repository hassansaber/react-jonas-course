import { useContext } from "react";
import { createContext, useState, useEffect } from "react";

const CitiesContext = createContext();

const BASE_URL = "http://localhost:8000/";

function CitiesProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [cities, setCities] = useState([]);
  const [currentCity, serCurrentCity] = useState({});

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

  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}cities/${id}`);
      const data = await res.json();
      serCurrentCity(data);
    } catch (err) {
      throw new Error(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{ cities, isLoading, currentCity, getCity }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error(
      "CitesContext Consumer Hook Should Use Inside CitiesProvider"
    );
  return context;
}

export { CitiesProvider, useCities };

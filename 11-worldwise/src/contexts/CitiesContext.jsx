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

  // GET
  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}cities/${id}`);
      const data = await res.json();
      serCurrentCity(data);
    } catch (err) {
      alert("There was an error loading cities");
      throw new Error(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  // POST
  async function createCity(newCity) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}cities/`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();

      setCities((cities) => [...cities, data]);
    } catch (err) {
      alert("There was an error adding new city");
      throw new Error(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  // DELETE
  async function deleteCity(id) {
    try {
      setIsLoading(true);
      await fetch(`${BASE_URL}cities/${id}`, {
        method: "DELETE",
      });

      setCities((cities) => cities.filter((city) => city.id !== id));
    } catch (err) {
      alert("There was an error deleting city");
      throw new Error(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity,
      }}
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

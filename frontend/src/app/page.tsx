"use client";
import React from 'react';
import { useState } from "react";
import { NumericFormat } from "react-number-format";
import CountryService from "./services/country.service";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [totalPopulation, setTotalPopulation] = useState(0);
  const [countries, setCountries] = useState<
    Array<{ name: string; population: number }>
  >([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    const data = await CountryService.getCountries(inputValue);
    setCountries(data.countries);
    setTotalPopulation(data.totalPopulation);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl mb-4 flex">
        <input
          className="mt-1 px-4 py-2 rounded-lg border-2 w-3/4 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Escribe aquí..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="mt-1 ml-4 px-4 py-2 rounded-lg bg-white text-black border-2 w-1/4 hover:bg-black hover:text-white transition-colors duration-300"
          onClick={handleSearch}
        >
          Buscar
        </button>
      </div>
      <div className="w-full max-w-2xl">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {loading ? (
            <div className="loader">Cargando...</div>
          ) : countries?.length > 0 ? (
            <table className="w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Nombre</th>
                  <th className="px-4 py-2">Población</th>
                </tr>
              </thead>
              <tbody>
                {countries.map((country, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{index + 1}</td>
                    <td className="border px-4 py-2">{country.name}</td>
                    <td className="border px-4 py-2">
                      <NumericFormat
                        value={country.population}
                        allowLeadingZeros
                        thousandSeparator=","
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No se encontraron resultados</p>
          )}
          <div className="mt-4">
            {countries?.length > 0 ? <p>
              Población total:{" "}
              <NumericFormat
                value={totalPopulation}
                allowLeadingZeros
                thousandSeparator=","
              />
            </p>: null}
           
          </div>
        </div>
      </div>
    </div>
  );
}

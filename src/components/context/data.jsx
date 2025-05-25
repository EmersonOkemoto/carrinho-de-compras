import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export default function DataProvider({ children }) {
  const [produtos, setProdutos] = useState([]);

  const [aux, setAux] = useState(0);

  useEffect(() => {
    LerProdutos(setProdutos);
  }, []); //OBS: array vazio [] significa que esse efeito só será executado uma única vez.

  return (
    <DataContext.Provider value={{ produtos, setProdutos, setAux, aux }}>
      {children}
    </DataContext.Provider>
  );
}

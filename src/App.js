import React, { useState } from "react";
import FilterList from "./FilterList";
import Formulaire from "./Formulaire";

function App() {
  const [items, setItems] = useState([
    "Pomme",
    "Banane",
    "Orange",
    "Mangue",
    "Fraise",
  ]);

  const handleAdd = (nouvel) => {
    // ajoute en début de liste
    setItems((prev) => [nouvel, ...prev]);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Filter + Formulaire</h1>

      <Formulaire onAdd={handleAdd} />

      <h3>Liste (filtrable) :</h3>
      <FilterList items={items}>
        {(filteredItems) => (
          <ul>
            {filteredItems.map((it, i) => (
              <li key={it + i}>{it}</li>
            ))}
          </ul>
        )}
      </FilterList>
    </div>
  );
}

export default App;

import React, { useState } from "react";

/**
 * Simple formulaire qui ajoute un nouvel élément via onAdd (prop).
 * Il empêche le rechargement de la page avec e.preventDefault().
 */
function Formulaire({ onAdd }) {
  const [nom, setNom] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // IMPORTANT : empêche le rechargement
    const trimmed = nom.trim();
    if (!trimmed) {
      return; // on ne soumet pas si vide
    }
    onAdd(trimmed);
    setNom("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Ajouter un élément..."
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default Formulaire;

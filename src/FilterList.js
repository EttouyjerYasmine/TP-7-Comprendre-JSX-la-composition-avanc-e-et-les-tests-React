import React, { useState } from "react";

/**
 * Composant Render Props : il fournit `filteredItems` à son enfant
 * via children(filteredItems).
 */
function FilterList({ items, children }) {
  const [query, setQuery] = useState("");

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        aria-label="filtre"
        placeholder="Filtrer..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {children(filteredItems)}
    </div>
  );
}

export default FilterList;

import React from "react";

const SortControls = ({ onSort }) => (
    <div className="sort-controls">
        <button onClick={() => onSort("username")}>Ordenar por Nombre</button>
        <button onClick={() => onSort("level")}>Ordenar por Nivel</button>
    </div>
);

export default SortControls;

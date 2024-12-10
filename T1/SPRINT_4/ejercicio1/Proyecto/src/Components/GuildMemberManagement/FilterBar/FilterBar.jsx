import React from "react";

const FilterBar = ({ setFilterCriteria }) => {
    return (
        <div className="filter-bar">
            <input type="text" placeholder="Buscar por nombre" />
            {/* Más filtros */}
        </div>
    );
};

export default FilterBar;

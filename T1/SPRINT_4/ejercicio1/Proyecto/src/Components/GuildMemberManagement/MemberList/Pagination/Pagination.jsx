import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
    <div className="pagination">
        <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
            Anterior
        </button>
        <span>{currentPage} / {totalPages}</span>
        <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            Siguiente
        </button>
    </div>
);

export default Pagination;

import React, { useState } from 'react';

const ColorFilter = ({ onFilter }) => {
  const [color, setColor] = useState('');

  const handleChange = (e) => {
    setColor(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <select value={color} onChange={handleChange}>
      <option value="">Todos los colores</option>
      <option value="rojo">gris</option>
      <option value="azul">azul</option>
      <option value="verde">beige</option>
      {/* Agrega más colores según sea necesario */}
    </select>
  );
};

export default ColorFilter;

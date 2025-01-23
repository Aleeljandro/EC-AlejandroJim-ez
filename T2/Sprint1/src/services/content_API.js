// Simulación de datos para la API de contenidos
const products = [
  {
    id: 1,
    name: 'Body para bebé - Azul',
    image: '/assets/images/product1.jpg',
    price: 20.00,
  },
  {
    id: 2,
    name: 'Conjunto de gorro y guantes',
    image: '/assets/images/product2.jpg',
    price: 15.00,
  },
  {
    id: 3,
    name: 'Mameluco con diseño de osito',
    image: '/assets/images/product3.jpg',
    price: 25.00,
  },
];

// Función para obtener todos los productos
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500); // Simula un retraso de red de 500 ms
  });
};

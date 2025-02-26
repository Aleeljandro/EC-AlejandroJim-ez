import { useContext } from "react";
import { FavoritesContext } from "../../services/favoritesContext";
import ProductCard from "./ProductCard";

const FavoritesPage = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      <h2>Mis Favoritos</h2>
      {favorites.length === 0 ? (
        <p>No tienes productos favoritos.</p>
      ) : (
        favorites.map((product) => <ProductCard key={product.id} product={product} />)
      )}
    </div>
  );
};

export default FavoritesPage;

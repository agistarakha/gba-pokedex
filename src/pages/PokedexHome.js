import PokemonImageList from "../components/pokedex/PokemonImageList";
import PokemonNameItem from "../components/pokedex/PokemonNameItem";

export default function PokedexHome() {
  return (
    <div>
      <h1>Pokedex</h1>
      <div>
        <PokemonImageList />
      </div>
      <div>
        <PokemonNameItem />
      </div>
    </div>
  );
}

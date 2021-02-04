import { useState } from 'react';

import PokemonCard from '../../components/PokemonCard';

import pokemonsData from '../../pokemons.json';

import s from './style.module.css';

const POKEMONS = Array.from(pokemonsData);

const GamePage = () => {
    const [pokemons, setPokemon] = useState(POKEMONS);

    const handleClickCard = (id) => {
        setPokemon(pokemons.map((item) => {
            if (item.id === id) {
                item.active = !item.active;
            }
            return item;
        }))
    };

    return (
        <div className={s.flex}>
            {pokemons.map((item, key) => (
                <PokemonCard
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    type={item.type}
                    img={item.img}
                    values={item.values}
                    isActive={item.active}
                    handleClickCard={handleClickCard}
                />
            ))}
        </div>
    );
};

export default GamePage;

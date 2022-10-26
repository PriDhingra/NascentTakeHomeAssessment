import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { UserDetailsContext } from '../../contexts/UserDetailsContext';

const SelectPokemon = () => {

	const { userData, setUserData } = useContext(UserDetailsContext);

	const [options, setOptions] = useState([]);

	useEffect(() => {
		//API Call to get all the pokemons
		const getAllPokemons = async () => {
			const pokemons = [];
			await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=10000`).then((res) => {
				let result = res.data.results;
				result.map((pokemon) => {
					return pokemons.push({value: pokemon.name, label: pokemon.name});
				}); 
				setOptions(pokemons);
			});
		};
		getAllPokemons();
	}, []);
	
	return (
		//Display all Pokemons in dropdown menu
		<div>
			<Select
				defaultValue={{label: userData["pokemon"] || "Select your Pokemon", value: userData["pokemon"] || ""}}
				placeholder= "Select your Pokemon"
				options={options}
				onChange={(event) => {
					setUserData({
						...userData,
						pokemon: event.value
					})
				}}
      		/>
		</div>
	);
}

export default SelectPokemon;

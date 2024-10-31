document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("buscarPokemonBtn").addEventListener("click", mostrarInfoBasica);
    document.getElementById("compararPokemonBtn").addEventListener("click", compararPokemons);
    document.getElementById("verEvolucionBtn").addEventListener("click", mostrarCadenaEvolutiva);
});

async function mostrarInfoBasica() {
    const nombrePokemon = document.getElementById("nombrePokemon").value;
    const resultado = document.getElementById("resultadoBasico");
    
    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon.toLowerCase()}`);
        if (!respuesta.ok) throw new Error("Pokémon no encontrado");

        const data = await respuesta.json();
        const tipos = data.types.map(t => t.type.name).join(", ");

        resultado.innerHTML = `
            <h3>${data.name.toUpperCase()} (#${data.id})</h3>
            <p>Tipos: ${tipos}</p>
            <img src="${data.sprites.front_default}" alt="${data.name}" class="pokemon-image">
        `;
    } catch (error) {
        resultado.innerHTML = `<p>${error.message}</p>`;
    }
}

async function compararPokemons() {
    const pokemon1 = document.getElementById("pokemon1").value;
    const pokemon2 = document.getElementById("pokemon2").value;
    const resultado = document.getElementById("resultadoComparacion");

    try {
        const [data1, data2] = await Promise.all([
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon1.toLowerCase()}`).then(res => res.json()),
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon2.toLowerCase()}`).then(res => res.json())
        ]);

        const stats1 = data1.stats.reduce((acc, stat) => acc + stat.base_stat, 0);
        const stats2 = data2.stats.reduce((acc, stat) => acc + stat.base_stat, 0);

        resultado.innerHTML = `
            <table border="1">
                <tr><th>Estadística</th><th>${data1.name.toUpperCase()}</th><th>${data2.name.toUpperCase()}</th></tr>
                <tr><td>HP</td><td>${data1.stats[0].base_stat}</td><td>${data2.stats[0].base_stat}</td></tr>
                <tr><td>Ataque</td><td>${data1.stats[1].base_stat}</td><td>${data2.stats[1].base_stat}</td></tr>
                <tr><td>Defensa</td><td>${data1.stats[2].base_stat}</td><td>${data2.stats[2].base_stat}</td></tr>
                <tr><td>Velocidad</td><td>${data1.stats[5].base_stat}</td><td>${data2.stats[5].base_stat}</td></tr>
                <tr><td>Total Stats</td><td>${stats1}</td><td>${stats2}</td></tr>
            </table>
            <p>Mejor Pokémon: ${stats1 > stats2 ? data1.name : data2.name}</p>
        `;
    } catch (error) {
        resultado.innerHTML = `<p>${error.message}</p>`;
    }
}

async function mostrarCadenaEvolutiva() {
    const pokemon = document.getElementById("pokemonEvolucion").value;
    const resultado = document.getElementById("resultadoEvolucion");

    try {
        // Obtener información de especie del Pokémon
        const respuestaEspecie = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.toLowerCase()}`);
        if (!respuestaEspecie.ok) throw new Error("Pokémon no encontrado");

        const dataEspecie = await respuestaEspecie.json();
        const cadenaEvolutivaUrl = dataEspecie.evolution_chain.url;

        // Obtener cadena evolutiva
        const respuestaCadena = await fetch(cadenaEvolutivaUrl);
        const dataCadena = await respuestaCadena.json();

        let evolucionesHTML = `<h3>Cadena Evolutiva</h3>`;
        let currentEvolution = dataCadena.chain;

        // Recorrer cada evolución en la cadena y obtener habilidades e imágenes
        while (currentEvolution) {
            const nombreEvolucion = currentEvolution.species.name.charAt(0).toUpperCase() + currentEvolution.species.name.slice(1);
            const dataPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${currentEvolution.species.name}`).then(res => res.json());
            
            const habilidades = dataPokemon.abilities.map(ability => ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1)).join(", ");
            const imagen = dataPokemon.sprites.front_default;

            evolucionesHTML += `
                <div class="pokemon-evolucion">
                    <h4>${nombreEvolucion}</h4>
                    <img src="${imagen}" alt="${nombreEvolucion}" class="pokemon-image">
                    <p>Habilidades: ${habilidades}</p>
                </div>
            `;

            currentEvolution = currentEvolution.evolves_to[0];
        }

        resultado.innerHTML = evolucionesHTML;
    } catch (error) {
        resultado.innerHTML = `<p>${error.message}</p>`;
    }
}

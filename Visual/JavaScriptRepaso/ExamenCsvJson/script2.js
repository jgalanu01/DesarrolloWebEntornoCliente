fetch("paises.json")
  .then((response) => response.json())
  .then((data) => {
    let vector = data.slice();

    // 1. Mostrar países de un continente
    const continenteInput = prompt("Introduce un continente:");
    const paisesDelContinente = vector
      .filter((item) => item.Continente.toLowerCase() === continenteInput.toLowerCase())
      .map((item) => item.Pais);
    console.log("Países del continente " + continenteInput + ":", paisesDelContinente);

    // 2. Ordenar países por continente
    const paisesOrdenados = vector
      .sort((a, b) => a.Continente.localeCompare(b.Continente))
      .map((item) => item.Pais + " - " + item.Continente);
    console.log("Países ordenados por continente:", paisesOrdenados);

    // 3. Top 10 países con más población
    const top10 = data
      .slice()
      .sort((a, b) => b.Población - a.Población)
      .slice(0, 10)
      .map((item) => item.Pais + ": " + item.Población + " hab.");
    console.log("Top 10 países con más población:", top10);

    // 4. Media de población de los países de América
    const americanos = vector.filter((item) => item.Continente === "América");
    const media = americanos.reduce((acum, item) => acum + item.Población, 0) / americanos.length;
    console.log("Media de población en América:", Math.round(media), "habitantes");
  });

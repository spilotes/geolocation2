function getLocation() {
  const output = document.getElementById("output");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        output.innerHTML = `🌐 Latitude: <b>${lat}</b><br/>🌐 Longitude: <b>${lon}</b>`;
      },
      (error) => {
        output.innerHTML = `❌ Erro ao obter localização: ${error.message}`;
      }
    );
  } else {
    output.innerHTML = "❌ Geolocalização não suportada pelo navegador.";
  }
}

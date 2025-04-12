export class Cancion {
  constructor(id, nombre, artista, album, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.artista = artista;
    this.album = album;
    this.imagen = imagen;
  }

  generarStringHTML(generarBotones = true) {
    let etiqueta = `
    <article class="music-card flex">
              <img
                src="${this.imagen}"
                alt=""
                width="150px"
                height="150px"
              />
              <div class="music-card-info">
                <div class="music-card-text">
                  <div>
                    <span class="negrilla">Cancion: </span
                    ><span class="cancion">${this.nombre}</span>
                  </div>
                  <div><span class="negrilla">Artista: </span><span>${this.artista}</span></div>
                  <div><span class="negrilla">Album: </span><span>${this.album}</span></div>
                </div>
                `;
    if (generarBotones == true) {
      etiqueta += `
                <div class="music-card-buttons flex">
                  <button type="button" data-id="${this.id}" class="btn btn-primary siguiente onClick="agregarSiguiente(this)">
                    Añadir siguiente
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary final"
                    data-id="${this.id}"
                    onClick="mostrarMensaje(this)"
                  >
                    Añadir al final
                  </button>
                </div>

    `;
    }
    return etiqueta;
  }
}

export const listaCanciones = [
  new Cancion(
    1,
    "Persiana Americana",
    "Soda Stereo",
    "Signos",
    "./images/signos.jpg"
  ),
  new Cancion(
    2,
    "Lamento Boliviano",
    "Enanitos Verdes",
    "Big Bang",
    "./images/big.jpg"
  ),
  new Cancion(
    3,
    "De Música Ligera",
    "Soda Stereo",
    "Canción Animal",
    "./images/cancionAnimal.jpg"
  ),
  new Cancion(
    4,
    "Cuando Pase el Temblor",
    "Soda Stereo",
    "Nada Personal",
    "./images/nadaPersonal.jpg"
  ),
  new Cancion(
    5,
    "Matador",
    "Los Fabulosos Cadillacs",
    "Vasos Vacíos",
    "./images/vasos.jpg"
  ),
  new Cancion(
    6,
    "Tren al Sur",
    "Los Prisioneros",
    "Corazones",
    "./images/corazones.jpg"
  ),
  new Cancion(
    7,
    "La Celula Que Explota",
    "Caifanes",
    "El Diablito",
    "./images/diablito.jpg"
  ),
  new Cancion(
    8,
    "Entre Dos Tierras",
    "Héroes del Silencio",
    "Senderos de Traición",
    "./images/senderos.jpg"
  ),
  new Cancion(
    9,
    "Eres",
    "Café Tacvba",
    "Cuatro Caminos",
    "./images/cuatro.jpg"
  ),
  new Cancion(10, "Ingrata", "Café Tacvba", "Re", "./images/re.jpg"),
];

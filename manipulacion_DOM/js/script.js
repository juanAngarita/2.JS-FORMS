import { Cancion, listaCanciones } from "./cancion.js";

/*Obtener elementos */
const cancionesContainer = document.querySelector("#song-list-container");
const PlaylistContainer = document.querySelector("#lista-canciones");
const playlistContainerLeft = document.querySelector(
  "#playlist-container-left"
);

let cancionActual;

//Agregar todas las canciones a la lista
listaCanciones.forEach((cancion) => {
  const elementoCancion = cancion.generarStringHTML();
  cancionesContainer.innerHTML += elementoCancion;
});

//Array para guardar las canciones
// {
//   id: 1,
//   titulo: "Cancion 1",
//   reproduciendo: false,
// }
const playList = [];

const botonesFinal = document.querySelectorAll(".final");

botonesFinal.forEach((boton) => {
  boton.addEventListener("click", () => {
    const tarjeta = boton.parentElement.parentElement;

    const nombreCancion = tarjeta.querySelector(".cancion").textContent;

    // Agregar la cancion al array
    const cancion = {
      idPlaylist: playList.length + 1,
      titulo: nombreCancion,
      reproduciendo: false,
      idCancion: parseInt(boton.dataset.id),
    };
    playList.push(cancion);

    gererarPlaylistHTML();
  });
});

const botonesSiguiente = document.querySelectorAll(".siguiente");
botonesSiguiente.forEach((boton) => {
  boton.addEventListener("click", () => {
    const tarjeta = boton.parentElement.parentElement;

    const nombreCancion = tarjeta.querySelector(".cancion").textContent;

    // Agregar la cancion al array
    const cancion = {
      idPlaylist: playList.length + 1,
      titulo: nombreCancion,
      reproduciendo: false,
      idCancion: parseInt(boton.dataset.id),
    };

    // Buscar la cancion que se esta reproduciendo y agregar la nueva cancion despues
    playList.forEach((cancionPlaylist) => {
      console.log(cancion);
      if (cancionPlaylist.reproduciendo) {
        const index = playList.indexOf(cancionPlaylist);
        console.log("Indice", index);
        playList.splice(index + 1, 0, cancion);
      }
    });

    gererarPlaylistHTML();
  });
});

// Funcion auxiliar para generar la imagen de play o pausa
function generarImagen(cancion) {
  const imagen = document.createElement("img");
  if (cancion.reproduciendo !== true) {
    imagen.src = "./images/boton-de-play.png";
  } else {
    imagen.src = "./images/pause.png";
  }
  imagen.width = "20";
  imagen.style.marginRight = "5px";
  return imagen;
}

function agregarCancionListaHtml(cancion) {
  const elementoLista = document.createElement("li");
  //Si la cancion se está reproduciendo
  if (cancion.reproduciendo) {
    const imagen = generarImagen(cancion);
    elementoLista.appendChild(imagen);
    imagen.addEventListener("click", () => {
      cancion.reproduciendo = false;
      gererarPlaylistHTML();
    });
  } else {
    const imagen = generarImagen(cancion);
    elementoLista.appendChild(imagen);
    imagen.addEventListener("click", () => {
      // Si alguna cancion esta reproduciendo, se debe pausar
      const cancionReproduciendo = playList.find(
        (cancion) => cancion.reproduciendo === true
      );
      if (cancionReproduciendo) {
        cancionReproduciendo.reproduciendo = false;
      }
      cancion.reproduciendo = true;
      cancionActual = listaCanciones.find(
        (cancionLista) => cancionLista.id === cancion.idCancion
      );
      let tarjetaCancionActual = cancionActual.generarStringHTML(false);
      playlistContainerLeft.innerHTML = tarjetaCancionActual;
      gererarPlaylistHTML();
    });
  }
  const texto = document.createElement("span");
  texto.textContent = cancion.titulo;
  texto.classList.add("bigger-text");
  elementoLista.appendChild(texto);
  PlaylistContainer.appendChild(elementoLista);
}

function gererarPlaylistHTML() {
  PlaylistContainer.innerHTML = "";
  for (const cancion of playList) {
    agregarCancionListaHtml(cancion);
  }
}

const ul = document.getElementById("usuarios");

fetch("https://jsonplaceholder.typicode.com/photos")
  .then(response => response.json())
  .then(json => listaUsuarios(json))

function listaUsuarios(usuarios) {
  usuarios.forEach(({ title, url, thumbnailUrl}) => {
    const li = document.createElement("li");
    li.innerText = `Id: ${id}, Título: ${title}, Complemento: ${thumbnailUrl}, url: ${url}`;
    ul.appendChild(li);
  })
}
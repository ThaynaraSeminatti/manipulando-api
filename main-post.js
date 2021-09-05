const ul = document.getElementById("usuarios");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(json => listaUsuarios(json))

function listaUsuarios(usuarios) {
  usuarios.forEach(({userId, id, title, body}) => {
    const li = document.createElement("li");
	li.innerHTML = `<table border="1">  
					<tr> 
					<td> Id  </td>
					<td>Titulo</td>
					<td>corpo</td>
					</tr>
					<tr> 
					<td>  ${id}  </td>
					<td> ${title}</td>
					<td>${body}</td>
					</tr>
					</table>`
    ul.appendChild(li);	
  })
}


const ul = document.getElementById("usuarios");

fetch("https://jsonplaceholder.typicode.com/albums")
  .then(response => response.json())
  .then(json => listaUsuarios(json))

function listaUsuarios(usuarios) {
  usuarios.forEach(({userId, id, title}) => {
    const li = document.createElement("li");
    li.innerHTML = `<table border="1">  
						<tr> 
						<td> Id  </td>
						<td>Titulo</td>
						</tr>
						<tr> 
						<td>  ${id}  </td>
						<td> ${title}</td>
						</tr>
					</table>
						`						
    ul.appendChild(li);
  })
}


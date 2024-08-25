function adicionaTarefa() {
  let tarefa = document.querySelector("#descricao");
  let lista = document.querySelector("#lista");
  let li = document.createElement("li");
  li.innerHTML = `${tarefa.value}`;
  lista.appendChild(li);
  tarefa.value = "";
};

function removeTarefa(evento) {
  try {
    let lista = document.querySelector("#lista");
    lista.removeChild(evento.target);
  } catch(error) {
    console.error("Operação inválida");
  }
};

document.addEventListener("dblclick", removeTarefa);

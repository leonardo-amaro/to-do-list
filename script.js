function adicionaTarefa() {
  let tarefa = document.querySelector("#descricao");
  if(tarefa.value.trim() == "") {
    window.alert("ATENÇÃO: Tarefas precisam ter uma descrição!");
  } else {
    let lista = document.querySelector("#lista");
    let li = document.createElement("li");
    li.innerHTML = `${tarefa.value.trim()}`;
    lista.appendChild(li);
    tarefa.value = "";
  }
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

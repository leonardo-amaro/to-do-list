const lista = document.querySelector("#lista");
const descricao = document.querySelector("#descricao");
const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

function adicionaTarefa() {
  if(descricao.value.trim() == "") {
    window.alert("ATENÇÃO: Tarefas precisam ter uma descrição!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = `${descricao.value.trim()}`;
    lista.appendChild(li);
    descricao.value = "";
  }
};

function removeTarefa(evento) {
  try {
    lista.removeChild(evento.target);
  } catch(e) {
    console.error("Operação inválida:", e);
  }
};

document.addEventListener("dblclick", removeTarefa);

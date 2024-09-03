const lista = document.querySelector("#lista");
const descricao = document.querySelector("#descricao");
const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

function armazenaTarefa(tarefa) {
  const tarefaAtual = {
    "tarefa": tarefa
  };
  tarefas.push(tarefaAtual);
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
};

function adicionaTarefa() {
  if(descricao.value.trim() == "") {
    window.alert("ATENÇÃO: Tarefas precisam ter uma descrição!");
  } else {
    armazenaTarefa(descricao.value);
    descricao.value = "";
  }
};

function atualizaLista() {
  tarefas.forEach(elemento => {
    let li = document.createElement("li");
    li.innerHTML = `${elemento["tarefa"]}`;
    lista.appendChild(li);
  });
};

function removeTarefa(evento) {
  try {
    lista.removeChild(evento.target);
  } catch(e) {
    console.error("Operação inválida:", e);
  }
};

document.addEventListener("DOMContentLoaded", atualizaLista);

document.querySelector("button").addEventListener("click", () => {
  lista.innerHTML = "";
  adicionaTarefa();
  atualizaLista();
});

document.addEventListener("dblclick", removeTarefa);

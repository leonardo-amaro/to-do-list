function adicionaTarefa() {
  let tarefa = document.querySelector("#descricao");
  let lista = document.querySelector("#lista");
  let li = document.createElement("li");
  
  li.innerHTML = `${tarefa.value}`;
  lista.appendChild(li);
};
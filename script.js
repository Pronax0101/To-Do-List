let inputElement = document.getElementById('inputElement');
let listElement = document.getElementById('listElement');
let lista = [];

function adicionarTarefa(event){
  event.preventDefault();

  let texto = inputElement.value.trim();

  if(texto === '') return;

  lista.push(texto);
  inputElement.value = "";

  renderizarTarefa();

}

function renderizarTarefa(){
  listElement.innerHTML = "";

  lista.forEach(element => {
    let listContent = document.createElement('li');
    let btnExcluir = document.createElement('button');

    listContent.innerText = element;
    btnExcluir.innerText = 'X';

    listElement.appendChild(listContent);
    listContent.appendChild(btnExcluir);

    btnExcluir.classList.add('btn-excluir');
    listContent.classList.add('list-content');

    btnExcluir.addEventListener("click", () => {
      lista.splice(element, 1)
      renderizarTarefa();
    })

  });
}
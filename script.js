const meusProjetos = [
    { 
        nome: "Sobre sorvete", 
        url: "sites/sobre-sorvete/index.html" 
    },
    { 
        nome: "História da BMW", 
        url: "sites/historia-da-bmw/index.html" 
    }
];

function renderizarPagina(projetosParaExibir) {
    const container = document.getElementById('conteudoPrincipal');
    container.innerHTML = '';
    
    if (projetosParaExibir.length === 0) {
        container.innerHTML = `<div class="aviso-amarelo">Nada disponível :(</div>`;
        return;
    }
    
    projetosParaExibir.forEach(projeto => {
        const div = document.createElement('div');
        div.classList.add('item-lista-site');
        div.innerText = projeto.nome;
        div.onclick = () => {
            window.location.href = projeto.url;
        };
        container.appendChild(div);
    });
}

function filtrarSites() {
    const termo = document.getElementById('campoPesquisa').value.toLowerCase();
    const filtrados = meusProjetos.filter(p => p.nome.toLowerCase().includes(termo));
    renderizarPagina(filtrados);
}

renderizarPagina(meusProjetos);

// Lista de projetos atualizada com o seu primeiro site!
const meusProjetos = [
    { 
        nome: "Sobre sorvete", 
        url: "https://tonyfae8472-lgtm.github.io/sobre-sorvete/" 
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
        div.onclick = () => abrirSite(projeto.nome, projeto.url);
        container.appendChild(div);
    });
}

function filtrarSites() {
    const termo = document.getElementById('campoPesquisa').value.toLowerCase();
    const filtrados = meusProjetos.filter(p => p.nome.toLowerCase().includes(termo));
    renderizarPagina(filtrados);
}

function abrirSite(nome, url) {
    document.getElementById('tituloSiteAtivo').innerText = nome;
    document.getElementById('iframeProjeto').src = url;
    document.getElementById('visualizadorSite').style.display = 'flex';
}

function fecharSite() {
    document.getElementById('visualizadorSite').style.display = 'none';
    document.getElementById('iframeProjeto').src = '';
}

renderizarPagina(meusProjetos);
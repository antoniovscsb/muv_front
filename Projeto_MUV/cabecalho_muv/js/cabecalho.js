const containerCabecalho = document.querySelector('#cabecalho');

if (containerCabecalho) {
    containerCabecalho.innerHTML = `
    <header>
        <div class="topo">
            <a href="/Projeto_MUV/home/index_muv.html">
                <img src="/Projeto_MUV/doacoes_muv/img/logo_br.png" alt="Logo MUV" class="logo">
            </a>
            
            <div class="acoes">
                <a href="/Projeto_MUV/perfil_muv/html/perfil.html" title="Meu Perfil">
                    <span><i class="fa-regular fa-circle-user"></i></span>
                </a>
                <a href="/Projeto_MUV/chat_muv/HTML/sobre.html" title="Mensagens">
                    <span><i class="fa-regular fa-message"></i></span>
                </a>
                <a href="#" title="Notificações">
                    <span><i class="fa-regular fa-bell"></i></span>
                </a>
            </div>
        </div>

        <div class="acoes-button-container">
            <!-- MENU -->
            <nav>
                <a href="/Projeto_MUV/home/index_muv.html"><i class="fa-solid fa-house"></i> Início</a>
                <a href="#"><i class="fa-solid fa-layer-group"></i> Categorias</a>
                <a href="#"><i class="fa-solid fa-mountain-city"></i> Meus anúncios</a>
                <a href="#"><i class="fa-solid fa-recycle"></i> Trocas</a>
                <a href="/Projeto_MUV/permuta/permuta_muv.html"><i class="fa-solid fa-hand-holding-hand"></i> Permutas</a>
                <a href="/Projeto_MUV/doacoes_muv/html/doacoes2.html"><i class="fa-solid fa-hand-holding-heart"></i> Doações</a>
                <a href="/Projeto_MUV/sobre_muv/HTML/sobre.html"><i class="fa-solid fa-info"></i> Sobre</a>
                <a href="#"><i class="fa-solid fa-question"></i> Ajuda</a>
            </nav>
            <button class="btn-publicar">+ Publicar anúncio</button>
        </div>
    </header>
    `;
}
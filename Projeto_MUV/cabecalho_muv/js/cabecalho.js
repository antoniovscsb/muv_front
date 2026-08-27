// const containerCabecalho = document.querySelector('#cabecalho');

// if (containerCabecalho) {
//     containerCabecalho.innerHTML = `
//     <header>
//         <div class="topo">
//             <a href="/Projeto_MUV/home/index_muv.html">
//                 <img src="/Projeto_MUV/home/img/logoMUV2.0.png" alt="Logo MUV" class="logo">
//             </a>
            
//             <div class="acoes">
//                 <a href="/Projeto_MUV/perfil_muv/html/perfil.html" title="Meu Perfil">
//                     <span><i class="fa-regular fa-circle-user"></i></span>
//                 </a>
//                 <a href="/Projeto_MUV/chat/chat.html" title="Mensagens">
//                     <span><i class="fa-regular fa-message"></i></span>
//                 </a>
//                 <a href="#" title="Notificações">
//                     <span><i class="fa-regular fa-bell"></i></span>
//                 </a>
//             </div>
//         </div>

//         <div class="acoes-button-container">
//             <!-- MENU -->
//             <nav>
//                 <a href="/Projeto_MUV/home/index_muv.html"><i class="fa-solid fa-house"></i> Início</a>
                
//                 <a href="/Projeto_MUV/gel_loc_muv/HTML/gel_loc.html"><i class="fa-solid fa-mountain-city"></i> Anúncios</a>
//                 <a href="/Projeto_MUV/trocas/trocas.html"><i class="fa-solid fa-recycle"></i> Trocas</a>
//                 <a href="/Projeto_MUV/permuta/permuta_muv.html"><i class="fa-solid fa-hand-holding-hand"></i> Permutas</a>
//                 <a href="/Projeto_MUV/doacoes_muv/html/doacoes2.html"><i class="fa-solid fa-hand-holding-heart"></i> Doações</a>
//                 <a href="/Projeto_MUV/sobre_muv/HTML/sobre.html"><i class="fa-solid fa-info"></i> Sobre</a>
                
//             </nav>
//   <a href="/Projeto_MUV/publicar_anuncio/publicar_anuncio.html" class="btn-publicar">
//                 + Publicar anúncio
//             </a>
//         </div>
//     </header>
//     `;
// }

const containerCabecalho = document.querySelector('#cabecalho');

if (containerCabecalho) {
    containerCabecalho.innerHTML = `
    <header>
        <div class="topo">
            <a href="/Projeto_MUV/home/index_muv.html">
                <img src="/Projeto_MUV/home/img/logoMUV2.0.png" alt="Logo MUV" class="logo">
            </a>
            
            <!-- Ações do topo (Visíveis apenas no desktop) -->
            <div class="acoes acoes-desktop">
                <a href="/Projeto_MUV/perfil_muv/html/perfil.html" title="Meu Perfil">
                    <span><i class="fa-regular fa-circle-user"></i></span>
                </a>
                <a href="/Projeto_MUV/chat/chat.html" title="Mensagens">
                    <span><i class="fa-regular fa-message"></i></span>
                </a>
                <a href="#" title="Notificações">
                    <span><i class="fa-regular fa-bell"></i></span>
                </a>
            </div>

            <!-- Botão Hambúrguer (Aparece apenas abaixo de 700px) -->
            <button class="btn-menu-hamburguer" aria-label="Abrir Menu">
                <i class="fa-solid fa-bars"></i>
            </button>
        </div>

        <div class="acoes-button-container">
            <!-- Ícones movidos para aparecerem no menu mobile -->
            <div class="acoes acoes-mobile">
                <a href="/Projeto_MUV/perfil_muv/html/perfil.html" title="Meu Perfil">
                    <i class="fa-regular fa-circle-user"></i> Meu Perfil
                </a>
                <a href="/Projeto_MUV/chat/chat.html" title="Mensagens">
                    <i class="fa-regular fa-message"></i> Mensagens
                </a>
                <a href="#" title="Notificações">
                    <i class="fa-regular fa-bell"></i> Notificações
                </a>
            </div>

            <!-- MENU -->
            <nav>
                <a href="/Projeto_MUV/home/index_muv.html"><i class="fa-solid fa-house"></i> Início</a>
                <a href="/Projeto_MUV/gel_loc_muv/HTML/gel_loc.html"><i class="fa-solid fa-mountain-city"></i> Anúncios</a>
                <a href="/Projeto_MUV/trocas/trocas.html"><i class="fa-solid fa-recycle"></i> Trocas</a>
                <a href="/Projeto_MUV/permuta/permuta_muv.html"><i class="fa-solid fa-hand-holding-hand"></i> Permutas</a>
                <a href="/Projeto_MUV/doacoes_muv/html/doacoes2.html"><i class="fa-solid fa-hand-holding-heart"></i> Doações</a>
                <a href="/Projeto_MUV/sobre_muv/HTML/sobre.html"><i class="fa-solid fa-info"></i> Sobre</a>
            </nav>

            <a href="/Projeto_MUV/publicar_anuncio/publicar_anuncio.html" class="btn-publicar">
                + Publicar anúncio
            </a>
        </div>
    </header>
    `;

    // Lógica para abrir/fechar o menu no mobile
    const btnHamburguer = containerCabecalho.querySelector('.btn-menu-hamburguer');
    const headerEl = containerCabecalho.querySelector('header');

    if (btnHamburguer && headerEl) {
        btnHamburguer.addEventListener('click', () => {
            headerEl.classList.toggle('menu-ativo');
            const icone = btnHamburguer.querySelector('i');
            
            if (headerEl.classList.contains('menu-ativo')) {
                icone.classList.replace('fa-bars', 'fa-xmark');
            } else {
                icone.classList.replace('fa-xmark', 'fa-bars');
            }
        });
    }
}
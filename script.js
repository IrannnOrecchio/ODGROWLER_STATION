document.addEventListener('DOMContentLoaded', () => {
    // Menu responsivo
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');

    // É crucial que menuToggle e navUl existam na DOM antes de adicionar listeners
    if (menuToggle && navUl) {
        menuToggle.addEventListener('click', () => {
            navUl.classList.toggle('active');
            menuToggle.classList.toggle('open'); // Adiciona classe para animação do ícone
        });

        // Fechar menu ao clicar em um link (apenas em mobile)
        navUl.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navUl.classList.contains('active')) {
                    navUl.classList.remove('active');
                    menuToggle.classList.remove('open');
                }
            });
        });
    } else {
        console.warn("Elementos do menu responsivo não encontrados. Verifique as classes 'menu-toggle' e 'nav ul'.");
    }

    // Adiciona uma classe ao header quando o scroll desce para adicionar sombra
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
});
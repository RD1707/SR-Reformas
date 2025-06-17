// Espera o documento HTML ser completamente carregado para executar o script
document.addEventListener('DOMContentLoaded', () => {

    /**
     * ========================================================================
     * LÓGICA DO MENU MOBILE (HAMBURGUER)
     * ========================================================================
     * (Este código funciona em todas as páginas que tiverem o header)
     */
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            if (navMenu.classList.contains('active')) {
                menuToggle.innerHTML = '&times;';
            } else {
                menuToggle.innerHTML = '☰';
            }
        });
    }


    /**
     * ========================================================================
     * ANIMAÇÃO AO ROLAR A PÁGINA (FADE-IN)
     * ========================================================================
     * (Este código funciona em todas as páginas)
     */
    
    // ATUALIZAÇÃO AQUI: Adicionamos as classes da página "Sobre Nós"
    const elementsToAnimate = document.querySelectorAll('.servico-card, .porque-item, .portfolio-item, .depoimento, .about-image, .about-text, .commitment-item');

    // O resto do código permanece exatamente o mesmo.
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1 
    });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

});
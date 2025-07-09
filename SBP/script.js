document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    // Verifica a preferência do usuário salva no localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark-mode') {
        body.classList.add('dark-mode');
        themeIcon.src = 'moon-icon.png'; // Ícone da lua para modo escuro
        themeIcon.alt = 'Modo Escuro';
    } else {
        themeIcon.src = 'sun-icon.png'; // Ícone do sol para modo claro
        themeIcon.alt = 'Modo Claro';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // Atualiza o ícone e salva a preferência
        if (body.classList.contains('dark-mode')) {
            themeIcon.src = 'moon-icon.png';
            themeIcon.alt = 'Modo Escuro';
            localStorage.setItem('theme', 'dark-mode');
        } else {
            themeIcon.src = 'sun-icon.png';
            themeIcon.alt = 'Modo Claro';
            localStorage.setItem('theme', 'light-mode');
        }
    });

    // Animação de scroll suave para os links da navegação
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
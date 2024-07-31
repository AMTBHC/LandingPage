document.addEventListener('DOMContentLoaded', (event) => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const themeStylesheet = document.getElementById('theme-stylesheet');
    
    // Cargar el estado del tema desde localStorage
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        themeStylesheet.href = 'assets/css/light-mode.css';
        themeToggleButton.textContent = '☀️';
    } else {

        document.body.classList.add('dark-mode');
        themeStylesheet.href = 'assets/css/dark-mode.css';
        themeToggleButton.textContent = '🌚';

  
    }

    // Cambiar el tema al hacer clic en el botón
    themeToggleButton.addEventListener('click', function() {
        if (document.body.classList.contains('dark-mode')) {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            themeStylesheet.href = 'assets/css/light-mode.css';
            this.textContent = '☀️';
            localStorage.setItem('theme', 'light'); // Guardar el estado en localStorage
        } else {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            themeStylesheet.href = 'assets/css/dark-mode.css';
            this.textContent = '🌚';
            localStorage.setItem('theme', 'dark'); // Guardar el estado en localStorage
        }
    });

    // Verificar si el elemento del menú está disponible
    const menuIcon = document.querySelector('.menu-icon');
    if (menuIcon) {
        menuIcon.addEventListener('click', function() {
            const header = document.querySelector('header');
            header.classList.toggle('expanded');
        });
    } else {
        console.error('No se encontró el icono del menú.');
    }
});

const metrics = {
    clients: 3,
    projects: 5,
    tests: 30
};

// Función para animar el conteo
function animateCount(elementId, endValue, duration) {
    let startValue = 0;
    const element = document.getElementById(elementId);
    const stepTime = Math.abs(Math.floor(duration / endValue));
    
    const timer = setInterval(() => {
        startValue += 1;
        element.textContent = startValue;
        
        if (startValue === endValue) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Función para inicializar las métricas
function updateMetrics() {
    animateCount('clients-count', metrics.clients, 2000);
    animateCount('projects-count', metrics.projects, 2000);
    animateCount('tests-count', metrics.tests, 2000);
}

// Ejecutar la función al cargar la página
document.addEventListener('DOMContentLoaded', updateMetrics);

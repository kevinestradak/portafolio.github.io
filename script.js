// Animación de entrada de secciones al hacer scroll
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

sections.forEach(section => {
  section.classList.add('hidden');
  observer.observe(section);
});

// Agrega clases CSS para animación
const style = document.createElement('style');
style.innerHTML = `
  .hidden {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  }
  .visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);

// Animación de frases en la portada
const frases = [
  "Optimiza el tráfico en tiempo real",
  "Detecta peatones y ciclistas",
  "Prioriza el transporte público",
  "Reduce emisiones contaminantes",
  "Fácil de operar desde un dashboard web"
];

let index = 0;
const textoDinamico = document.createElement('p');
textoDinamico.style.marginTop = '10px';
textoDinamico.style.fontSize = '1.2rem';
textoDinamico.style.animation = 'fadeInUp 1s ease';
document.querySelector('.hero-content').appendChild(textoDinamico);

function cambiarFrase() {
  textoDinamico.textContent = frases[index];
  index = (index + 1) % frases.length;
}

cambiarFrase();
setInterval(cambiarFrase, 4000);

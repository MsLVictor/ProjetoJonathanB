const galery = document.getElementById('galery');

// Criando o observer para monitorar a visibilidade da div
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Quando a div entra na tela, aplica a classe para mostrar as imagens
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target); // Para o observer depois de ativado
      }
    });
  }, { threshold: 0.5 }); // 50% da div precisa estar visível

  observer.observe(galery);
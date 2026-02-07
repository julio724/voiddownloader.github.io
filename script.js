// Menu mobile
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// FAQ accordion
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const answer = faqItem.querySelector('.faq-answer');
        
        // Fechar outros itens
        document.querySelectorAll('.faq-answer').forEach(otherAnswer => {
            if (otherAnswer !== answer) {
                otherAnswer.classList.remove('active');
                otherAnswer.previousElementSibling.classList.remove('active');
            }
        });
        
        // Alternar atual
        button.classList.toggle('active');
        answer.classList.toggle('active');
    });
});

// Smooth scroll para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Contador de downloads (simulado)
function updateDownloadCount() {
    const countElement = document.getElementById('download-count');
    if (countElement) {
        // Simular contagem (você pode usar uma API real depois)
        let count = Math.floor(Math.random() * 10000) + 5000;
        countElement.textContent = count.toLocaleString() + ' downloads';
    }
}

// Atualizar a cada 30 segundos
setInterval(updateDownloadCount, 30000);
updateDownloadCount(); // Inicial

// Detectar sistema operacional para mostrar botão correto
function detectOS() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    if (/android/i.test(userAgent)) {
        // Android
        document.getElementById('mobile-download').style.display = 'block';
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        // iOS
        document.getElementById('ios-download').style.display = 'block';
    } else if (/windows/i.test(userAgent)) {
        // Windows
        document.getElementById('windows-download').style.display = 'block';
    } else if (/mac/i.test(userAgent)) {
        // Mac
        document.getElementById('mac-download').style.display = 'block';
    } else {
        // Linux/outros
        document.getElementById('other-download').style.display = 'block';
    }
}

// Executar quando a página carregar
window.addEventListener('DOMContentLoaded', detectOS);

// Efeito de digitação no título
function typeWriter() {
    const title = document.querySelector('.hero h1');
    if (!title) return;
    
    const text = "⚡ VoidDownloader";
    let index = 0;
    
    title.innerHTML = '';
    
    function type() {
        if (index < text.length) {
            title.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }
    
    setTimeout(type, 1000);
}

// Iniciar efeito
typeWriter();
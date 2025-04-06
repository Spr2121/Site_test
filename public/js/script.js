// Мобильное меню
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav-links').classList.toggle('active');
    
    const spans = this.querySelectorAll('span');
    spans[0].style.transform = this.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : '';
    spans[1].style.opacity = this.classList.contains('active') ? '0' : '1';
    spans[2].style.transform = this.classList.contains('active') ? 'rotate(-45deg) translate(5px, -5px)' : '';
});

// Плавный скролл
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

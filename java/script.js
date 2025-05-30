// Adiciona animação suave ao rolar a página
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.transition = "all 0.8s ease";
        section.style.opacity = "0";
        section.style.transform = "translateY(40px)";
        observer.observe(section);
    });
});
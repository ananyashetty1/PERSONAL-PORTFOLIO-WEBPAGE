
document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("show");
});


document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
    document.querySelector(".nav-links").classList.remove("show");
  });
});

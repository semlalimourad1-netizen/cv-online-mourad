function sendMail() {
  var n = document.getElementById("fn").value.trim();
  var e = document.getElementById("fe").value.trim();
  var s = document.getElementById("fs").value.trim();
  var p = document.getElementById("fp").value.trim();
  var m = document.getElementById("fm").value.trim();
  var st = document.getElementById("fstat");

  if (!n || !e || !m) {
    st.className = "form-status err";
    st.textContent = "Veuillez remplir votre nom, votre email et votre message.";
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) {
    st.className = "form-status err";
    st.textContent = "Adresse email invalide.";
    return;
  }

  var body = "Bonjour Mourad,\n\nJe m'appelle " + n
    + (p ? " (Tél : " + p + ")" : "") + ".\n\n"
    + m + "\n\nCordialement,\n" + n + "\n" + e;

  window.location.href = "mailto:semlalimourad1@gmail.com"
    + "?subject=" + encodeURIComponent(s || "Contact via CV")
    + "&body=" + encodeURIComponent(body);

  st.className = "form-status ok";
  st.textContent = "✓ Votre client mail va s'ouvrir. Merci pour votre message !";
}

// Subtle entrance animation on scroll
document.addEventListener("DOMContentLoaded", function () {
  var cards = document.querySelectorAll(".cv-card, .sidebar-card, .pfe-card");
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  cards.forEach(function (card) {
    card.style.opacity = "0";
    card.style.transform = "translateY(18px)";
    card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(card);
  });
});
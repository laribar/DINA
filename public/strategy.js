document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btn-finalizar");

  if (!btn) return;

  btn.addEventListener("click", async function () {
    const estrategia = document.querySelector('input[name="estrategia"]:checked')?.value;
    const modoPratica = document.getElementById("modo_pratica")?.checked;
    const token = localStorage.getItem("token");

    if (!estrategia) {
      alert("Selecione uma estratégia para continuar.");
      return;
    }

    if (!token) {
      alert("Você precisa estar logado.");
      window.location.href = "/pages/login.html";
      return;
    }

    try {
      const res = await fetch("https://dina-backend.onrender.com/onboarding", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          estrategia: estrategia,
          modo_pratica: modoPratica
        })
      });

      const data = await res.json();

      if (res.ok) {
        alert("Configuração finalizada com sucesso!");
        window.location.href = "/pages/dashboard.html"; // ou sua rota final
      } else {
        alert(data.detail || "Erro ao salvar a estratégia.");
      }
    } catch (err) {
      console.error(err);
      alert("Erro de conexão com o servidor.");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.body.addEventListener("click", async function (e) {
    const btn = e.target.closest("#btn-testar-conexao");

    if (!btn) return;

    const exchange = document.querySelector('input[name="exchange"]:checked')?.value;
    const apiKey = document.getElementById("apiKey")?.value;
    const apiSecret = document.getElementById("apiSecret")?.value;
    const token = localStorage.getItem("token");

    if (!exchange || !apiKey || !apiSecret) {
      alert("Preencha todos os campos para continuar.");
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
          exchange: exchange,
          api_key: apiKey,
          api_secret: apiSecret
        })
      });

      const data = await res.json();

      if (res.ok) {
        alert("Chaves salvas com sucesso!");
        nextStep(4); // ✅ avança para a etapa "Estratégia"
      } else {
        alert(data.detail || "Erro ao salvar as chaves.");
      }

    } catch (err) {
      console.error(err);
      alert("Erro ao conectar com o servidor.");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btn-testar-conexao");

  if (!btn) return;

  btn.addEventListener("click", async function () {
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
        alert("Conexão salva com sucesso!");
        // Avança para a próxima etapa (se quiser usar tela própria, troque isso)
        nextStep(4);
      } else {
        alert(data.detail || "Erro ao salvar as chaves.");
      }
    } catch (err) {
      console.error(err);
      alert("Erro ao conectar com o servidor.");
    }
  });
});

// Define nextStep() caso Rocket.new não tenha injetado
if (typeof nextStep !== "function") {
  window.nextStep = function (step) {
    for (let i = 1; i <= 4; i++) {
      const el = document.getElementById(`step-${i}`);
      if (el) el.classList.add("hidden");
    }
    const target = document.getElementById(`step-${step}`);
    if (target) target.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
}

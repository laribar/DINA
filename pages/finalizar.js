document.addEventListener("DOMContentLoaded", function () {
  const btnFinalizar = document.querySelector('button[onclick="completeOnboarding()"]');
  if (!btnFinalizar) return;

  btnFinalizar.addEventListener("click", async function () {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Você precisa estar logado.");
      window.location.href = "/pages/login.html";
      return;
    }

    // Dados do formulário
    const nome = document.getElementById("fullName")?.value;
    const email = document.getElementById("email")?.value;
    const cpf = document.getElementById("cpf")?.value;
    const whatsapp = document.getElementById("phone")?.value;
    const senha = document.getElementById("password")?.value;

    // Experiência, perfil de risco, objetivo, investimento
    const experiencia = document.querySelector('input[name="experience"]:checked')?.value;
    const perfil_risco = document.querySelector('input[name="risk"]:checked')?.value;
    const objetivo = document.querySelector('input[name="goal"]:checked')?.value;
    const investimento = document.querySelector('input[name="amount"]:checked')?.value;

    // Exchange (do localStorage salvo no step 3)
    const exchange = localStorage.getItem("exchange");
    const api_key = localStorage.getItem("api_key");
    const api_secret = localStorage.getItem("api_secret");

    // Estratégia (você pode ajustar para pegar de acordo com sua UI)
    const estrategia = "DCA"; // ou "Grid", "Momentum AI", etc

    // Modo prática
    const modo_pratica = document.getElementById("practiceMode")?.checked || false;

    // Validação
    if (!nome || !email || !cpf || !whatsapp || !senha || !experiencia || !perfil_risco || !objetivo || !investimento || !exchange || !api_key || !api_secret) {
      alert("Preencha todos os campos antes de finalizar.");
      return;
    }

    try {
      const res = await fetch("https://dina-backend-5uop.onrender.com/onboarding", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          nome,
          email,
          cpf,
          whatsapp,
          senha,
          experiencia,
          perfil_risco,
          objetivo,
          investimento,
          exchange,
          api_key,
          api_secret,
          estrategia,
          modo_pratica
        })
      });

      const data = await res.json();

      if (res.ok) {
        alert("Cadastro concluído com sucesso!");
        document.getElementById("step-4").classList.add("hidden");
        document.getElementById("success-message").classList.remove("hidden");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        alert(data.detail || "Erro ao finalizar cadastro.");
      }

    } catch (err) {
      console.error(err);
      alert("Erro ao conectar com o servidor.");
    }
  });
});

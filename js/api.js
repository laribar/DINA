// ================================
// 🌐 API central do backend (Render)
// ================================
const API_BASE_URL = "https://dina-backend.onrender.com"; // URL do backend no Render

// =================================
// 🔐 Função para pegar o token JWT
// =================================
function getToken() {
    return localStorage.getItem("token");
}

// =================================
// 📡 GET - Buscar Configurações
// =================================
async function getConfig() {
    const token = getToken();

    const response = await fetch(`${API_BASE_URL}/config`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    });

    if (!response.ok) throw new Error("Erro ao buscar configurações");
    return await response.json();
}

// =================================
// 📡 POST - Salvar Configurações
// =================================
async function saveConfig(configData) {
    const token = getToken();

    const response = await fetch(`${API_BASE_URL}/config`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(configData)
    });

    if (!response.ok) throw new Error("Erro ao salvar configurações");
    return await response.json();
}

// =================================
// 🚀 POST - Rodar Robô (execução única)
// =================================
async function runBot() {
    const token = getToken();

    const response = await fetch(`${API_BASE_URL}/rodar`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    });

    if (!response.ok) throw new Error("Erro ao executar robô");
    return await response.json();
}

// =================================
// 🚀 POST - Iniciar execução contínua
// =================================
async function startContinuousExecution() {
    const token = getToken();

    const response = await fetch(`${API_BASE_URL}/executar_continuo`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    });

    if (!response.ok) throw new Error("Erro ao iniciar execução contínua");
    return await response.json();
}

// =================================
// ⛔ POST - Parar execução contínua
// =================================
async function stopContinuousExecution() {
    const token = getToken();

    const response = await fetch(`${API_BASE_URL}/parar_continuo`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    });

    if (!response.ok) throw new Error("Erro ao parar execução contínua");
    return await response.json();
}

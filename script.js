
const proxyUrl = "https://proxy-openai-assistants-itnd0tnf0.vercel.app/api";

async function sendToAssistant(assistantId) {
  const pergunta = document.getElementById("userInput").value;
  const resposta = document.getElementById("response");
  resposta.innerText = "Pensando...";

  try {
    const res = await fetch(proxyUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userInput: pergunta, assistantId })
    });

    const data = await res.json();
    resposta.innerText = data.message || "Erro ao responder.";

  } catch (e) {
    resposta.innerText = "Erro de conexão.";
  }
}

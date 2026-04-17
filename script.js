// Estado inicial do operador
let saude = 3;
let velocidade = 3;
let tamanho = 3;

const TOTAL_PERMITIDO = 9;
const MAX_VALOR = 5;
const MIN_VALOR = 1;

function ajustar(atributo, mudanca) {
    console.log("Tentando ajustar:", atributo, mudanca); // Isso vai aparecer no F12

    // 1. Identificar qual atributo queremos mudar
    let valorAtual;
    if (atributo === 'saude') valorAtual = saude;
    if (atributo === 'velocidade') valorAtual = velocidade;
    if (atributo === 'tamanho') valorAtual = tamanho;

    // 2. Checar limite individual (1 a 5)
    if (valorAtual + mudanca < MIN_VALOR || valorAtual + mudanca > MAX_VALOR) {
        console.log("Limite de 1 a 5 atingido.");
        return;
    }

    // 3. Checar orçamento total (9 pontos)
    let somaAtual = saude + velocidade + tamanho;
    if (mudanca > 0 && somaAtual >= TOTAL_PERMITIDO) {
        alert("Limite de 9 pontos atingido! Diminua outro atributo.");
        return;
    }

    // 4. Aplicar a mudança
    if (atributo === 'saude') saude += mudanca;
    if (atributo === 'velocidade') velocidade += mudanca;
    if (atributo === 'tamanho') {
    if (mudanca > 0 && somaAtual < TOTAL_PERMITIDO && tamanho < 5) {
        tamanho++; // Aumentar o nível de "Compactação" (fica menor)
    }
    if (mudanca < 0 && tamanho > 1) {
        tamanho--; // Diminuir a compactação (fica maior)
    }
}

    atualizarTela();
}

function atualizarTela() {
    document.getElementById("val-saude").innerText = saude;
    document.getElementById("val-vel").innerText = velocidade;
    document.getElementById("val-tam").innerText = tamanho;
    
    let total = saude + velocidade + tamanho;
    document.getElementById("pontos-restantes").innerText = TOTAL_PERMITIDO - total;
    let descricaoHitbox = "";
if (tamanho === 5) descricaoHitbox = "Pequeno (Difícil de atingir) ⚡";
else if (tamanho === 3) descricaoHitbox = "Médio ⚖️";
else if (tamanho === 1) descricaoHitbox = "Grande (Alvo fácil) 🛡️";

document.getElementById("val-tam-desc").innerText = descricaoHitbox;
}
// Banco de Dados dos Operadores
const dadosOperadores = {
    sergey: {
        titulo: "CLASSIFICAÇÃO: SECRETO // VÍNCULO ESTATAL ATIVO",
        corpo: `OPERADOR: SERGEY VOLKOV (O "OITAVA")
AFILIAÇÃO: FEDERAÇÃO RUSSA (SERVIÇOS ESPECIAIS)

👤 PERFIL BIOGRÁFICO
• Nome Completo: Sergey Vladimirovich Volkov
• Idade: 51 anos
• Cidade Natal: Nizhny Novgorod, Rússia.
• Status: Ativo (Em missão externa de longo prazo).

🎖️ HISTÓRICO MILITAR E ESTATAL
Diferente de um mercenário comum, Sergey é um Ativo Estratégico do governo russo enviado para o Sahel.

• Vínculo Oficial: Coronel da Reserva Ativa do GRU.
• Papel em Burkina Faso: Atua como "Operador de Ligação". Sua presença garante que os interesses russos sejam protegidos.
• Especialidade: Guerra Não Convencional e Defesa de Infraestrutura Crítica.
• Experiência: 30 anos de serviço ininterrupto.

🗣️ COMPETÊNCIAS LINGUÍSTICAS
• Russo (Nativo), Inglês (Avançado), Francês (Fluente), Árabe (Funcional).

⚙️ DINÂMICA NO JOGO
• A Agenda Dupla: Sergey recebe ordens diretas que nem sempre são compartilhadas. Isso gera missões secundárias de "Coleta de Inteligência".
• O Mentor Vigilante: Ele sabe quem está financiando os invasores antes do primeiro tiro.
• Equipamento: Dragunov SVD original de arsenais estatais.

📝 NOTA DE INTELIGÊNCIA
"Sergey Volkov não é um voluntário. Ele é a extensão do braço de Moscou no solo vermelho. Se os objetivos da resistência e os de seu governo colidirem, Sergey será o homem mais perigoso na sala."`
    },
dimmi: { // <--- CHAVE PARA O HTML ENCONTRAR
        titulo: "CLASSIFICAÇÃO: CONFIDENCIAL // ATIVO DE CAMPO GRU",
        corpo: `OPERADOR: DIMI (DIMITYR IVANOV)
FUNÇÃO: ESPECIALISTA EM ASSALTO E SABOTAGEM
SUBORDINAÇÃO: SOB COMANDO DIRETO DO CEL. SERGEY VOLKOV

👤 PERFIL BIOGRÁFICO
• Nome Completo: Dimityr "Dimi" Ivanov
• Idade: 36 anos (Nascido em 1990)
• Cidade Natal: São Petersburgo, Rússia.
• Estatura/Peso: 1,84m / 88kg.

🎖️ HISTÓRICO MILITAR (A ELITE DO GRU)
• Vínculo: Major das Forças de Operações Especiais (SSO/GRU).
• Trajetória: Selecionado pessoalmente por Sergey há 10 anos.
• Especialidade: CQB e demolição controlada.
• Papel no Esquadrão: O executor técnico. A mão que aperta o gatilho e detona as cargas.

🗣️ COMPETÊNCIAS LINGUÍSTICAS
• Russo (Nativo), Inglês (Avançado), Francês (Operacional).

⚙️ RELAÇÃO DE SUBORDINAÇÃO
• O Braço Direito: Traduz as ordens estratégicas do Coronel em ação imediata.
• Protocolo de Estado: Mantém as comunicações seguras com Moscou.
• O Protetor: O escudo físico que garante a sobrevivência do "Ancião".

🎯 CAPACIDADES NO JOGO (GAMEPLAY)
• Habilidade Ativa: "Carga Direcionada" (Derruba paredes para flanqueamento).
• Habilidade Passiva: "Instinto de Assalto" (Resistência a flashbangs).
• Armamento: AK-12 modificada ou PP-19 Vityaz.

📝 NOTA PSICOLÓGICA
"Dimi é uma máquina perfeitamente calibrada. Sua subordinação a Sergey é por respeito à linhagem militar. Ele é a garantia de que o plano será executado, não importa o quão sujas as mãos precisem ficar."`
    },

issa: { // <--- CHAVE PARA O ISSA
        titulo: "CLASSIFICAÇÃO: PROTEÇÃO PRIORITÁRIA // VÍNCULO SOBERANO",
        corpo: `OPERADOR: ISSA SANKARA (O "SENTINELA DO SAHEL")
FUNÇÃO: COMANDANTE DE PROTEÇÃO E LIGAÇÃO TÁTICA
STATUS: GUARDA-COSTAS PESSOAL DO V.I.P.

👤 PERFIL BIOGRÁFICO
• Nome Completo: Issa Sankara
• Idade: 34 anos (Nascido em 1992)
• Cidade Natal: Ouagadougou, Burkina Faso.
• Estatura/Peso: 1,80m / 82kg.

🎖️ HISTÓRICO E PAPEL NA ALIANÇA
Issa não carrega apenas armas; ele carrega o peso de um sobrenome que define a identidade de sua nação.

• O Peso do Nome: Personifica os ideais de autossuficiência e oposição ao controle externo.
• O Protetor do V.I.P.: Sua relação é de confiança absoluta. Ele protege a ideia que o V.I.P. representa.
• A Parceria com os Russos: Aceita Sergey e Dimi como aliados táticos, mas garante que a ajuda estrangeira não se torne dependência.

🗣️ COMPETÊNCIAS LINGUÍSTICAS
• Francês (Fluente), Mossi (Idioma de campo), Russo Tático (Sincronia com Sergey).

⚙️ DINÂMICA NO TRIO
• Equilíbrio com Sergey: Sergey é a frieza; Issa é o calor e a urgência da libertação africana.
• Irmandade com Dimi: Dimi é a ferramenta, Issa é o guia. Uma força de resposta rápida temida.

🎯 CAPACIDADES NO JOGO (GAMEPLAY)
• Habilidade Ativa: "Levante Popular" (Civis criam distrações ou sabotam inimigos).
• Habilidade Passiva: "Resiliência do Deserto" (Imunidade à fadiga climática e regeneração rápida).
• Armamento: AK-103 robusta com inscrições de soberania.

📝 NOTA IDEOLÓGICA
"Para Issa Sankara, a guerra não é sobre geopolítica abstrata; é sobre a dignidade de quem pisa na terra vermelha. Se os homens de Sergey são o aço da espada, Issa é a mão que a empunha com propósito."`
    }
};

// Função para abrir o Modal buscando no Banco de Dados acima
function abrirDossie(idOperador) {
    const modal = document.getElementById("modal-dossie");
    const titulo = document.getElementById("modal-titulo");
    const texto = document.getElementById("modal-texto");

    const dados = dadosOperadores[idOperador];

    if (dados) {
        titulo.innerText = dados.titulo;
        texto.innerText = dados.corpo;
        modal.style.display = "block";
    } else {
        // Se der erro, ele avisa no F12 do navegador
        console.error("Erro: O operador '" + idOperador + "' não foi encontrado no script.js");
        alert("Erro técnico: Dossiê não localizado. Verifique o console (F12).");
    }
}

function fecharDossie() {
    document.getElementById("modal-dossie").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("modal-dossie");
    if (event.target == modal) fecharDossie();
}
// Função que inicia a música com o fade-in de 70%
function iniciarMusicaAutomatico() {
    const music = document.getElementById("bgMusic");
    const icone = document.getElementById("icone-som");
    const btn = document.getElementById("btn-audio");

    if (music.paused) {
        music.volume = 0;
        music.play().then(() => {
            // Se o navegador permitiu o play, faz o fade-in
            icone.innerText = "🔊";
            btn.classList.remove("mudo");
            
            let fadeIn = setInterval(() => {
                if (music.volume < 0.7) {
                    music.volume = Math.min(music.volume + 0.05, 0.7);
                } else {
                    clearInterval(fadeIn);
                }
            }, 200);
        }).catch(error => {
            console.log("Autoplay bloqueado pelo navegador. Aguardando interação.");
        });
    }
}

// "Vigia" o primeiro clique do usuário no site para soltar o som
window.addEventListener('click', () => {
    iniciarMusicaAutomatico();
}, { once: true }); // O '{ once: true }' garante que isso só rode no PRIMEIRO clique
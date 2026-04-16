function rolarDados() {
    // Gera um número aleatório entre 1 e 20 (tipo um D20 de RPG)
    let forca = Math.floor(Math.random() * 20) + 1;
    let agilidade = Math.floor(Math.random() * 20) + 1;

    document.getElementById("forca").innerText = forca;
    document.getElementById("agilidade").innerText = agilidade;
}
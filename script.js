// Exibe uma mensagem ao clicar no botão "Quer saber mais sobre mim?"
document.querySelector('#saiba-mais').addEventListener('click', function () {
    alert('Talvez você seja um stalker! Por favor, pare de querer saber mais sobre mim...');
});

// Exibe a imagem ao clicar no botão "Me Veja"
document.querySelector('#me-veja').addEventListener('click', function () {
    document.querySelector('#imagem-container').style.display = 'block';
});

// Fecha a imagem ao clicar no botão "X"
document.querySelector('#fechar-imagem').addEventListener('click', function () {
    document.querySelector('#imagem-container').style.display = 'none';
});

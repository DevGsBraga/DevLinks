function mudarTema () {
    const html = document.documentElement;


    html.classList.toggle('light');


    const img = document.querySelector('#profile img');

    if(html.classList.contains('light')){
        img.setAttribute('src', './assets/gabriel-light.jpg');
        img.setAttribute('alt', 'Foto do gabriel com fundo azul');
    } else {
        img.setAttribute('src', './assets/Gabrielll.jpg');
        img.setAttribute('alt', 'Foto do gabriel sem fundo');
    }
}


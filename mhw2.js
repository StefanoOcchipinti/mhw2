//Barra ricerca
function apriBarraRicerca(event){
    const image= event.currentTarget;
    const barra_chiusa = document.querySelector('nav');
    const barra_aperta = document.querySelector('nav2');
    barra_chiusa.classList.add('hidden');
    barra_aperta.classList.remove('hidden');
}

const cerca= document.getElementById('logo-ricerca');
cerca.addEventListener('click', apriBarraRicerca);


function chiudiBarraRicerca(event){
    const image= event.currentTarget;
    const barra_chiusa = document.querySelector('nav');
    const barra_aperta = document.querySelector('nav2');
    barra_aperta.classList.add('hidden');
    barra_chiusa.classList.remove('hidden');
}

const chiudi= document.getElementById('exit');
chiudi.addEventListener('click', chiudiBarraRicerca);



//Immagine dinamica
function immagineDinamica(event){
    const image = event.currentTarget;
    if (image.src.includes('ninesquared-kneepads-banner-mobile.jpg')) {
        image.src = 'home-2023-11.jpg';
    } else {
        image.src = 'ninesquared-kneepads-banner-mobile.jpg';
    }
}

const home = document.getElementById('img-header');
home.addEventListener('click', immagineDinamica);



//Bottone newsletter
function messaggioNewsletter(event){
    const bottone = event.currentTarget;
    let nuovoMessaggio = document.createElement('h5');
    nuovoMessaggio.textContent = 'Richiesta inviata!';
    let container = document.getElementById('dx-cf');
    container.appendChild(nuovoMessaggio);
    bottone.removeEventListener('click', messaggioNewsletter);
}

const bottoneNewsletter = document.getElementById('bottone-invia');
bottoneNewsletter.addEventListener('click', messaggioNewsletter);
// Funcão do Slider pagina Inicial
const slider = document.querySelector('.slider');

function activate(e) {
    const items = document.querySelectorAll('.item');
    e.target.matches('.next') && slider.append(items[0])
    e.target.matches('.prev') && slider.prepend(items[items.length - 1]);
}

document.addEventListener('click', activate, false);


// Trocar cor do Site
var estiloAtual = document.getElementById('estilo-ativo');

console.log(window.localStorage.getItem('tema'))

if (window.localStorage.getItem('tema') == 'Dark') {
    estiloAtual.setAttribute('href', 'css/styleDark.css');
}
else {
    estiloAtual.setAttribute('href', 'css/styleLight.css');
}

function trocarEstilo() {
    if (estiloAtual.getAttribute('href') === 'css/styleLight.css') {
        window.localStorage.setItem("tema", "Dark")
        estiloAtual.setAttribute('href', 'css/styleDark.css');
    } else {
        window.localStorage.setItem("tema", "Light")
        estiloAtual.setAttribute('href', 'css/styleLight.css');
    }

    console.log(window.localStorage.getItem('tema'))
}


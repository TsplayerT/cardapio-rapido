var tipoElement = 'class'; 
var prefixo = 'executar-'
var pedacoNome = 'animacao-'; 

$(document).ready(function ()
{
    pegarTodosElementosAnimaveis().forEach(elemento => definirVisibilidadeElemento(elemento, false)); 
    //carrega os componentes que estiver visíveis ao carregar a tela
    $('body').scroll(); 

    $('.carousel').slick(
    {
        centerMode:true, 
        slidesToShow:3, 
        adaptiveHeight:true, 
        // autoplay: true,
        autoplaySpeed:2000, 
        infinite:true, 
        prevArrow:"<img class='slick-prev' src='assets/img/esquerda.png' style='transform: translateX(-50%) scale(1.5)'>", 
        nextArrow:"<img class='slick-next' src='assets/img/direita.png' style='transform: translateX(50%) scale(1.5)'>"
    }); 

    $('.navegavel').click(function (e)
    {
        e.preventDefault(); 

        var pedacosDiretorio = e.target.href.split('/'); 
        var elementoAlvo = pedacosDiretorio[pedacosDiretorio.length - 1]; 
        var elementoAltura = parseInt($(elementoAlvo).offset().top); 

        console.log('elementoAlvo: ' + elementoAlvo + ' | elementoAltura: ' + elementoAltura); 

        $('html, body').animate(
        {
          scrollTop:elementoAltura
        }, 500); 
    }); 
}); 
$(document).on("scroll", () => 
{
    pegarTodosElementosAnimaveis().forEach(elemento => 
        {
            if (verificarElementoVisivel(elemento))
            {
                definirVisibilidadeElemento(elemento, true); 
                mudarClasses(elemento); 
            }
    }); 
}); 

function pegarTodosElementosAnimaveis()
{
    listaElementos = Array.from(document.querySelectorAll("[" + tipoElement + "*='" + pedacoNome + "']")); 

    return listaElementos; 
}

function verificarElementoVisivel(elemento)
{
    var elementoTamanhoInferior = $(elemento).offset().top + $(elemento).outerHeight(); 
    var janelaTamanhoInferior = $(window).scrollTop() + $(window).height(); 
    //a soma de 60px é a altura da navbar, corrige o carregamento dos elementos iniciais
    var resultado = (janelaTamanhoInferior + 60) >= elementoTamanhoInferior; 

    // if (resultado)
    // {
    //     console.log('janelaTamanhoInferior: ' + janelaTamanhoInferior + ' >= elementoTamanhoInferior: ' + elementoTamanhoInferior); 
    // }

    return resultado; 
}

function definirVisibilidadeElemento(elemento, booleano)
{
    elemento.style.visibility = booleano?'visible':'hidden'; 
}

function criarComplemento(elemento, tag)
{
    if (typeof elemento?.parentElement == undefined)
    {
        return '[<null>:' + tag + '] '; 
    }
    if (elemento.parentElement.id != "")
    {
        return '[' + elemento.parentElement.id + ':' + tag + '] '; 
    }

    return criarComplemento(elemento.parentElement, tag)
}

function mudarClasses(elemento)
{
    Array.from(elemento.classList).filter(classe => classe.startsWith(pedacoNome)).forEach(classe => 
    {
        var novaClasse = prefixo + classe; 
        
        $(elemento).removeClass(classe); 
        $(elemento).addClass(novaClasse); 
        console.log(criarComplemento(elemento, elemento.tagName) + classe + ' --> ' + novaClasse); 
    }); 
}

function abrirLink()
{
    window.open("https://api.whatsapp.com/send?phone=5515900000000", '_blank');
}
var cheminCarousel = document.getElementById('carousel');
var cheminContentCarousel = document.getElementById('content-carousel');

/*
cheminContentCarousel.onclick = function(){
    //fermer() ;
}
*/

function box(listeVisuels){
    // rucupère la liste des visuels
    var visuels = listeVisuels.getAttribute('visuels');
    // transforme en tableau
    var arr_visuels = visuels.split(', ');


    htmlCarousel = '<ul class="visuels">\n';
    for(let i=0; i<arr_visuels.length; i++){
        htmlCarousel += '<li><img src="img/' + arr_visuels[i] + '"></li>\n';
    }
    htmlCarousel += '</ul>\n';

    htmlCarousel += '<nav id="nav"><ul>';
    for(let i=0; i<arr_visuels.length; i++){
        htmlCarousel += '<li onclick="affVisuel(' + i + ');">'+(i+1)+'</li>';
    }
    // bouton de fermeture de la fenêtre
    htmlCarousel += '<li class="close" onclick="fermer()" >Fermer</li>';

    htmlCarousel += '</ul>\n';

    cheminCarousel.innerHTML = htmlCarousel;
    
    // ajouter une classe sur le premier li
     affVisuel(0);

    cheminCarousel.setAttribute('class', 'actif');
    document.getElementById('content').setAttribute('class', 'hide');

    // affiche le carousel au dessus
    cheminContentCarousel.setAttribute('style', 'z-index: 1000;');

 }

function affVisuel(num){

    var cheminCarouselLi = document.getElementById('carousel').getElementsByTagName('li');
    var cheminNavLi = document.getElementById('nav').getElementsByTagName('li');


    for(let i=0; i<cheminCarouselLi.length; i++){
        cheminCarouselLi[i].setAttribute('class', '');
    }
    cheminCarouselLi[num].setAttribute('class', 'actif');
    cheminNavLi[num].setAttribute('class', 'actif');

}

function fermer(){
    document.getElementById('carousel').setAttribute('class', '');
    document.getElementById('content').setAttribute('class', '');

    // affiche le carousel en dessous
    cheminContentCarousel.setAttribute('style', '');

 }


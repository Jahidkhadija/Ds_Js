//JAHID KHADIJA ZAHIRA EL MAHDAOUY n_Poste : 04
//Question 1 :
var score_j_current =document.querySelector('#courent-0');
var score_j_current2 =document.querySelector('#courent-1');
var score_joueur1=document.querySelector('#score-0');
var score_joueur2=document.querySelector('#score-1');
var joueur2=document.querySelector('#nom-1');
var joueur1=document.querySelector('#nom-0');
var icon=document.querySelectorAll('.ion-social-tux');
var de1=document.querySelector('.de');
var bcj1=document.querySelector('.panel-joueur-0');
var bcj2=document.querySelector('.panel-joueur-1');
function init()
{
    score_j_current.innerHTML=0;
    score_j_current2.innerHTML=0;
    score_joueur1.innerHTML=0;
    score_joueur2.innerHTML=0;
    de1.setAttribute('hidden','');
    joueur2.style.color='#C0C0C0';
    icon[1].style.color='#C0C0C0';
    icon[0].style.color='green';
}
init();
//Question 2 :
const lancer=document.querySelector('.btn-lancer');
var i=0;
var score1=document.querySelector('#score-0');
function lance()
{
	var tempScore=document.querySelector('#courent-0');
	var nombre=Math.floor(Math.random() * ( 6 )+1);
	console.log(nombre);
	de1.removeAttribute('hidden','');
	switch (nombre)
	{
		case 1 : de1.setAttribute('src','de-1.png');break;
		case 2 : de1.setAttribute('src','de-2.png');break;
		case 3 : de1.setAttribute('src','de-3.png');break;
		case 4 : de1.setAttribute('src','de-4.png');break;
		case 5 : de1.setAttribute('src','de-5.png');break;
		case 6 : de1.setAttribute('src','de-6.png');break;
	}
if(nombre!=1)
	{
		i=i+nombre;
		tempScore.innerHTML=i;
	}
	else
	{
		tempScore.innerHTML=0;
	}

}
lancer.addEventListener('click',lance);
//Question 3 :
function joueurSuivant()
{
		de1.setAttribute('hidden','');
		score1.innerHTML=i;
		score_j_current.innerHTML=0;
		score_j_current2.innerHTML=0;
		score_joueur2.innerHTML=0;
		joueur2.style.color='black';
		joueur1.style.color='#C0C0C0';
		icon[0].style.color='#C0C0C0';
    	icon[1].style.color='green';
    	bcj1.backgroundColor='gray';
    	bcj2.backgroundColor='white';

}
var passer =document.querySelector('.btn-passe');
passer.addEventListener('click',joueurSuivant);
function resultat(){
    let score = 0;
    if(document.getElementById('correct1').checked){
        score++;
    }
    if(document.getElementById('correct2').checked){
        score++;
    }
    if(document.getElementById('correct3').checked){
        score++;
    }
    if(document.getElementById('correct4').checked){
        score++;
    }
    if(document.getElementById('correct5').checked){
        score++;
    }
    affichageResultat(score);
    validationCouleur(score);
  
}
function validationCouleur(){
    if(document.getElementById('correct1').checked){
        document.querySelector('.question1').style.backgroundColor="lightBlue";
    }else{
        document.querySelector('.question1').style.backgroundColor="palevioletred";
    }
    
    if(document.getElementById('correct2').checked){
        document.querySelector('.question2').style.backgroundColor="lightBlue";
    }else{
        document.querySelector('.question2').style.backgroundColor="palevioletred";
    }
    
    if(document.getElementById('correct3').checked){
        document.querySelector('.question3').style.backgroundColor="lightBlue";
    }else{
        document.querySelector('.question3').style.backgroundColor="palevioletred";
    }
    
    if(document.getElementById('correct4').checked){
        document.querySelector('.question4').style.backgroundColor="lightBlue";
    }else{
        document.querySelector('.question4').style.backgroundColor="palevioletred";
    }
    
    if(document.getElementById('correct5').checked){
        document.querySelector('.question5').style.backgroundColor="lightBlue";
    }else{
        document.querySelector('.question5').style.backgroundColor="palevioletred";
    }
}

function resetColor(questionClass){
    document.querySelector(`.${questionClass}`).style.backgroundColor = "white";
}
const radios1 = document.querySelectorAll('input[name="footLigue1Q1"]');
radios1.forEach(function(radio) {
    radio.addEventListener('change', function() {
        resetColor('question1');
    });
});
const radios2 = document.querySelectorAll('input[name="footLigue1Q2"]');
radios2.forEach(function(radio) {
    radio.addEventListener('change', function() {
        resetColor('question2');
    });
});
const radios3 = document.querySelectorAll('input[name="footLigue1Q3"]');
radios3.forEach(function(radio) {
    radio.addEventListener('change', function() {
        resetColor('question3');
    });
});
const radios4 = document.querySelectorAll('input[name="footLigue1Q4"]');
radios4.forEach(function(radio) {
    radio.addEventListener('change', function() {
        resetColor('question4');
    });
});
const radios5 = document.querySelectorAll('input[name="footLigue1Q5"]');
radios5.forEach(function(radio) {
    radio.addEventListener('change', function() {
        resetColor('question5');
    });
});

function affichageResultat(score){

const affichageResultat = document.querySelector(".tableauScore h2");
const affichageScore = document.querySelector(".score");
const affichageInfo = document.querySelector(".info");


if(score === 5){
affichageResultat.textContent = "Bravo 🎉";
affichageInfo.textContent = "Vous avez gagner la ligue!!";
affichageScore.innerHTML = "Score : 5/5";

}else if( score === 4){
affichageResultat.textContent = "Bien joué 😛";
affichageInfo.textContent = "Plus qu'un point pour remporter la ligue";
affichageScore.innerHTML = "Score : 4/5";

}else if( score === 3){
affichageResultat.textContent = "Pas mal du tout ☺️";
affichageInfo.textContent = "plus que 2 points pour y arriver";
affichageScore.innerHTML = "Score : 3/5";

}else if( score === 2){
affichageResultat.textContent = "Vous pouvez faire mieux 🙂";
affichageInfo.textContent = "Encore 3 points et vous y êtes";
affichageScore.innerHTML = "Score : 2/5";

}else if( score === 1){
affichageResultat.textContent = "Les debuts sont difficile 😐";
affichageInfo.textContent = "c'est un bon début";
affichageScore.innerHTML = "Score : 1/5";

}else if( score === 0){
affichageResultat.textContent = "Dommage 😫";
affichageInfo.textContent = "Entrainez vous pour le prochain match";
affichageScore.innerHTML = "Score : 0/5";

}else{
affichageInfo.textContent ="Erreur"
}
}



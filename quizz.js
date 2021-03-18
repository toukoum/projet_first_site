function valider() {            /* Fonction qui s'execute lors de l'appuie sur le bouton valider dans le quiz */
    var c=0;
    var q1=document.quiz.question1.value;   /* On enregistre les valeurs entrées par l'utilisateur dans le quiz pour chaque question */
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value;
    var q6=document.quiz.question6.value;
    var q7=document.quiz.question7.value;
    var q8=document.quiz.question8.value;
    var q9=document.quiz.question9.value;
    var q10=document.quiz.question10.value;

    
    if (q1=="A") {c++}      /* On incrémente la variable c si l'utilisateur à correctement repondu */
    if (q2=="D") {c++}
    if (q3=="A") {c++}
    if (q4=="A") {c++}
    if (q5=="D") {c++}
    if (q6=="B") {c++}
    if (q7=="D") {c++}
    if (q8=="C") {c++}
    if (q9=="C") {c++}
    if (q10=="A") {c++}


    const resultatElem = document.getElementById('resultat');

    if (c < 5) {                /* simple condition pour un affichage différent pour le cas ou l'utilisateur à obtenu plus ou moins de 5/10  */
        resultatElem.innerHTML = "Dommage :( Vous n'avez pas bien compris le site. Reprenez -le et revenez vous tester ! Votre score est de : " + c;
    }
    else {
        resultatElem.innerHTML = "Bravo !! Votre score est de : " + c + " Vous avez bien compris le cours ;)";
    }

}

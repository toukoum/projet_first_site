function valider() {
    var c=0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var resultat=document.getElementById('resultat');
    var quiz=document.getElementById('quiz');
    if (q1=="A") {c++}
    if (q2=="D") {c++}
    if (q3=="A") {c++}
   quiz.style.display="none";
    
    resultat.textContent='Votre résultat est ${c}'


}
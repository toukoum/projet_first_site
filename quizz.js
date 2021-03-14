function valider() {
    var c=0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value;
    var q6=document.quiz.question6.value;
    var q7=document.quiz.question7.value;
    var q8=document.quiz.question8.value;
    var q9=document.quiz.question9.value;
    var q10=document.quiz.question10.value;


    if (q1=="A") {c++}
    if (q2=="D") {c++}
    if (q3=="A") {c++}
    if (q4=="A") {c++}
    if (q5=="D") {c++}
    if (q6=="B") {c++}
    if (q7=="D") {c++}
    if (q8=="C") {c++}
    if (q9=="C") {c++}
    if (q10=="A") {c++}

if (c<5) {
document.write("Dommage :( Vous n'avez pas bien compris le site. Reprenez -le et revenez vous tester ! Votre score est de : ", c);
}
else{
document.write("Bravo !! Votre score est de : ", c, " Vous avez bien compris le cours ;)");
}
   


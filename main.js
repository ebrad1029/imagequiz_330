function quiz_1(){
  var q1 = document.quiz.q1.value;
  var q2 = document.quiz.q2.value;
  var q3 = document.quiz.q3.value;
  var correct = 0;

    if (q1 == 'Elephant') {
      correct++;
    }
    if (q2 == 'Deer') {
      correct++;
    }
    if(q3 == 'Dog') {
      correct++;
    }


  document.getElementById('number_correct').innerHTML = "You got " + correct +
    ' correct.';

}

function quiz_2(){
  var q1 = document.quiz.q1.value;
  var q2 = document.quiz.q2.value;
  var q3 = document.quiz.q3.value;
  var correct = 0;

    if (q1 == 'Burger') {
      correct++;
    }
    if (q2 == 'Pasta') {
      correct++;
    }
    if(q3 == 'Orange') {
      correct++;
    }

  document.getElementById('number_correct').innerHTML = "You got " + correct +
    ' correct.';

}

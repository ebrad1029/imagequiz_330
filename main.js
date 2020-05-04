function answer(){
  var q1 = document.quiz.q1.value;
  var correct = 0;
    if (q1 == 'Elephant') {
      correct++;
    }
  //document.getElementById('after_submit').style.visibiltiy='visible';
  document.getElementById('number_correct').innerHTML = "you got " + correct +
    ' correct.';




}

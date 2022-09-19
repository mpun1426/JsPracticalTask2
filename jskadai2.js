$(function(){
  let pushNumber = [];
  let firstNumber = '';
  let secondNumber = '';
  let answerNumber = '';
  let taxIn = '';
  let answerTaxIn = '';
  let math = '';
  let dot = $("#dot");
  let calculation = false;

$(dot).prop("disabled", true);

$('.button').on('click',function(){
  $(dot).prop("disabled", false);
  if($.inArray('.', pushNumber) != -1) {
    $(dot).prop("disabled", true);
  } else {
    $(dot).prop("disabled", false);
  }
  pushNumber.push($(this).text());
  if(calculation == true){
    secondNumber = pushNumber.join('');
    $('#result').text(Number(secondNumber));
  } else {
    firstNumber = pushNumber.join('');
    $('#result').text(Number(firstNumber));
  }
});

dot.click(function(){
  $(dot).prop("disabled", true);
});

$('.calculation').on('click',function(){
  if (secondNumber > 0) {
    switch(math){
      case '+':
        answerNumber = Number(firstNumber) + Number(secondNumber);
        break;
      case '-':
        answerNumber = Number(firstNumber) - Number(secondNumber);
        break;
      case '*':
        answerNumber = Number(firstNumber) * Number(secondNumber);
        break;
      case '/':
        answerNumber = Number(firstNumber) / Number(secondNumber);
        break;
    }
    $('#result').text(Number(answerNumber));
    firstNumber = answerNumber;
    calculation = true;
    math = $(this).attr('id');
    secondNumber ='';
    pushNumber = [];
    $(dot).prop("disabled", true);
  } else {
    calculation = true;
    math = $(this).attr('id');
    pushNumber = [];
    $(dot).prop("disabled", true);
  }
  $('#taxIn').prop("disabled", false);
});

$('#equals').on('click',function(){
  switch(math){
    case '+':
      answerNumber = Number(firstNumber) + Number(secondNumber);
      break;
    case '-':
      answerNumber = Number(firstNumber) - Number(secondNumber);
      break;
    case '*':
      answerNumber = Number(firstNumber) * Number(secondNumber);
      break;
    case '/':
      answerNumber = Number(firstNumber) / Number(secondNumber);
      break;
  }
  $('#result').text(Number(answerNumber));
  firstNumber = answerNumber;
  secondNumber ='';
  pushNumber = [];
  $(dot).prop("disabled", true);
});

$('#taxIn').on('click',function(){
  taxIn = Number(firstNumber) * 110 / 100;
  $('#result').text(Number(taxIn));
  firstNumber = taxIn;
  secondNumber ='';
  $('#taxIn').prop("disabled", true);
});

$('#clear').on('click',function(){
  pushNumber = [];
  secondNumber = '';
  $('#result').text('0');
  $(dot).prop("disabled", true);
});

$('#allClear').on('click',function(){
  pushNumber = [];
  firstNumber = '';
  secondNumber = '';
  math = '';
  answerNumber = '';
  calculation = false;
  $('#result').text('0');
  $(dot).prop("disabled", true);
  $('#taxIn').prop("disabled", false);
});

});
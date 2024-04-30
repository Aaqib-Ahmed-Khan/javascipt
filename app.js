var user_number = document.getElementById("user_number");
var random_number = document.getElementById("random_number");
var result = document.getElementById("result");
var info_box_result = document.getElementById("info_box_result");
var win_html = document.getElementById("win");
var loss_html = document.getElementById("loss");
var total = document.getElementById("total");
var msg = document.getElementById("msg");

var count = 10;
var win = 0;
var loss = 0;


document.querySelector('.container').addEventListener('click', function(event) {
  var clickedNumber = parseInt(event.target.innerText);
  if (!isNaN(clickedNumber)) {
    tryMyLuck(clickedNumber);
  }
});

function tryMyLuck(userNumber) {
  var randomNumber = Math.floor(Math.random() * 10) + 4;
  user_number.innerText = userNumber;
  random_number.innerText = randomNumber;
  total.innerText = --count;

  if (randomNumber === userNumber) {
    result.innerText = "You won";
    info_box_result.style.backgroundColor = "green";
    win_html.innerText = ++win;
  } else {
    result.innerText = "You Loss";
    info_box_result.style.backgroundColor = "red";
    loss_html.innerText = ++loss;
  }

  checkResult();
}

function checkResult() {
  if (count == 0) {
    if (win >= 3) {
      msg.innerText = "Congrats! You won";
    } else {
      msg.innerText = "Sorry! You lost. Try again";
    }
    count = 10;
    win = 0;
    loss = 0;
    total.innerText = count;
    win_html.innerText = win;
    loss_html.innerText = loss;
  }
}

let coefficient = [-9,-8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8,9];

let s = 0;
let t = 0;
while(s==t || s+t==0){
    s = coefficient[Math.floor(Math.random()*18)];
    t = coefficient[Math.floor(Math.random()*18)];
}
let b = s + t;
let c = s*t;
if(b>0){
    b = "+"+b;
}
if(c>0){
    c = "+"+c;
}

let question = "$$x^2" + b + "x" + c + "$$";

document.getElementById('js-ploblem').textContent = question;

//正誤判定
function answer(){
    let leftAnswer;
    let rightAnswer;
    let leftPm = document.getElementById('left-pm');
    let leftNum = document.getElementById('left-num');
    let rightPm = document.getElementById('right-pm');
    let rightNum = document.getElementById('right-num');

    //文字列を数値に変換
    if(leftPm.value == '-'){
        leftAnswer = leftNum.value * (-1);
    }
    else{
        leftAnswer = leftNum.value * 1;
    }
    if(rightPm.value == '-'){
        rightAnswer = rightNum.value * (-1);
    }
    else{
        rightAnswer = rightNum.value * 1;
    }

    //解の和と積が一致するかどうかで正誤判定
    if(leftAnswer + rightAnswer == parseInt(b) && leftAnswer * rightAnswer == parseInt(c)){
        document.getElementById('judge').textContent = "正解です！";
        document.getElementById('advice').textContent = "今度は練習問題にチャレンジしてみよう！"
        document.getElementById('example').textContent = "例題 ⭕️";
    }
    else{
        document.getElementById('judge').textContent = "残念！";
        document.getElementById('advice').textContent = "和が"+parseInt(b)+"、積が"+parseInt(c)+"となる2つの数字を考えてみよう！";
        document.getElementById('example').textContent = "例題 ❌";
    }
}

//モーダルの設定
$(function () {
    $('#answer').click(function(){
        answer();
        $('#modalArea').fadeIn(0);
    });
    $('#closeModal , #modalBg').click(function(){
      $('#modalArea').fadeOut(500);
    });
  });
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
        window.alert("正解です！\n今度は「問題スタート」を押して練習問題を解いてみよう！");
        document.getElementById('example').textContent = "例題 ⭕️";
    }
    else{
        window.alert("残念！\n和が"+parseInt(b)+"、積が"+parseInt(c)+"となる二つの数字を考えてみましょう！");
        document.getElementById('example').textContent = "例題 ❌";
    }
}
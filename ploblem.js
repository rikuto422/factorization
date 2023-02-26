let coefficient = [-9,-8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8,9];

//問題数
let ploblem_total = 10;

//u,v : 解答者が選択した数
let u = new Array(ploblem_total);
let v = new Array(ploblem_total);

//b,c : 問題に表示する数
let b = new Array(ploblem_total);
let c = new Array(ploblem_total);

//問題の内容
let ploblem = new Array(ploblem_total);

//各問題における係数の生成
function setup_coefficient (){
    let ploblem_index = 0;
    while(ploblem_index < ploblem_total){
        //重解及び一次の係数が0になる条件を排除
        while(u[ploblem_index]==v[ploblem_index] || u[ploblem_index]+v[ploblem_index]==0){
            u[ploblem_index] = coefficient[Math.floor(Math.random()*18)];
            v[ploblem_index] = coefficient[Math.floor(Math.random()*18)];
        }
    b[ploblem_index] = u[ploblem_index] + v[ploblem_index];
    c[ploblem_index] = u[ploblem_index] * v[ploblem_index];
    ploblem_index++;
    }
}
setup_coefficient();

//係数が正のときに＋の文字列を追加
function pm_check(){
    let pm_index = 0;
    while(pm_index < ploblem_total){
        if(b[pm_index] > 0){
            b[pm_index] = "+"+b[pm_index];
        }
        if(c[pm_index] > 0){
            c[pm_index] = "+"+c[pm_index];
        }
    pm_index++;
    }
}
pm_check();

//問題の生成
function setup_ploblem(){
    let ploblem_index = 0;
    while(ploblem_index < ploblem_total){
        ploblem[ploblem_index] = "$$x^2" + b[ploblem_index] + "x" + c[ploblem_index] + "$$";
        document.getElementsByClassName('js-ploblem')[ploblem_index].textContent = ploblem[ploblem_index];
        ploblem_index++;
    }
}
setup_ploblem();

//正誤判定
function answer(){
    let answer_index = 0;
    let correct_counter = 0;
    while(answer_index < ploblem_total){
        let leftAnswer;
        let rightAnswer;
        let leftPm = document.getElementsByClassName('left-pm')[answer_index].value;
        let leftNum = document.getElementsByClassName('left-num')[answer_index].value;
        let rightPm = document.getElementsByClassName('right-pm')[answer_index].value;
        let rightNum = document.getElementsByClassName('right-num')[answer_index].value;
    
        //負の値のときに符号を追加
        if(leftPm == '-'){
            leftAnswer = "-" +leftNum;
        }
        else{
            leftAnswer = leftNum;
        }
        if(rightPm == '-'){
            rightAnswer = "-" +rightNum;
        }
        else{
            rightAnswer = rightNum;
        }
    
        //解の和と積が一致するかどうかで正誤判定
        if(parseInt(leftAnswer) + parseInt(rightAnswer) == parseInt(b[answer_index]) && parseInt(leftAnswer) * parseInt(rightAnswer) == parseInt(c[answer_index])){
            let txt = document.getElementsByClassName('ploblem_number')[answer_index];
            //既に正誤判定をしている場合は末尾を一文字消去
            txt.textContent = txt.textContent.replace('⭕️','');
            txt.textContent = txt.textContent.replace('❌','');
            //問題番号の横にマルを追加
            txt.insertAdjacentHTML('beforeend',' ⭕️');
            correct_counter++;
        }
        else{
            let txt = document.getElementsByClassName('ploblem_number')[answer_index];
            //既に正誤判定をしている場合は末尾を一文字消去
            txt.textContent = txt.textContent.replace('⭕️','');
            txt.textContent = txt.textContent.replace('❌','');
            //問題番号の横にバツを追加
            txt.insertAdjacentHTML('beforeend',' ❌');
        }
        answer_index++;
    }
    window.alert(ploblem_total + "問中" + correct_counter + "問正解です！");
}
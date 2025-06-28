let p1,p2;
function player1Score(){
    p1=Math.floor(Math.random()*6+1);
    return `./images/dice${p1}.png`;
}

function player2Score(){
    p2=Math.floor(Math.random()*6+1);
    return `./images/dice${p2}.png`;
}

function result(){
    if(p1>p2) return "palyer1👑 wins";
    else if(p1==p2) return "Draw";
    else return "player2👑 wins" ;
}

function update(){
    document.getElementById("img1").src=player1Score();
    document.getElementById("img2").src=player2Score();
    document.getElementById("result").textContent=result();
    document.querySelector("button").textContent="Roll Again";
}

update(); 
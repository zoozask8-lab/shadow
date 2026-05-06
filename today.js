


function alearn(){
    let name = document.getElementById("name").value;
    let date = document.getElementById("date").value;
    let block = document.getElementById("block");
    let h2 = document.getElementById("h2");
    let btn = document.getElementById("btn");
    if( name === "puya"){
        if( date === "03" ){
            block.style.minHeight = "100px";
            block.style.backgroundColor = "white";
            block.style.border = "solid 2px pink";
            block.style.display = "block"
            h2.style.color = "pink";
            h2.style.textShadow = "1px 2px 5px black";
            h2.style.fontSize = "40px";
            h2.innerHTML = "Happy birthday puya";
            btn.style.fontSize = "30px"
            btn.style.backgroundColor = "pink";
            btn.innerHTML = "Leave";
        } else{
            block.style.minHeight = "100px";
            block.style.backgroundColor = "black";
            block.style.display = "block";
            h2.style.color = "red";
            h2.style.textShadow = "1px 2px 5px black";
            h2.style.fontSize = "40px";
            h2.innerHTML = "I don't know you!";
            btn.style.fontSize = "20px"
            btn.style.textShadow = " 1px 2px 10px white"
            btn.style.color = "red";
            btn.style.backgroundColor = "black";
            btn.style.boxShadow = " 2px 2px 5px white";
            btn.innerHTML = "Go back";
        }
    } else{
        alert("I cracked your account !");
    }
}

function BTN(){
    let block = document.getElementById("block");
    block.style.display = "none";
}


function log(){
    let text = document.getElementById("text");
    let email = document.getElementById("input-email").value;
    let h1 = document.getElementById("h1");
    let pass = document.getElementById("input-pass").value;
    let nBar = document.getElementById("Bar");
    if( email === "hak"){
        if( pass === "16"){
            nBar.style.minHeight = "300px";
            nBar.style.backgroundColor = "pink";
            nBar.style.display = "block";
            h1.style.marginTop = "40px"
            h1.innerHTML = "PUYA! I love you so much. I need you because, I love you!";
            h1.style.fontSize = "50px";
            h1.style.color = "white";
            h1.style.textShadow = "-2px 2px 5px black";
        } else{
            text.innerHTML = "Wrong password please try again!";
            text.style.color = "red";
        }
    }else{
        alert("please input name again");
    }
    
}
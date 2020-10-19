
document.getElementById("checkMagicWord").onclick = function(){
    var magicWordEntered = document.getElementById("magicWord").value ;
    var magicWord = "abracadabra";
    if(magicWordEntered == magicWord){
        alert("You got it!");
    }
    else{
        alert("Nope! Try again");
    }
}
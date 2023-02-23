(function (){
var theImg = document.querySelector('#theImg');
var container = document.querySelector('#spaceShip');

    const spaceShip = document.getElementById('spaceShip')

    container.addEventListener("keypress", getClickPosition, false);

    function getClickPosition(e){

        theImg.style.left = 300 +"px";
        theImg.style.top = 300 + "px";
        
    }
    

 }());
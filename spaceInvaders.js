(function (){
var theImg = document.querySelector('#theImg');
var container = document.querySelector('#spaceShip');

    const spaceShip = document.getElementById('spaceShip')

    container.addEventListener("click", getClickPosition, false);

    function getClickPosition(e){

        spaceShip.style.left = 300 +"px";
        spaceShip.style.top = 300 + "px";
        
    }


    

 }());
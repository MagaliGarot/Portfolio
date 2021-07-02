// HOVER PARALLAX 
//Documentation : codepen : https://codepen.io/oscicen/pen/zyJeJw
(function() {
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#Formations");

    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.03}% ${50 - (_mouseY - _h) * 0.03}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
    }

})();

(function() {
    const button = document.getElementById("accessibilityTrue");
    button.addEventListener("click", function() {
        document.getElementById("cardWorkOne").style.cssText = "height: 720px; margin-top: 0px"; 
        document.getElementById("cardWorkTwo").style.cssText = "height: 720px; margin-top: 0px";  
        document.getElementById("cardWorkThree").style.cssText = "height: 720px; margin-top: 0px"; 
        document.getElementById("cardWorkFour").style.cssText = "height: 720px; margin-top: 0px"; 
        document.getElementById("cardWorkFive").style.cssText = "height: 720px; margin-top: 0px"; 
        document.getElementById("cardWorkSix").style.cssText = "height: 720px; margin-top: 0px"; 
        document.getElementById("cardWorkSeven").style.cssText = "height: 720px; margin-top: 0px"; 
        document.getElementById("cardWorkHeight").style.cssText = "height: 720px; margin-top: 0px";
    });
})();

//https://codepen.io/Mertl/pen/GexapP
//https://codepen.io/slyka85/pen/BJEbVL


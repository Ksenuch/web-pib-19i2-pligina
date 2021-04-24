var isDark = true;

function SwapTheme(){
    if(isDark){
        document.querySelector('header').style.backgroundColor = "rgb(187, 221, 240, 0.8)";
        document.querySelector('footer').style.backgroundColor = "rgb(187, 221, 240, 0.8)";
        document.querySelector('#main').style.backgroundColor = "rgb(187, 221, 240, 0.8)";
        document.querySelector('#main').style.color = "rgb(149, 127, 13)";
        document.querySelector('body').style.backgroundImage="url(./resourses/background_l.jpg)";
        document.getElementById('dm').src="./resourses/morning.png";

        var buttons = document.querySelectorAll('.button');
        buttons.forEach(element => {
            element.style.backgroundColor = "rgb(93, 151, 182, 0.5)";
            element.style.color= "rgb(149, 127, 13)";
        });

        isDark = !isDark;
    }
    else{
        document.querySelector('header').style.backgroundColor = "rgb(56, 78, 92, 0.8)";
        document.querySelector('footer').style.backgroundColor = "rgb(56, 78, 92, 0.8)";
        document.querySelector('#main').style.backgroundColor = "rgb(56, 78, 92, 0.8)";
        document.querySelector('#main').style.color = "rgb(232, 197, 23, 1)";
        document.querySelector('body').style.backgroundImage="url(./resourses/background_d.jpg)";
        document.getElementById('dm').src="./resourses/night.png";

        var buttons = document.querySelectorAll('.button');
        buttons.forEach(element => {
            element.style.backgroundColor = "rgb(53, 97, 121, 0.8)";
            element.style.color= "rgb(232, 197, 23, 1)";
        });

        isDark = !isDark;
    }
}
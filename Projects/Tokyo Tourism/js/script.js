let japanText = document.getElementById('japantext');
let citiesText = document.getElementById('citiestext');
let japanmountain = document.getElementById('japanmountain');
let japansun = document.getElementById('japansun');


window.addEventListener('scroll', () => {
    let value = window.scrollY;


    citiesText.style.left = value * -2 + 'px';
    japanmountain.style.top = value * 1 + 'px';
    japansun.style.top = value * 1 + 'px';

});

window.addEventListener('scroll', () => {
    let value = window.scrollY;


    japanText.style.left = value * -2 + 'px';
    japanmountain.style.top = value * 1 + 'px';
    japansun.style.top = value * 1 + 'px';

});


function playSound(musicwelcome, loop) {
    let audio = new audio(musicwelcome);
    audio.loop = loop;
    audio.play();

}
playSound("musicwelcome.mp3", true)

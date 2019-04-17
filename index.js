
const list = document.querySelectorAll('button');

document.addEventListener('click', function clickFunc(event){
    let mouse = event.toElement;
    list.forEach(function(element){
    if(element === mouse){
        Sound(element) ;
    }
    })
});

document.addEventListener('keydown', function(event) {
    let pressedKey = event.keyCode;
    list.forEach(function(item) {
        if(item.textContent.charCodeAt(0) == pressedKey) {
            Sound(item);
        }
    })
});

function Sound(item){
    item.classList.add('border');
    item.firstElementChild.play();
        setTimeout(function(){item.classList.remove('border')},100);
};
let text = document.getElementById("text");

let buttons = document.querySelectorAll("a");

let equal = document.querySelector(".equal");
let reset = document.querySelector(".reset");
let del = document.querySelector(".delete");

let styles = document.querySelector('head > link')
let safe = false;
let theme = 1;

buttons.forEach(b => {
    b.addEventListener('click', () => {

        bText = b.innerText;
        
        if(bText == 'DEL' || bText == 'RESET' || bText == '='){
            
        } else if( (!safe && bText == '+') || (!safe && bText == '-') ||(!safe && bText == 'x') || (!safe && bText == '/') || (!safe && bText == '.')){

        } else {
            if(bText == "x"){
                text.innerText += "*";
            } else{
                text.innerText += b.innerText.valueOf();
            }
            
            
        }
        checkLast();
        
    })
})





equal.addEventListener('click', () => {
    if(safe){
        text.innerText = eval(text.innerText.valueOf())
    }
    
})


del.addEventListener('click', () => {
    let textLength = text.innerText.length;
    text.innerText = text.innerText.valueOf().slice(0, textLength-1);
    checkLast()
})

reset.addEventListener('click', () => {
    text.innerText = '';
    safe = false;
})

let checkLast = () => {
    let length = text.innerText.valueOf().length;
    let texts = text.innerText.valueOf();
    if(texts == '' || texts.charAt(length-1) == '+' || texts.charAt(length-1) == '-' || texts.charAt(length-1) == 'x' || texts.charAt(length-1) == '/' || texts.charAt(length-1) == '.'){
        safe = false;
    } else {
        safe = true;
    }
    
}

// Click Animation

buttons.forEach(b => {
    b.addEventListener('mousedown', () => {
        b.setAttribute('id', 'button-active');
      });
    
      b.addEventListener('mouseup', () => {
        if (b.getAttribute('id') === 'button-active') {
          b.removeAttribute('id');
        }
      });
})

// Themes
let sliderButton = document.querySelector(".slide-button");
let slider = document.querySelector(".slider");

sliderButton.addEventListener('click', () => {
    if(getComputedStyle(slider).justifyContent == "start"){
        slider.style.justifyContent = "center";
        styles.href = "styles2.css";
        theme = 2;
    } else if(getComputedStyle(slider).justifyContent == "center"){
        slider.style.justifyContent = "end"
        styles.href = "styles3.css";
        theme = 3;
    } else {
        slider.style.justifyContent = "start"
        styles.href = "styles.css"
        theme = 1;
    }
    console.log(theme);
})


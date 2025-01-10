let text = document.getElementById("text");

let buttons = document.querySelectorAll("a");

let equal = document.getElementById("equal");
let reset = document.getElementById("reset");
let del = document.getElementById("delete");

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
    
    text.innerText = eval(text.innerText.valueOf())
})


del.addEventListener('click', () => {
    let textLength = text.innerText.length;
    text.innerText = text.innerText.valueOf().slice(0, textLength-1);
})

reset.addEventListener('click', () => {
    text.innerText = '';
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
    if(theme == 1){
        if(b.innerText == 'DEL' || b.innerText == 'RESET'){
            b.addEventListener('mousedown', () => {
                b.style.marginTop = "4px";
                b.style.boxShadow = "none";
            })
            b.addEventListener('mouseup', () => {
                b.style.marginTop = "0px";
                b.style.boxShadow = "0px 4px 0px 0px hsl(224, 28%, 35%)";
            })
        } else if(b.innerText == '='){
            b.addEventListener('mousedown', () => {
                b.style.marginTop = "4px";
                b.style.boxShadow = "none";
            })
            b.addEventListener('mouseup', () => {
                b.style.marginTop = "0px";
                b.style.boxShadow = "0px 4px 0px 0px hsl(6, 70%, 34%)";
            }) 
        } else {
            b.addEventListener('mousedown', () => {
                b.style.marginTop = "4px";
                b.style.boxShadow = "none";
            })
            b.addEventListener('mouseup', () => {
                b.style.marginTop = "0px";
                b.style.boxShadow = "0px 4px 0px 0px hsl(28, 16%, 65%)";
            }) 
        }
    } else if (theme == 2){
        if(b.innerText == 'DEL' || b.innerText == 'RESET'){
            b.addEventListener('mousedown', () => {
                b.style.marginTop = "4px";
                b.style.boxShadow = "none";
            })
            b.addEventListener('mouseup', () => {
                b.style.marginTop = "0px";
                b.style.boxShadow = "0px 4px 0px 0px hsl(185, 58%, 25%)";
            })
        } else if(b.innerText == '='){
            b.addEventListener('mousedown', () => {
                b.style.marginTop = "4px";
                b.style.boxShadow = "none";
            })
            b.addEventListener('mouseup', () => {
                b.style.marginTop = "0px";
                b.style.boxShadow = "0px 4px 0px 0px hsl(185, 58%, 25%)";
            }) 
        } else {
            b.addEventListener('mousedown', () => {
                b.style.marginTop = "4px";
                b.style.boxShadow = "none";
            })
            b.addEventListener('mouseup', () => {
                b.style.marginTop = "0px";
                b.style.boxShadow = "0px 4px 0px 0px hsl(35, 11%, 61%)";
            }) 
        }
    } else if(theme == 3) {
        if(b.innerText == 'DEL' || b.innerText == 'RESET'){
            b.addEventListener('mousedown', () => {
                b.style.marginTop = "4px";
                b.style.boxShadow = "none";
            })
            b.addEventListener('mouseup', () => {
                b.style.marginTop = "0px";
                b.style.boxShadow = "0px 4px 0px 0px hsl(285, 91%, 52%)";
            })
        } else if(b.innerText == '='){
            b.addEventListener('mousedown', () => {
                b.style.marginTop = "4px";
                b.style.boxShadow = "none";
            })
            b.addEventListener('mouseup', () => {
                b.style.marginTop = "0px";
                b.style.boxShadow = "0px 4px 0px 0px hsl(177, 92%, 70%)";
            }) 
        } else {
            b.addEventListener('mousedown', () => {
                b.style.marginTop = "4px";
                b.style.boxShadow = "none";
            })
            b.addEventListener('mouseup', () => {
                b.style.marginTop = "0px";
                b.style.boxShadow = "0px 4px 0px 0px hsl(290, 70%, 36%)";
            }) 
        }
    }
    
    
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
})


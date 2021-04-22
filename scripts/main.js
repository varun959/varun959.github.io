let myImage = document.querySelector('img');

myImage.onclick = function(){
    let imgSrc = myImage.getAttribute('src');

    if(imgSrc === 'images/firefox.png'){
        myImage.setAttribute('src', 'images/firefox2.png');
    }else{
        myImage.setAttribute('src', 'images/firefox.png');
    }
}

let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please enter your name.');
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

let myButton = document.querySelector('button');
myButton.onclick = function(){
    setUserName();
}
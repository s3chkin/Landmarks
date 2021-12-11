let imgEl = document.querySelector("div.content img");

let header1 = document.querySelector(`p.bulgaria`); //за скриване на tekst
imgEl.addEventListener("mouseover", function() {
    imgEl.setAttribute("src", "./images/nesebur.jpg");
    header1.style.display = 'none';
})

imgEl.addEventListener("mouseout", function() {
    imgEl.setAttribute("src", "./Flags/bulgaria.png");
    header1.style.display = 'block';
})


//preslava
let imgE2 = document.querySelector("div.preslava img");
let header2 = document.querySelector(`p.preslava`);
imgE2.addEventListener("mouseover", function() {
    imgE2.setAttribute("src", "./images/istanbul.jpg ");
    header2.style.display = 'none';
})

imgE2.addEventListener("mouseout", function() {
    imgE2.setAttribute("src", "./Flags/turkey.png");
    header2.style.display = 'block';
})

//alisia
let imgAlisia = document.querySelector("div.alisia img");
let header3 = document.querySelector(`p.alisia`);
imgAlisia.addEventListener("mouseover", function() {
    imgAlisia.setAttribute("src", "./images/budapeshta.jpg ");
    header3.style.display = 'none';
})

imgAlisia.addEventListener("mouseout", function() {
    imgAlisia.setAttribute("src", "./Flags/hungary.png");
    header3.style.display = 'block';
})

//boni
let imgBoni = document.querySelector("div.boni img");
let header4 = document.querySelector(`p.boni`);
imgBoni.addEventListener("mouseover", function() {
    imgBoni.setAttribute("src", "./images/bled.jpg");
    header4.style.display = 'none';
})

imgBoni.addEventListener("mouseout", function() {
    imgBoni.setAttribute("src", "./Flags/slovenia.png");
    header4.style.display = 'block';
})

//luna
let imgLuna = document.querySelector("div.luna img");
let header5 = document.querySelector(`p.luna`);
imgLuna.addEventListener("mouseover", function() {
    imgLuna.setAttribute("src", "./images/talin.jpg");
    header5.style.display = 'none';
})

imgLuna.addEventListener("mouseout", function() {
    imgLuna.setAttribute("src", "./Flags/estonia.png");
    header5.style.display = 'block';
})
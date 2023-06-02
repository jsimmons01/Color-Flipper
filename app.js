const colors = ["#00CC99", "#BC4749", "#1D4E89", "#F19A3E"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    console.log(document.body);
    //get random number betwee 0 - 3
    const randomNumber = getRandomNumber();
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber]; color.textContent = colors[randomNumber]
})

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}
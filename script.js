const titleText = "Happy Birthday Zia ❤️";
const messageText =
"Today is all about celebrating you. Thank you for being such an amazing person. I made this little website just for you. I hope it makes you smile. 🌸";

let i = 0;
let j = 0;

function typeTitle() {
    if (i < titleText.length) {
        document.getElementById("title").innerHTML += titleText.charAt(i);
        i++;
        setTimeout(typeTitle, 70);
    } else {
        typeMessage();
    }
}

function typeMessage() {
    if (j < messageText.length) {
        document.getElementById("message").innerHTML += messageText.charAt(j);
        j++;
        setTimeout(typeMessage, 35);
    }
}

window.onload = () => {

    setTimeout(() => {

        document.getElementById("loading").style.display = "none";

        typeTitle();

    },3000);

}

const letterButton=document.getElementById("letterButton");

letterButton.onclick=()=>{

document.getElementById("letter").classList.remove("hidden");

document.getElementById("letter").scrollIntoView({
behavior:"smooth"
});

typeLetter();

};

const letter=`

Happy Birthday, my favourite person. ❤️

Thank you for existing.

Thank you for always making me laugh.

Thank you for caring for me.

I hope this year brings you happiness,
good health,
success,
and endless reasons to smile.

You deserve nothing but the best.

Enjoy your special day with your family,
your friends,
and with me too. ❤️

Happy 22nd Birthday.

Love always ❤️

`;

let k=0;

function typeLetter(){

if(k<letter.length){

document.getElementById("letterText").innerHTML+=letter.charAt(k);

k++;

setTimeout(typeLetter,25);

}

}

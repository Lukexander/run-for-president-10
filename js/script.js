let person;
let people = [];
for (let i = 1; i <= 10; i++) {
    people.push(new Person("img/yes/pres_" + i + ".png"));
    people.push(new Person(`img/no/o-${i}.png`));
}



const no = document.getElementById("no");
const yes = document.getElementById("yes");
const score = document.getElementById("score");
const timer = document.getElementById("timer");
const page = document.getElementById("html");
const SCORE_CHANGE = 25;

no.addEventListener("click", handleNo);
yes.addEventListener("click", handleYes);
page.style.backgroundImage = "URL('img/Background.jpeg')";
function handleNo() {
    //check if right or wrong
    handleChoice(!person.isPresident());
}
function handleYes() {
    //check if right or wrong
    handleChoice(person.isPresident());
}

function handleChoice(decision) {
    //if right make background green,add 25 points to score
    if (decision) {
        page.style.background = "green";
       
    } else {
        page.style.background = "red";
    }
    setTimeout(function(){
        page.style.backgroundImage = "URL('img/Background.jpeg')";
        updatePerson();
    },700)
   
    //if wrong make background red,remove 25 points from score
    //limit lowest score to 0
    //update image
}


const theImage = document.getElementById("person");
updatePerson();

function updatePerson() {
    person = people[~~(Math.random() * people.length)];
    theImage.src = person.getPath();
}
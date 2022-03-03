const cardArray = [
    {
        name: "redFlower",
        img: "redFlower.jpeg",
    },
    {
        name: "orangeFlower",
        img: "orangeFlower.jpeg",
    },
    {
        name: "yellowFlower",
        img: "yellowFlower.jpeg",
    },
    {
        name: "blueFlower",
        img: "blueFlower.jpeg",
    },
    {
        name: "purpleFlower",
        img: "purpleFlower.jpeg",
    },
    {
        name: "whiteFlower",
        img: "whiteFlower.jpeg",
    },
    {
        name: "redFlower",
        img: "redFlower.jpeg",
    },
    {
        name: "orangeFlower",
        img: "orangeFlower.jpeg",
    },
    {
        name: "yellowFlower",
        img: "yellowFlower.jpeg",
    },
    {
        name: "blueFlower",
        img: "blueFlower.jpeg",
    },
    {
        name: "purpleFlower",
        img: "purpleFlower.jpeg",
    },
    {
        name: "whiteFlower",
        img: "whiteFlower.jpeg",
    },
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector("#grid")
const resultDisplay = document.querySelector("#result")
let cardsChosen = []
let cardsChosenIds = []
let cardsWon = []

// Create board
function createBoard () {
    for(let i=0; i < cardArray.length; i++) {
       const card = document.createElement("img")
       card.setAttribute("src", "blank.jpeg")
       card.setAttribute("data-id", i)
       card.addEventListener("click", flipCard)
       gridDisplay.appendChild(card)
    }
}

createBoard()

function checkMatch() {
   const cards = document.querySelectorAll("img")
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log("check for match")

    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute("src", "blank.jpeg")
        cards[optionTwoId].setAttribute("src", "blank.jpeg")
        alert("You have clicked the same image!")
    }

   if (cardsChosen[0] === cardsChosen[1]){
    alert("you found a match!")
    cards[optionOneId].setAttribute("src", "white.jpeg")
    cards[optionTwoId].setAttribute("src", "white.jpeg")
    cards[optionOneId].removeEventListener("click", flipCard)
    cards[optionTwoId].removeEventListener("click", flipCard)
    cardsWon.push(cardsChosen)
   }
   else {
    cards[optionOneId].setAttribute("src", "blank.jpeg")
    cards[optionTwoId].setAttribute("src", "blank.jpeg")
    alert("sorry try again")
   }
   resultDisplay.innerHTML = cardsWon.length
   cardsChosen = []
   cardsChosenIds = []

   if (cardsWon.length === cardArray.length/2) {
    resultDisplay.innerHTML = "Congradulations! You've found them all!"
   }
}

function flipCard(){
    let cardId = this.getAttribute("data-id")
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute("src", cardArray[cardId].img)
    if (cardsChosen.length ===2){
        setTimeout(checkMatch, 500)
    }
}
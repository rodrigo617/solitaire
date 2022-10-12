
const cardTypes = {
    clubs: "clubs (♣)",
    hearts: "hearts (♥)",
    diamonds: "diamonds (♦)",
    spades: "spades (♠)"
}
const numbers = {
    A: "A",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "10",
    J: "J",
    Q: "Q",
    K: "K"
}
const colors = {
    red: "red",
    black: "black"
}

// create a function that retunrs a card object and recives 3 parameters
const createCard = (color, number, type) => {
    return {    
        'color': color,
        'number': number,
        'type': type
    }
}

const card = []

const card1 = createCard(colors.red, numbers[5], cardTypes.diamonds)
const card2 = createCard(colors.red, numbers[2], cardTypes.clubs)
const card3 = createCard(colors.black, numbers.J, cardTypes.diamonds)

const deck = [card1, card2, card3]


for (let i=0; i < Object.keys(cardTypes).length; i++ ) {
    var currentType = Object.keys(cardTypes)[i]
    for (let j=0; j < Object.keys(numbers).length; j++ ) {
        var currentNumber = Object.keys(numbers)[j]
        for (let k=0; k < Object.keys(colors).length; k++ ) {
            var currentColor = Object.keys(colors)[k]
            switch(currentType) {
                case "clubs (♣)":
                    card = createCard(currentType, currentNumber, colors.black)
                break
                case "hearts (♥)":
                    card = createCard(currentType, currentNumber, colors.red)
                break
                case "diamonds (♦)":
                    card = createCard(currentType, currentNumber, colors.black)
                break
                case "spades (♠)":
                    card = createCard(currentType, currentNumber, colors.red)
                break

            }

            console.log ("card", card)
            console.log(i+j+k)
        }
    }
}




// console.log("deck:", deck);
// console.log('keys:', Object.keys(cardTypes))
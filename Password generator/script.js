let number = document.querySelector('#numbers')
let getNumber = document.querySelector('#get_number')

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getNumberRandom() {
    let resultNumber = ''
    const numberLength = 4
    for (let i = 0; i < numberLength; i++) {
        resultNumber += getRandomInt(0, 9)
    }
    number.textContent = resultNumber
}
getNumberRandom()

getNumber.addEventListener('click', getNumberRandom)
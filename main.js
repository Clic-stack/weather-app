const code = {
    banana: [2, 4, 5]
}

const icon = {
    banana: '🍌' 
}

const fruitId = 4

console.log(icon[code.banana.includes(fruitId) ? 'banana' : 'default'])
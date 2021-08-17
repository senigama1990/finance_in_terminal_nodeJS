const fs =  require('fs')

let income = fs.readFileSync('./dataBase/income.json', 'UTF-8')
let expence = fs.readFileSync('./dataBase/expence.json', 'UTF-8')

income = JSON.parse(income)
expence = JSON.parse(expence)

let totalIncome = income.reduce((acc, el)=>acc + +el.cost, 0)
let totalExpence = expence.reduce((acc, el)=>acc + +el.cost, 0)
let total = totalIncome - totalExpence
let obj = { totalIncome, totalExpence, total}

console.table(income)
console.table(expence)
console.table([obj])
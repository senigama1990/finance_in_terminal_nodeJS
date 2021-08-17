const fs = require('fs')
const [, , name, cost] = process.argv

fs.readFile('./dataBase/expence.json', (err, data) => {
    let arr = []
    let daromad = {}
    if (!data.toString()) {
        daromad = {
            id: 1,
            name,
            cost,
            date: new Date()
        }
        arr.push(daromad)
    } else {
        arr = JSON.parse(data.toString())
        daromad = {
            id: arr[arr.length - 1].id + 1,
            name,
            cost,
            date: new Date()
        }
    }
    arr.push(daromad)
    fs.writeFile('./dataBase/expence.json', JSON.stringify(arr, null, 4), (err) => err)

    console.log('Data has successfully added...');

})
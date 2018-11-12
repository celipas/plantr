const {
    db,
    Vegetable,
    Plot,
    Gardener
} = require('./models')
// const carrot = Vegetable.create()
// console.log('carrot!!!', carrot.name)






db.sync({
        force: false
    })
    .then(() => {
        console.log('Database synced!')
    })
    .catch(err => {
        console.log('Something went wrong')
        console.log(err)
    })
    .finally(() => {
        db.close()

    })

Vegetable.create({
        name: 'tomato',
        color: 'red',
        planted_on: '2018-11-12'
    })
    .then((owner) => {
        return Gardener.create({
            name: 'fred',
            age: 50,
            favoriteVegetableId: owner.id
        })
    })
Vegetable.create({
        name: 'carrot',
        color: 'orange',
        planted_on: '2018-11-12'
    })
    .then((owner) => {
        return Gardener.create({
            name: 'doug',
            age: 43,
            favoriteVegetableId: owner.id
        })
    })
const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/plantr')

const Gardener = db.define('gardners', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

})

const Plot = db.define('plots', {
    size: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    shaded: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
})

const Vegetable = db.define('vegetables', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    color: {
        type: Sequelize.STRING,
        allowNull: false
    },
    planted_on: {
        type: Sequelize.DATE,
        allowNull: false
    }
})


Plot.belongsTo(Gardener)
Gardener.hasOne(Plot)

Vegetable.belongsToMany(Plot, {
    through: 'vegetable_plot'
})
Plot.belongsToMany(Vegetable, {
    through: 'vegetable_plot'
})

Gardener.belongsTo(Vegetable, {
    as: 'favoriteVegetable',
    allowNull: false
})



module.exports = {
    db,
    Vegetable,
    Plot,
    Gardener
}
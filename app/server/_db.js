'use strict'

const Sequelize = require('sequelize')
const databaseURI = 'postgres://localhost:5432/iso'

export default new Sequelize(databaseURI, {
    define: {
        timestamps: false,
        underscored: true
    },
    logging: false
})

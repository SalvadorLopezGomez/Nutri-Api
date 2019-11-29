'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Armar extends Model {
    alimentos () {
        return this.hasMany('App/Models/Alimento')
    }

    dietas () {
        return this.hasMany('App/Models/Dieta')
    }
}

module.exports = Armar
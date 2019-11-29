'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Alimento extends Model {
    armar () {
        return this.hasMany('App/Models/Armar')
    }
}

module.exports = Alimento

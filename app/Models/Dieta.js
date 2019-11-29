'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Dieta extends Model {
    medico () {
        return this.hasOne('App/Models/Medico')
    }

    horarios () {
        return this.hasMany('App/Models/Horario')
    }

    armar () {
        return this.hasMany('App/Models/Armar')
    }
}

module.exports = Dieta

'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Medico extends Model {
    usersM () {
        return this.hasOne('App/Models/User')
    }

    dietasM () {
        return this.hasMany('App/Models/Dieta')
    }

    pacientes () {
        return this.hasMany('App/Models/Paciente')
    }
}

module.exports = Medico

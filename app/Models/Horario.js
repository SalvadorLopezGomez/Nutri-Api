'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Horario extends Model {
    dietas () {
        return this.hasOne('App/Models/Dieta')
    }

    paciente () {
        return this.hasOne('App/Models/Paciente')
    }
}

module.exports = Horario

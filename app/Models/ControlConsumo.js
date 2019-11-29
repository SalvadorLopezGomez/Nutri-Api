'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ControlConsumo extends Model {
    paciente () {
        return this.hasOne('App/Models/Paciente')
    }
}

module.exports = ControlConsumo

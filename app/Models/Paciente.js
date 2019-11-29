'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Paciente extends Model {

    userP () {
        return this.hasOne('App/Models/User')
    }

    medicos () {
        return this.hasOne('App/Models/Medico')
    }

    horarioP () {
        return this.hasMany('App/Models/Horario')
    }

    control_consumo_historial () {
        return this.hasMany('App/Models/ControlConsumo')
    }
}

module.exports = Paciente

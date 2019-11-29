'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ControlConsumoSchema extends Schema {
  up () {
    this.create('control_consumos', (table) => {
      table.increments()
      table.integer('id_paciente').unsigned().references('id').inTable('pacientes')
      table.integer('id_horario').notNullable()
      table.string('nombre_dieta_actual', 200).notNullable()
      table.string('fecha_inicio', 200).notNullable()
      table.float('fibra_total', 80).notNullable()
      table.float('energia_kcal_total', 80).notNullable()
      table.float('proteinas_totales_total', 80).notNullable()
      table.float('grasas_totales_total', 80).notNullable()
      table.float('calcio_total', 80).notNullable()
      table.float('fosforo_total', 80).notNullable()
      table.float('hierro_total', 80).notNullable()
      table.float('sodio_total', 80).notNullable()
      table.float('potasio_total', 80).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('control_consumos')
  }
}

module.exports = ControlConsumoSchema

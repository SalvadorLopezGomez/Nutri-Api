'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HorarioSchema extends Schema {
  up () {
    this.create('horarios', (table) => {
      table.increments()
      table.integer('id_dieta').unsigned().references('id').inTable('dietas')
      table.integer('id_paciente').unsigned().references('id').inTable('pacientes')
      table.string('hora_comsumo', 50).notNullable()
      table.string('fecha_inicio', 200).notNullable()
      table.string('fecha_final', 200).notNullable()
      table.integer('status', 2).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('horarios')
  }
}

module.exports = HorarioSchema

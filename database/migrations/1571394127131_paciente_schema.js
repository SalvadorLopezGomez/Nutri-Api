'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PacienteSchema extends Schema {
  up () {
    this.create('pacientes', (table) => {
      table.increments()
      table.integer('id_usuario').unsigned().references('id').inTable('users')
      table.integer('id_medico').unsigned().references('id').inTable('medicos')
      table.string('typo_calculo', 50).notNullable()
      table.float('peso', 10).notNullable()
      table.float('altura', 10).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('pacientes')
  }
}

module.exports = PacienteSchema

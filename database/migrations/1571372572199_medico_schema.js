'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MedicoSchema extends Schema {
  up () {
    this.create('medicos', (table) => {
      table.increments()
      table.integer('id_usuario').unsigned().references('id').inTable('users')
      table.string('direccion_consultorio', 250).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('medicos')
  }
}

module.exports = MedicoSchema

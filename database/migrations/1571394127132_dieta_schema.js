'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DietaSchema extends Schema {
  up () {
    this.create('dietas', (table) => {
      table.increments()
      table.integer('id_medico').unsigned().references('id').inTable('medicos')
      table.string('nombre', 250).notNullable()
      table.integer('status',2).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('dietas')
  }
}

module.exports = DietaSchema

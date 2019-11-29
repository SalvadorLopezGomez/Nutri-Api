'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ControlConsumoSchema extends Schema {
  up () {
    this.create('armars', (table) => {
      table.increments()
      table.integer('id_alimento').unsigned().references('id').inTable('alimentos')
      table.integer('id_dieta').unsigned().references('id').inTable('dietas')
      table.timestamps()
    })
  }

  down () {
    this.drop('armars')
  }
}

module.exports = ControlConsumoSchema

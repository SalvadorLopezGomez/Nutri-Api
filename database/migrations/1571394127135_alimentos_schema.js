'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlimentosSchema extends Schema {
  up () {
    this.create('alimentos', (table) => {
      table.increments()
      table.string('nombre', 200).notNullable()
      table.float('fibra', 80).notNullable()
      table.float('energia_kcal', 80).notNullable()
      table.float('proteinas_totales', 80).notNullable()
      table.float('grasas_totales', 80).notNullable()
      table.float('calcio', 80).notNullable()
      table.float('fosforo', 80).notNullable()
      table.float('hierro', 80).notNullable()
      table.float('sodio', 80).notNullable()
      table.float('potasio', 80).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('alimentos')
  }
}

module.exports = AlimentosSchema

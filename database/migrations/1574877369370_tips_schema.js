'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TipsSchema extends Schema {
  up () {
    this.create('tips', (table) => {
      table.increments()
      table.string('tips', 250).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tips')
  }
}

module.exports = TipsSchema

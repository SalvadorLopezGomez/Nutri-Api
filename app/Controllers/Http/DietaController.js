'use strict'
const Dietas = use('App/Models/Dietas');
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with dietas
 */
class DietaController {
  /**
   * Show a list of all dietas.
   * GET dietas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const dietas =  await Database.select('*').from('dietas')
    return dietas;
  }

  /**
   * Render a form to be used for creating a new dieta.
   * GET dietas/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    const { id_medico, nombre, status } = request.all();
    const dietas = await Dietas.create({
      id_medico, nombre, status
    });
    return dietas;
  }

  /**
   * Create/save a new dieta.
   * POST dietas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single dieta.
   * GET dietas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const dietas = Dietas.find(params.id);
    return dietas;
  }

  /**
   * Render a form to update an existing dieta.
   * GET dietas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update dieta details.
   * PUT or PATCH dietas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response, auth }) {
    const user = await auth.getUser();
    const admi = user.rol;
    if(admi == 1){
      const { id_medico, nombre, status } = request.all();
      const dietas = Dietas.find(params.id);

      dietas.id_medico = id_medico;
      dietas.nombre = nombre;
      dietas.status = status;

      await dietas.save();
      return dietas;
    }
  }

  /**
   * Delete a dieta with id.
   * DELETE dietas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, auth, response }) {
    const user = await auth.getUser();
    const admi = user.rol;
    if(admi == 1){
      const dietas = await Dietas.find(params.id);
      await dietas.delete()
      return response.json({dietas, message: 'Dieta deleted!'})
    }
  }
}

module.exports = DietaController

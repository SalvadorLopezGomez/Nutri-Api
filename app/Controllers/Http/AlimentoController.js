'use strict'

const Alimento = use('App/Models/Alimento');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with alimentos
 */
class AlimentoController {
  /**
   * Show a list of all alimentos.
   * GET alimentos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const alimentos =  await Database.select('*').from('alimentos')
    return alimentos;
  }

  /**
   * Render a form to be used for creating a new alimento.
   * GET alimentos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    const { nombre, 
            fibra, 
            energia_kcal, 
            proteinas_totales, 
            grasas_totales, 
            calcio, 
            fosforo, 
            hierro, 
            sodio, 
            potasio } = request.all();
    
    const alimento = await Alimento.create({
      nombre, 
      fibra, 
      energia_kcal, 
      proteinas_totales, 
      grasas_totales, 
      calcio, 
      fosforo, 
      hierro, 
      sodio, 
      potasio
    });

    return alimento;
  }

  /**
   * Create/save a new alimento.
   * POST alimentos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single alimento.
   * GET alimentos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const alimentos = Alimento.find(params.id);
    return alimentos;
  }

  /**
   * Render a form to update an existing alimento.
   * GET alimentos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update alimento details.
   * PUT or PATCH alimentos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const { 
      nombre, 
      fibra, 
      energia_kcal, 
      proteinas_totales, 
      grasas_totales, 
      calcio, 
      fosforo, 
      hierro, 
      sodio, 
      potasio } = request.all();

      const alimentos = Alimento.find(params.id);

      alimentos.nombre = nombre;
      alimentos.fibra = fibra;
      alimentos.energia_kcal = energia_kcal;
      alimentos.proteinas_totales = proteinas_totales;
      alimentos.grasas_totales = grasas_totales;
      alimentos.calcio = calcio;
      alimentos.fosforo = fosforo;
      alimentos.hierro = hierro;
      alimentos.sodio = sodio;
      alimentos.potasio = potasio;

      await alimentos.save();
      return alimentos;
  }

  /**
   * Delete a alimento with id.
   * DELETE alimentos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, response, auth }) {
    const user = await auth.getUser();
    const admi = user.rol;
    if(admi == 1){
      const alimentos = await Alimento.find(params.id);
      await alimentos.delete()
      return response.json({alimentos, message: 'Alimento deleted!'})
    }
  }
}

module.exports = AlimentoController

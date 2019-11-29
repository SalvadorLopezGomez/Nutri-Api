'use strict'
const User = use('App/Models/User');
const Database = use('Database');
const Paciente = use('App/Models/Paciente');
const Medico = use('App/Models/Medico');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with users
 */
class UserController {

  async login ({ request, auth }) {
    const {email, password} = request.all();
    const token = await auth.attempt(email, password)
    return token;
  }

  /**
   * Show a list of all users.
   * GET users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const users =  await Database.select('*').from('users')
    return users;
  }

  /**
   * Render a form to be used for creating a new user.
   * GET users/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new user.
   * POST users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  
  async registerMedico ({ request }) {
    const { nombre, apellido, email, password, direccion_consultorio} = request.all();
    const user = await User.create({
      nombre,
      apellido,
      email,
      password,
      rol:1,
    });

    const users = await User.find(user.id)
    const id_ = users.id;

    if(id_ != null){
      await Medico.create({
        direccion_consultorio:direccion_consultorio,
        id_usuario:id_,
      })
      return this.login(...arguments);
    }
  };

  async registerPaciente ({ request }) {
    const { nombre, apellido, email, password, typo_calculo, peso, altura, id_medico } = request.all();
    const user = await User.create({
      nombre,
      apellido,
      email,
      password,
      rol:2,
    });

    const users = await User.find(user.id)
    const id_ = users.id;

    const medicos = await Medico.find(id_medico)
    const id_m = medicos.id

    if(id_ != null){
      if(id_m != null){
        await Paciente.create({
          typo_calculo,
          peso, 
          altura,
          id_usuario:id_,
          id_medico:id_m,
        })
        return this.login(...arguments);
      }
    }
  };

  /**
   * Display a single user.
   * GET users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const users = User.find(params.id);
    return users;
  }

  async showMedicos ({ params }) {
    const medicos =  await Database.select('*').from('users').where('rol', 1)
    return medicos;
  }

  async showPacientes ({ params }) {
    const pacientes =  await Database.select('*').from('users').where('rol', 2)
    return pacientes;
  }

  /**
   * Render a form to update an existing user.
   * GET users/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update user details.
   * PUT or PATCH users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const { nombre, apellido, email, password, rol} = request.all();
    const user = await User.find(params.id);

    user.nombre = nombre;
    user.apellido = apellido;
    user.email = email;
    user.password = password;
    user.rol = rol;

    await user.save();

    return user;
  }

  /**
   * Delete a user with id.
   * DELETE users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, response, auth }) {
    const user = await auth.getUser();
    const admi = user.rol;
    if(admi == 1){
      const user = await User.find(params.id)
      await user.delete()
      return response.json({user, message: 'User deleted!'})
    }
  }
}

module.exports = UserController

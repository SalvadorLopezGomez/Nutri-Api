'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
/*Usuario*/
Route.post('api/Register/medico','UserController.registerMedico')
Route.post('api/Register/paciente','UserController.registerPaciente')
Route.post('api/Login','UserController.login')
Route.get('api/getAllusers','UserController.index')
Route.get('api/getuser/:id','UserController.show')
Route.get('api/getMedicos','UserController.showMedicos')
Route.get('api/getPacientes','UserController.showPacientes')
Route.put('api/updateuser/:id','UserController.update')
Route.delete('api/deleteuser/:id','UserController.destroy')
/**Alimentos */
Route.post('api/alimentos','AlimentoController.create')
Route.get('api/getAlimentos','AlimentoController.index')
Route.get('api/getAlimento/:id','AlimentoController.show')
Route.put('api/updateAlimento/:id','AlimentoController.update')
Route.delete('api/deleteAlimento/:id','AlimentoController.delete')
/** */
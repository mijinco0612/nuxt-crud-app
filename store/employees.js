import axios from 'axios'

export const state = () => ({
  employees:[{id:1,name:'defaultName1',role:'defaultRole'},{id:2,name:'defaultName2',role:'defaultRole'},]
})

export const mutations = {
  updateEmployees : function(state, payload) {
    state.employees = payload
  }
}

export const actions = {

  fetchEmployeesAction : async function (context) {

    axios.get('/api/employees').then((response) => {
      context.commit('updateEmployees', response.data)
      return true;
    }, (err) => {
      console.log(err)
      return false;
    })
  },

  deleteEmployeesAction : async function ({ commit, dispatch },employeesId) {

    console.log(employeesId);
    const url = '/api/employees/' + employeesId
    console.log(url);
    axios.delete(url).then((response) => {
      console.log(response)
      dispatch('fetchEmployeesAction')
      return true;
    }, (err) => {
      console.log(err)
      return false;
    })
  },

  createEmployeesAction : async function ({ commit, dispatch },createEmployee) {

    console.log(createEmployee);
    const url = '/api/employees/'
    console.log(url);
    axios.post(url,createEmployee).then((response) => {
      dispatch('fetchEmployeesAction')
      console.log(response)
      return true;
    }, (err) => {
      console.log(err)
      return false;
    })
  },

  updateEmployeesAction : async function ({ commit, dispatch },updateEmployee) {
    console.log(updateEmployee);
    const url = '/api/employees/' + updateEmployee.id
    console.log(url);

    const updateEmployeeBody = {name:updateEmployee.name,role:updateEmployee.role}

    axios.put(url,updateEmployeeBody).then((response) => {
      console.log(response)
      dispatch('fetchEmployeesAction')
      return true;
    }, (err) => {
      console.log(err)
      return false;
    })
  }
}

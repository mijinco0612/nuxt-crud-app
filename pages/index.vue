<template>
  <div class="container">
    <div>

      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>Create New Employee</span>
          <el-button  style="float: right;" type="primary" v-on:click="$store.dispatch('employees/createEmployeesAction',createEmployee)">create</el-button>
        </div>
        <div>
          <el-form  class="demo-form-inline">
            <el-form-item label="employee name">
              <el-input type="text" v-model="createEmployee.name"></el-input>
            </el-form-item>
            <el-form-item label="employee role">
              <el-input type="text" v-model="createEmployee.role"></el-input>
            </el-form-item>
            <el-form-item >

            </el-form-item>
          </el-form>
        </div>
      </el-card>


      <el-table
        :data="employees"
        style="width: 80%;margin-right: auto;margin-left: auto">

        <el-table-column
          label="Name">
          <template slot-scope="scope">

              <div slot="reference" class="name-wrapper">
                <el-input type="text" v-model="scope.row.name"></el-input>
              </div>

          </template>
        </el-table-column>

        <el-table-column
          label="Role">
          <template slot-scope="scope">
            <el-input type="text" v-model="scope.row.role"></el-input>
          </template>
        </el-table-column>


        <el-table-column
          label="Operations">
          <template slot-scope="scope">
            <el-button
              size="mini"
              v-on:click="update(scope.row)">
              Edit
            </el-button>

            <el-button
              size="mini"
              type="danger"
              v-on:click="$store.dispatch('employees/deleteEmployeesAction',scope.row.id)">
              Delete
            </el-button>
          </template>
        </el-table-column>
      </el-table>

    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      createEmployee : {name : '' ,role:'' }
    }
  },
  mounted() {
    this.$store.dispatch('employees/fetchEmployeesAction')
  },
  computed: {
      employees(){
        return  this.$store.state.employees.employees;
      }
    },
  methods: {
    update(employee) {
      this.$notify({
        title: 'Update',
        message: '更新しました',
        type: 'success',
        offset: 100,
        duration:1500
      })
      this.$store.dispatch('employees/updateEmployeesAction',employee)
    }
  }
}
</script>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
  }
</style>

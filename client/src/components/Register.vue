<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan">
          <v-toolbar-title>Sign Up</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <form name="budget-app-form" autocomplete="off">
            <v-text-field label="Email" v-model="email"></v-text-field>
            <br>
            <v-text-field label="Password" type="password" v-model="password" autocomplete="new-password"></v-text-field>
          </form>
          <br>
          <div class="danger-alert" v-html="error"></div>
          <br>
          <v-btn dark class="cyan" @click="register">Sign Up</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
</style>

<template>
  <div>
    <h1>Register</h1>
      <input type="email" name="email" v-model="email" placeholder="Enter your email address" />
      <br>
      <input type="password" name="password" v-model="password" placeholder="Enter your password" />
      <br>
      <button>Register</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}

</script>
<style scoped>
</style>

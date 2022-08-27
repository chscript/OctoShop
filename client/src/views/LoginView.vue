<template>
  <!-- <div class="page_box"> -->
    <div class="loginform">
      <LoginForm/>
    </div>
  <!-- </div> -->
</template>

<script>
// @ is an alias to /src
import LoginForm from '@/components/LoginForm.vue'
export default {
  name: 'LoginView',
  components: {
    LoginForm
  }
}
</script>

<style>

.loginform {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

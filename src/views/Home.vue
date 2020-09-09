<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Label />
  </div>
</template>

<script>
// @ is an alias to /src
import Label from '@/components/Label.vue'

export default {
  name: 'Home',
  components: {
    Label
  }
}
</script>

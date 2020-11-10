<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img>
    <li>
      <ul> name:{{name}} </ul>
      <ul>University: {{ University}} </ul>
      <ul>GitHub</ul>
      <ul>Qiita</ul>
      <ul>Twitter</ul>
    </li>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: 'About',
      name: '増井悠太',
      University: '京都大学　工学部　地球工学科'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

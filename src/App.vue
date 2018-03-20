<template>
  <div id="app">
    <div class="container">
      <div class="container-item"><router-view/></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
input {
  outline: none;
}

body{
  background-color: #fff;

}

.container{
  height: 96vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.container-item{
  text-align: center;
  width: 75vw;
  font-family: 'Roboto';
}

</style>

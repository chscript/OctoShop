<template>
  <n-message-provider>
    <router-view />
  </n-message-provider>
</template>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

body {
  background-color: #EBEEF5;
}

ul {
  display: flex;
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>

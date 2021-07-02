<template>
  <div class="bottom-footer">
    web development by <a href="https://github.com/Darric-Lu">Darric Lu</a>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/reset.scss";
@import "../assets/scss/helper.scss";
@import "../assets/scss/main.scss";
.bottom-footer {
  height: 60px;
  line-height: 60px;
  color: $subColor;
  background-color: $mainColor;
}
</style> 

<script>
export default {
  name: "pagFooter",
};
</script>
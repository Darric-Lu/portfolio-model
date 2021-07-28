<template>
  <div class="bottom-footer">
    Web development by <a href="https://github.com/Darric-Lu">Darric Lu</a> |
    <a href="mailto:darric.lu@gmail.com">Darric.lu@gmail.com</a>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/reset.scss";
@import "../assets/scss/helper.scss";
@import "../assets/scss/main.scss";
.bottom-footer {
  height: 100px;
  line-height: 100px;
  color: $subColor;
  background-color: $mainColor;
  font-size: $mainFontSize;
  a {
    font-weight: 600;
    color: $subColor;
  }
}
</style> 

<script>
export default {
  name: "pagFooter",
};
</script>
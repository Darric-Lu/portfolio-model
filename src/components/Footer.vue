<template>
  <div class="bottom-footer pt-2">
    Web development by
    <p>
      <a href="https://github.com/Darric-Lu" class="mt-5">Darric Lu</a>
      |
      <a href="mailto:darric.lu@gmail.com" class="ps-2">darric.lu@gmail.com</a>
    </p>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/reset.scss";
@import "../assets/scss/helper.scss";
@import "../assets/scss/main.scss";

.bottom-footer {
  height: 120px;
  line-height: 60px;
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
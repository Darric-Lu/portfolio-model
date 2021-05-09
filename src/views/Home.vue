<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <div class="video-wrapper">
      <video
        class="video"
        loop="true"
        autoplay="autoplay"
        muted="true"
        preload="”auto”"
      >
        <source src="../video/home_video.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.video-wrapper {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  background-color: #000000;
  .video {
    grid-column: 2/3;
    width: 90vw;
    height: auto;
  }
}
</style>
<script>
export default {
  name: "Home",
};
</script>

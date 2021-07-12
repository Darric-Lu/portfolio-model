<template>
  <div class="video-wrapper">
    <video
      class="video col-10"
      loop="true"
      autoplay="autoplay"
      muted="true"
      preload="auto"
    >
      <source src="../video/home_video.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<style lang="scss" scoped>
.video-wrapper {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  background-color: #000000;

  .video {
    grid-column: 2/3;
    width: 100vw;
    max-width: 1080px;
    height: auto;
  }
}
</style>

<script>
export default {
  name: "home-video",
};
</script>
<template>
  <div class="work-detail_wrapper">
    <div class="not-Found" v-if="workdId > 6">
      <h3>無資料</h3>
    </div>
    <div class="model" v-else>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <iframe
              src="https://my.spline.design/red12-9d898b078fa146294a5619bddbe70f22/"
              frameborder="1"
              width="100%"
              height="100%"
            ></iframe>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <div class="info_wrapper">
      <div class="info">
        <div class="left col-10 col-md-6">
          <div class="info-name col-12">iphone 12 Red</div>
          <div class="info-size col-12">6.1"</div>
        </div>
        <div class="right col-10 col-md-6">
          <div class="info-concept">
            <div class="info-concept-title">Design Concept</div>
            <div class="info-concept-content">
              oremipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              aperiam labore porro vero voluptatum ipsum voluptas architecto
              fuga sed quis eos dolorem, maiores at dolor assumenda facilis?
              Quos, errorea.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./../assets/scss/main.scss";
iframe,
.not-Found {
  height: 80vw;
  max-height: 900px;
}
.not-Found {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}
.info {
  margin: 32px auto;
  display: flex;
  flex-flow: row wrap;
  max-width: 1400px;

  .left {
    margin: 0 auto;
  }
  .right {
    margin: 0 auto;
  }
  &-name,
  &-size {
    font-size: 1.8 * $mainFontSize;
    margin-bottom: 16px;
    text-align: left;
    padding-left: 10vw;
  }
  &-concept {
    &-title {
      font-size: 1.8 * $mainFontSize;
      margin-bottom: 16px;
      text-align: left;
      padding-left: 10vw;
    }
    &-content {
      font-size: 1 * $mainFontSize;
      text-align: left;
      margin: 0 10vw 16px 10vw;
    }
  }
}
</style>

<script>
export default {
  name: "WorkDetail",
  data() {
    return {
      workdId: "",
    };
  },
  created() {
    const { id: workdId } = this.$route.params;
    this.fetchWorkId(workdId);
  },
  methods: {
    fetchWorkId(id) {
      this.workdId = id;
    },
  },
};
</script>
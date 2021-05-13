<template>
  <!-- <div class="top-works_wrapper"> -->
  <div class="top-works">
    <div
      class="works col-6 col-md-4 col-xl-2"
      v-for="work in topWorks"
      :key="work.id"
    >
      <router-link to="/">
        <div class="img_wrapper">
          <img class="img img-fluid" :src="work.picture" :alt="work.title" />
        </div>
      </router-link>
      <div class="work-title">
        <h3 class="title">{{ work.title }}</h3>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>


<style lang="scss" scoped>
.top-works {
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
  width: 90vw;

  .works {
    // border: 2px red solid;
    // position: relative;
    padding-top: 15px;
    padding-bottom: 15px;

    .img_wrapper {
      // width: 100%;
      // height: 100%;
      border: 1px #e0e0e0 solid;
      border-radius: 16px;
      -webkit-box-shadow: 0px 1px 5px 0px rgba(87, 87, 87, 0.6);
      -moz-box-shadow: 0px 1px 5px 0px rgba(87, 87, 87, 0.6);
      box-shadow: 0px 1px 5px 0px rgba(87, 87, 87, 0.6);
      overflow: hidden;

      // &::after {
      // content: "";
      // display: block;
      // padding-top: 112%;
      // position: absolute;
      // background-color: rgb(146, 111, 111);
      // }
      .img {
        max-width: 100%;
        max-height: 100%;
        // object-fit: cover;
        // position: absolute;
        // top: 50%;
        // left: 50%;
        // transform: translate(-50%, -50%);
      }
    }
    .work-title {
      display: flex;
      flex-flow: row;

      h3 {
        margin: 4px 0;
        font-size: 1.6rem;
      }
    }
  }
}
</style>

<script>
export default {
  name: "topWorks",
  props: {
    topWorks: {
      type: Array,
      required: true,
    },
  },
};
</script>
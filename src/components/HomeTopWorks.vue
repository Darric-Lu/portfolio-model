<template>
  <div class="top-works_wrapper">
    <div class="top-works">
      <div
        class="work col-6 col-md-4 col-xxl-2"
        v-for="work in topWorks"
        :key="work.id"
        data-aos="fade-up"
      >
        <router-link :to="{ path: `/work-detail/${work.id}` }">
          <div class="img_wrapper">
            <img class="img" :src="work.picture" :alt="work.title" />
          </div>
        </router-link>
        <div class="work-title">
          <h5 class="title">{{ work.title }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.top-works {
  display: flex;
  flex-flow: row wrap;
  margin: 32px auto;
  width: 90vw;

  .work {
    padding: 8px;

    .img_wrapper {
      border-radius: 8px;
      -webkit-box-shadow: 0px 1px 5px 0px rgba(87, 87, 87, 0.6);
      -moz-box-shadow: 0px 1px 5px 0px rgba(87, 87, 87, 0.6);
      box-shadow: 0px 1px 5px 0px rgba(87, 87, 87, 0.6);
      overflow: hidden;
      display: flex;
      justify-content: center;

      .img {
        object-fit: cover;
        width: 100%;
      }

      &:hover {
        cursor: pointer;
        -webkit-transform: scale(1.05);
        -ms-transform: scale(1.05);
        transform: scale(1.05);
      }
    }

    .work-title {
      margin: 8px 0 0 8px;
      text-align: left;

      .title {
        margin: 0;
      }
    }
  }
}
</style>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  name: "home-top-Works",
  props: {
    topWorks: {
      type: Array,
      required: true,
    },
  },
  created() {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  },
};
</script>
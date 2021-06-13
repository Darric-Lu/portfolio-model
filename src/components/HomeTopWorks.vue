<template>
  <div class="top-works_wrapper">
    <div class="top-works">
      <div
        class="work col-12 col-md-6 col-xxl-4"
        v-for="work in topWorks"
        :key="work.id"
        data-aos="fade-up"
      >
        <router-link :to="{ path: `/work-detail/${work.id}` }">
          <div class="img_wrapper">
            <img class="img" :src="work.picture" :alt="work.title" />
          </div>
        </router-link>
        <!-- <div class="work-title">
          <h3 class="title">{{ work.title }}</h3>
        </div> -->
      </div>
    </div>
    <router-link to="/works">
      <div class="more-works">
        <div class="btn">
          More Works
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
      </div>
    </router-link>
  </div>
</template>


<style lang="scss" scoped>
.top-works {
  display: flex;
  flex-flow: row wrap;
  margin: 32px auto;
  width: 90vw;

  .work {
    padding: 12px;

    .img_wrapper {
      border: 1px #e0e0e0 solid;
      border-radius: 8px;
      -webkit-box-shadow: 0px 1px 5px 0px rgba(87, 87, 87, 0.6);
      -moz-box-shadow: 0px 1px 5px 0px rgba(87, 87, 87, 0.6);
      box-shadow: 0px 1px 5px 0px rgba(87, 87, 87, 0.6);
      overflow: hidden;
      display: flex;
      justify-content: center;

      .img {
        object-fit: cover;
        width: 110%;
      }

      &:hover {
        cursor: pointer;
        opacity: 0.5;
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
.more-works {
  .btn {
    width: 160px;
    height: 50px;
    line-height: 50px;
    border-radius: 30px;
    background-color: #000000;
    color: #ffffff;
    font-size: 1.2em;
    padding: 0 0 0 15px;
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
      duration: 2000,
      offset: 200,
    });
  },
};
</script>
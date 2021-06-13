<template>
  <div class="works-area">
    <div class="works-wrapper">
      <div class="work" data-aos="fade-up" v-for="work in works" :key="work.id">
        <picture>
          <img class="work-img" :src="work.picture" :alt="work.title" />
        </picture>
      </div>
    </div>
    <div class="more-works" data-aos="fade-up">
      <router-link to="/works">
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
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.works-area {
  background-color: $subColor;
  padding: 36px 0 48px 0;
}
.works-wrapper {
  display: grid;
  width: 90vw;
  padding: 16px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 40px;

  .work {
    border-radius: 8px;
    background-color: #ffffff;
    -webkit-box-shadow: 0px 1px 5px 0px rgba(87, 87, 87, 0.6);
    -moz-box-shadow: 0px 1px 5px 0px rgba(87, 87, 87, 0.6);
    box-shadow: 0px 1px 5px 0px rgba(87, 87, 87, 0.6);
    // border: 20px solid transparent;
    overflow: hidden;

    &-img {
      object-fit: cover;
      width: 100%;

      &:hover {
        cursor: pointer;
        // border: 0.1px solid transparent;
        -webkit-transform: scale(1.05);
        -ms-transform: scale(1.05);
        transform: scale(1.05);
      }
    }
  }
}
.more-works {
  margin: 32px;
  position: relative;
  .btn {
    position: absolute;
    top: 15px;
    right: 50%;
    transform: translate(50%, 0%);
    width: 220px;
    height: 60px;
    line-height: 60px;
    border-radius: 30px;
    background-color: #000000;
    color: #ffffff;
    font-size: 1.4em;
    padding: 0 0 0 15px;
  }
}
</style>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  name: "HomeWorks",
  props: {
    works: {
      type: Array,
      require: true,
    },
  },
  created() {
    AOS.init({
      duration: 2000,
      offset: 300,
    });
  },
};
</script>
<template>
  <div class="works-area">
    <div class="works-wrarpper">
      <div class="work" data-aos="fade-up" v-for="work in works" :key="work.id">
        <picture>
          <img class="work-img" :src="work.picture" :alt="work.title" />
        </picture>
      </div>
    </div>
    <!-- Button trigger modal -->
    <!-- <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Launch demo modal
    </button> -->

    <!-- Modal -->
    <!-- <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          </div>
        </div>
      </div>
    </div>-->
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.works-area {
  background-color: $subColor;
  padding: 36px 0;
}
.works-wrarpper {
  width: 90vw;
  margin: 0 auto;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 40px;
  background-color: $subColor;

  .work {
    min-width: 300px;
    height: 300px; //aso 後設定
    background-color: #ffffff;
    -webkit-box-shadow: 0px 1px 3px 2px rgba(87, 87, 87, 0.2);
    -moz-box-shadow: 0px 1px 3px 2px rgba(87, 87, 87, 0.2);
    box-shadow: 0px 1px 3px 2px rgba(87, 87, 87, 0.2);
    overflow: hidden;

    &-img {
      object-fit: cover;
      width: 100%;
    }
  }
}
</style>
<script>
import { works } from "./../data/works";
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  name: "Works",
  data() {
    return {
      works: [],
    };
  },
  created() {
    this.fecthWorksData();
    AOS.init({
      duration: 1200,
      offset: 120,
    });
  },
  methods: {
    fecthWorksData() {
      this.works = [...works];
    },
  },
};
</script>
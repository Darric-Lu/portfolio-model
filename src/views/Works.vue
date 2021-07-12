<template>
  <div class="works-area">
    <div class="works-wrapper">
      <div
        class="work"
        data-aos="fade-up"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        v-for="work in works"
        :key="work.id"
        @click="modalImageChange(work.id)"
      >
        <picture>
          <img class="work-img" :src="work.picture" :alt="work.title" />
        </picture>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-body">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div class="modal-image-wrapper">
              <picture>
                <img
                  class="modal-image-work"
                  :src="modal.image"
                  :alt="modal.number"
                />
              </picture>
            </div>
            <div class="right-btn" @click="modalImageChange(modal.next)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-caret-right"
                viewBox="0 0 16 16"
              >
                <path
                  d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"
                />
              </svg>
            </div>
            <div class="left-btn" @click="modalImageChange(modal.previous)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-caret-left"
                viewBox="0 0 16 16"
              >
                <path
                  d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.works-area {
  background-color: $subColor;
  padding: 36px 0;
}
.works-wrapper {
  width: 90vw;
  margin: 0 auto;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 8px;
  background-color: $subColor;

  .work {
    // min-width: 300px;
    // height: 300px; //aso 後設定
    border-radius: 8px;
    background-color: #ffffff;
    -webkit-box-shadow: 0px 1px 3px 2px rgba(87, 87, 87, 0.2);
    -moz-box-shadow: 0px 1px 3px 2px rgba(87, 87, 87, 0.2);
    box-shadow: 0px 1px 3px 2px rgba(87, 87, 87, 0.2);
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
.modal {
  &-body {
    position: relative;

    .left-btn,
    .right-btn {
      position: absolute;
      top: 50%;
      line-height: 45px;
      width: 48px;
      height: 48px;
      &:hover {
        width: 48px;
        height: 48px;
        background-color: $subColor;
        border-radius: 50%;
      }
    }
    .left-btn {
      left: 5%;
    }
    .right-btn {
      right: 5%;
    }
  }
  &-image {
    &-wrapper {
      // height: 90vh;
      overflow: hidden;
    }
    &-work {
      object-fit: cover;
      width: 100%;
    }
  }
}
.btn-close {
  position: absolute;
  right: 15px;
}
@media screen and (min-width: 768px) {
  .works-wrapper {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
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
      modal: {
        number: "",
        image: "",
        next: "",
        previous: "",
      },
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
      this.works = works;
      for (let i = 0; i < this.works.length; i++) {
        this.works[i].id = i + 1;
      }
    },
    modalImageChange(workId) {
      this.modal.number = "";
      this.modal.image = "";
      this.works.map((work) => {
        if (work.id === workId) {
          this.modal.number = work.id;
          this.modal.image = work.picture;
        }
      });
      this.changeNext(workId);
      this.changePrevious(workId);
    },
    changeNext(workId) {
      if (Number(workId) === this.works.length) {
        return (this.modal.next = 1);
      }
      this.modal.next = Number(workId) + 1;
    },
    changePrevious(workId) {
      if (Number(workId) - 1 === 0) {
        return (this.modal.previous = this.works.length);
      }
      this.modal.previous = Number(workId) - 1;
    },
  },
};
</script>
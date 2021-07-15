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
  padding: 36px 0 48px 0;
}

.works-wrapper {
  display: grid;
  width: 90vw;
  margin: 2vw auto;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;

  .work {
    border-radius: 8px;
    background-color: #ffffff;
    -webkit-box-shadow: 0px 1px 5px 0px rgba(87, 87, 87, 0.6);
    -moz-box-shadow: 0px 1px 5px 0px rgba(87, 87, 87, 0.6);
    box-shadow: 0px 1px 5px 0px rgba(87, 87, 87, 0.6);
    overflow: hidden;

    &-img {
      object-fit: cover;
      width: 100%;

      &:hover {
        cursor: pointer;
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
    grid-template-columns: repeat(auto-fill, minmax(215px, 1fr));
  }
}
@media screen and (min-width: 1260px) {
  .works-wrapper {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}
@media screen and (min-width: 1400px) {
  .works-wrapper {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
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
  data() {
    return {
      modal: {
        number: "",
        image: "",
        next: "",
        previous: "",
      },
    };
  },
  created() {
    AOS.init({
      duration: 2000,
      offset: 300,
    });
  },

  methods: {
    fecthWorksData() {
      this.works = [...works];
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
      console.log("next", this.modal.next);
      this.changePrevious(workId);
      console.log("previous", this.modal.previous);
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
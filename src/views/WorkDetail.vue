<template>
  <div class="work-detail_wrapper">
    <div class="not-Found" v-if="workdId > 6 || workdId < 1">
      <h3>無資料</h3>
    </div>
    <div class="model" v-else>
      <div class="model_wrapper">
        <iframe
          :src="`https://my.spline.design/${link}/`"
          frameborder="1"
          width="100%"
          height="100%"
        ></iframe>
        <div class="left-zoom"></div>
        <div class="right-zoom"></div>
        <router-link :to="{ path: `/work-detail/${prev}` }">
          <div class="left-btn">
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
        </router-link>
        <router-link :to="{ path: `/work-detail/${next}` }">
          <div class="right-btn">
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
        </router-link>
        <div class="center-zoom">
          <img src="./../image/360-degrees.png" alt="360度展示" />
        </div>
      </div>
    </div>
    <div class="info_wrapper">
      <div class="info">
        <div class="left col-10 col-md-4">
          <div class="info-name col-12">{{ workName }}</div>
          <div class="info-size col-12">{{ workSize }}</div>
        </div>
        <div class="right col-10 col-md-8">
          <div class="info-concept">
            <div class="info-concept-title">Design Concept</div>
            <div class="info-concept-content">
              {{ conceptContent }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="detail-image col-12">
      <img :src="image" :alt="workName" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./../assets/scss/main.scss";
@import "./../assets/scss/reset.scss";
a {
  color: black;
  &:hover {
    opacity: 0.2;
  }
  &.router-link-exact-active {
    opacity: 1;
  }
}
iframe,
.not-Found {
  height: 80vh;
  max-height: 700px;
}
.not-Found {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}
.model {
  &_wrapper {
    position: relative;

    .left-zoom,
    .right-zoom {
      position: absolute;
      width: 15vw;
      height: 100%;
      opacity: 0;
      top: 0;
    }
    .left-zoom {
      left: 0;
    }
    .right-zoom {
      right: 0;
    }
    .center-zoom {
      position: absolute;
      left: 50%;
      bottom: 5px;
      width: 100px;
      height: 100px;
      transform: translate(-50%, 0%);
      img {
        width: 80%;
        height: 80%;
        margin: 5px auto;
      }
    }
  }
  .left-btn,
  .right-btn {
    position: absolute;
    top: 50%;
    line-height: 45px;
    width: 48px;
    height: 48px;
    background-color: $subColor;
    border-radius: 50%;
  }
  .left-btn {
    left: 5%;
  }
  .right-btn {
    right: 5%;
  }
}
.info {
  margin: 32px auto;
  display: flex;
  flex-flow: row wrap;
  max-width: 1200px;

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
    padding-left: 8vw;
  }
  &-concept {
    &-title {
      font-size: 1.8 * $mainFontSize;
      margin-bottom: 16px;
      text-align: left;
      padding-left: 8vw;
    }
    &-content {
      font-size: 1 * $mainFontSize;
      text-align: left;
      margin: 0 2vw 16px 8vw;
    }
  }
}
.detail-image {
  padding: 30px 0 0 0;
  background-color: $topBarSubBackgroundColor;
  img {
    width: 100%;
  }
}
</style>

<script>
import { TopWorks } from "./../data/TopWorks";
export default {
  name: "WorkDetail",
  data() {
    return {
      workdId: "",
      workName: "",
      workSize: "",
      conceptContent: "",
      link: "",
      prev: "",
      next: "",
      image: "",
    };
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.fetchWorkdata(id);
    this.prevPag(id);
    this.nextPage(id);
    next();
  },
  created() {
    const { id: workdId } = this.$route.params;
    this.fetchWorkdata(workdId);
    this.prevPag(workdId);
    this.nextPage(workdId);
  },
  methods: {
    fetchWorkdata(id) {
      this.workdId = id;
      const data = TopWorks.find((item) => item.id === Number(id));
      // console.log("TopWorks", TopWorks);
      // console.log("data", data);
      this.workName = data.name;
      this.workSize = data.size;
      this.conceptContent = data.concept;
      this.link = data.link;
      this.image = data.image;
    },
    prevPag(id) {
      let prevNumber = Number(id) - 1;
      if (prevNumber === 0) {
        prevNumber = 6;
      }
      this.prev = prevNumber;
      // console.log("prev", this.prev);
    },
    nextPage(id) {
      let nextNumber = Number(id) + 1;
      if (nextNumber > 6) {
        nextNumber = 1;
      }
      this.next = nextNumber;
      // console.log("next", this.next);
    },
  },
};
</script>
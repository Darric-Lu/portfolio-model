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
        <div class="center-zoom" @click="openPrompted">
          <img src="./../image/360-degrees.png" alt="360度展示" />
        </div>
        <div class="prompt col-4 p-3" v-if="!isPrompted">
          <p class="text-start ps-2 fs-3 mb-0 fw-bold">模型檢視</p>
          <p class="text-start ps-2">
            點擊拖曳可旋轉檢視，滾輪或雙指可放大縮小
          </p>
          <div class="btn btn-secondary py-1" @click="toggleIsPrompted">
            了解
          </div>
        </div>
      </div>
    </div>
    <div class="info_wrapper">
      <div class="info">
        <div class="top col-10">
          <div class="info-title col-12 col-md-6">作品名稱</div>
          <div class="info-name col-12 col-md-6" v-html="workName"></div>
        </div>
        <div class="bottom col-10 mt-2 mt-md-5">
          <div class="info-concept-title col-12 col-md-6">設計理念</div>
          <div
            class="info-concept-content col-12 col-md-6"
            v-html="conceptContent"
          ></div>
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
      cursor: pointer;
      img {
        width: 80%;
        height: 80%;
        margin: 5px auto;
      }
    }
    .prompt {
      position: absolute;
      border-radius: 8px;
      min-width: 300px;
      background-color: $subColor;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
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
  margin: 48px auto 64px auto;
  display: flex;
  flex-flow: column wrap;
  max-width: 1200px;

  .top,
  .bottom {
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
  }
  &-title,
  &-name {
    font-size: 1.4 * $mainFontSize;
    margin-bottom: 16px;
    text-align: left;
    padding-left: 8vw;
  }
  &-concept {
    &-title {
      font-size: 1.4 * $mainFontSize;
      margin-bottom: 16px;
      text-align: left;
      padding-left: 8vw;
    }
    &-content {
      font-size: 1 * $mainFontSize;
      text-align: left;
      padding-left: 8vw;
      padding-right: 8vw;
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

@media screen and (min-width: 768px) {
  .info {
    .top,
    .bottom {
      margin-right: 20vw;
    }

    &-title,
    &-name {
      margin-bottom: 16px;
      text-align: left;
      padding-left: 6vw;
    }
    &-title {
      text-align: right;
    }
    &-concept {
      &-title {
        text-align: right;
        padding: 0 0 0 6vw;
      }
      &-content {
        padding: 0 0 0 6vw;
      }
    }
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
      conceptContent: "",
      link: "",
      prev: "",
      next: "",
      image: "",
      isPrompted: false,
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
    this.fetchIsPrompted();
  },
  methods: {
    fetchWorkdata(id) {
      this.workdId = id;
      const data = TopWorks.find((item) => item.id === Number(id));
      this.workName = data.name;
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
    },
    nextPage(id) {
      let nextNumber = Number(id) + 1;
      if (nextNumber > 6) {
        nextNumber = 1;
      }
      this.next = nextNumber;
    },
    toggleIsPrompted() {
      this.isPrompted = true;
      localStorage.setItem("isPrompted", true);
    },
    fetchIsPrompted() {
      this.isPrompted = localStorage.getItem("isPrompted");
    },
    openPrompted() {
      this.isPrompted = false;
    },
  },
};
</script>
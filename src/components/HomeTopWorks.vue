<template>
  <div class="top-works_wrapper">
    <div class="top-works">
      <div
        class="works col-6 col-md-4 col-xl-2"
        v-for="work in topWorks"
        :key="work.id"
      >
        <router-link :to="{ path: `/work-detail/${work.id}` }">
          <div class="img_wrapper">
            <img class="img img-fluid" :src="work.picture" :alt="work.title" />
          </div>
        </router-link>
        <div class="work-title">
          <h3 class="title">{{ work.title }}</h3>
        </div>
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
  margin: 0 auto;
  width: 90vw;

  .works {
    // border: 2px red solid;
    // position: relative;
    padding: 16px 8px;

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
.more-works {
  // display: flex;
  // flex-flow: row nowrap;
  // justify-content: center;
  // margin: 5px 0 15px 0;
  // text-align: center;

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
export default {
  name: "home-top-Works",
  props: {
    topWorks: {
      type: Array,
      required: true,
    },
  },
};
</script>
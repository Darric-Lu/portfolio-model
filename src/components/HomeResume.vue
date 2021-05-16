,<template>
  <div class="resume-wrapper">
    <div class="resume col-10">
      <div class="content">
        <div class="avatar col-12">
          <div class="avatar_cover">
            <img :src="avatar" alt="" class="avatar-img" />
          </div>
        </div>
        <div class="info">
          <div class="info-text">
            <div class="info-text-name">{{ author }}</div>
            <div class="info-text-position">
              <span>
                <p class="info-text-position-main">{{ resume[0].position }}</p>
                <p class="info-text-position-date">{{ resume[0].date }}</p>
              </span>
            </div>
            <div class="info-text-position">
              <span>
                <p class="info-text-position-main">{{ resume[1].position }}</p>
                <p class="info-text-position-date">{{ resume[1].date }}</p>
              </span>
            </div>
          </div>
          <router-link to="/about-me">
            <div class="more-abot-me">
              <div class="btn">More About Me</div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.resume-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 32px;

  .resume {
    height: auto;
    background-color: $subColor;
    border-radius: 32px;
    margin-bottom: 64px;
  }
}
.content {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  .avatar {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    margin-bottom: -36px;

    &_cover {
      margin: 10% 0;
      width: 360px;
      height: 360px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      overflow: hidden;
    }
    &-img {
      object-fit: cover;
    }
  }
}
.info {
  width: 360px;
  margin: 0 0 32px 0;
  &-text {
    color: $mainColor;

    &-name {
      font-size: 2 * $mainFontSize;
    }

    &-position {
      margin-top: 16px;
      font-size: 1.5 * $mainFontSize;

      &-main {
        margin: 0;
      }
      &-date {
        font-size: $mainFontSize;
      }
    }
  }
}
.more-abot-me {
  .btn {
    width: 170px;
    height: 50px;
    line-height: 50px;
    border-radius: 30px;
    background-color: #000000;
    color: #ffffff;
    font-size: 1.2em;
    padding: 0;
    margin: 16px 0;
  }
}
</style>

<script>
export default {
  name: "home-resume",
  props: {
    author: {
      type: String,
      require: true,
    },
    resume: {
      type: Array,
      require: true,
    },
    avatar: {
      type: String,
      require: true,
    },
  },
  data() {
    return {};
  },
  created() {
    console.log("author");
  },
};
</script>
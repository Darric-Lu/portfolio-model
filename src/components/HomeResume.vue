,<template>
  <div class="resume-wrapper" id="aboutMe">
    <div class="resume col-10">
      <div class="content">
        <div class="avatar col-12 col-lg-6">
          <div class="avatar_cover col-10">
            <img :src="avatar" alt="" class="avatar-img" />
          </div>
        </div>
        <div class="info col-12 col-lg-6 p-lg-5">
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
            <div class="info-text-position">
              <span>
                <p class="info-text-position-main">E-mail</p>
                <p class="info-text-position-date">{{ email }}</p>
              </span>
            </div>
          </div>
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
  margin-top: 80px;
  background-color: $subColor;

  .resume {
    height: auto;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    // border-radius: 32px;
    margin-top: 32px;
  }
}
.content {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  max-width: 900px;

  .avatar {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-self: center;
    padding: 0 0 32px 0;

    &_cover {
      width: 360px;
      height: 360px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      overflow: hidden;
    }
    &-img {
      object-fit: cover;
      width: 100%;
    }
  }
}
.info {
  width: 360px;
  // margin: 0 0 32px 0;
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
    email: {
      type: String,
      require: true,
    },
  },
  data() {
    return {};
  },
  created() {
    // console.log("author");
  },
};
</script>
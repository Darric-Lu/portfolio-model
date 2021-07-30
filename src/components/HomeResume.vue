,<template>
  <div class="resume-wrapper" id="aboutMe">
    <div class="resume col-10">
      <div class="content">
        <div class="avatar col-12 col-lg-6">
          <div class="avatar_cover col-10">
            <img :src="avatar" alt="" class="avatar-img" />
          </div>
        </div>
        <div class="info col-12 col-lg-6 p-lg-2">
          <div class="info-text">
            <div class="info-text-name">{{ author }}</div>
            <div class="info-text-position">
              <div class="info-text-position-main">
                {{ resume[0].position }}
              </div>
              <div class="info-text-position-english">
                {{ resume[0].positionE }}
              </div>
            </div>
            <div class="info-text-position">
              <div class="info-text-position-main">
                {{ resume[1].position }}
              </div>
              <div class="info-text-position-english">
                {{ resume[1].positionE }}
              </div>
            </div>
            <div class="info-text-position">
              <div class="info-text-position-main">
                {{ resume[2].position }}
              </div>
              <div class="info-text-position-english">
                {{ resume[2].positionE }}
              </div>
            </div>
            <div class="info-text-position">
              <div class="info-text-position-main">
                {{ resume[3].position }}
              </div>
              <div class="info-text-position-english">
                {{ resume[3].positionE }}
              </div>
            </div>
            <div class="info-text-position">
              <div class="info-text-position-main">
                {{ resume[4].position }}
              </div>
              <div class="info-text-position-english">
                {{ resume[4].positionE }}
              </div>
            </div>
            <div class="info-text-position">
              <div class="info-text-position-main">
                {{ resume[5].position }}
              </div>
              <div class="info-text-position-english">
                {{ resume[5].positionE }}
              </div>
            </div>
            <div class="info-text-position pt-3">
              <div class="info-text-position-main">Contact me：</div>
              <div class="info-text-position-date">
                <a class="info-text-position-mail" :href="`mailto:` + email">{{
                  email
                }}</a>
              </div>
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
    margin: 32px 0;
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
      width: 300px;
      height: 300px;
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
  // width: 360px;
  // margin: 0 0 32px 0;
  &-text {
    color: $mainColor;

    &-name {
      font-size: 1.4 * $mainFontSize;
    }

    &-position {
      margin-top: 16px;
      font-size: 1 * $mainFontSize;

      &-main {
        margin: 0;
      }
      &-english {
        font-size: 0.8 * $mainFontSize;
        margin-left: 4px;
      }
      &-mail {
        color: $mainColor;
        font-size: $mainFontSize;
        text-decoration: none;
      }
    }
  }
}
@media screen and (min-width: 992px) {
  .content {
    all: unset;
    display: flex;
    max-width: 900px;
    justify-content: space-between;

    .avatar {
      margin: 50px 30px 0 0;
    }
  }
  .info {
    margin-left: 0 auto;

    &-text {
      width: 400px;

      &-name {
        text-align: left;
      }

      &-position {
        display: flex;
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
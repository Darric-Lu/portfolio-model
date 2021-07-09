<template>
  <div class="header">
    <div class="top-bar">
      <label for="top-toggle" class="top-toggle-label">
        <div class="hamburger">
          <div class="drop-btn"></div>
        </div>
      </label>
      <router-link to="/" class="top-brand"> Kim's Portfolio </router-link>
      <input
        type="checkbox"
        class="top-toggle"
        id="top-toggle"
        v-model="toggle"
      />
      <div class="top-list">
        <router-link class="item" to="/">
          <div class="item-content" @click="closeTop()">
            <span> Home </span>
          </div>
        </router-link>
        <router-link class="item" to="/work-detail/2">
          <div class="item-content" @click="closeTop()">
            <span> 3D views </span>
          </div>
        </router-link>
        <router-link class="item" to="/works">
          <div class="item-content" @click="closeTop()">
            <span> Works </span>
          </div>
        </router-link>
        <a class="item" to="/about-me" @click="aboutMeTage('aboutMe')">
          <div class="item-content">
            <span> About Me </span>
          </div>
        </a>
        <!-- </ui> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/reset.scss";
@import "../assets/scss/helper.scss";
@import "../assets/scss/main.scss";

.header {
  width: 100%;
  height: 60px;
  position: relative;
  z-index: 999;
  background-color: $topBarBackgroundColor;
}

.top-bar {
  .top-brand {
    height: 60px;
    line-height: 60px;
    padding: 8px 0px;
    font-size: 1.4 * $mainFontSize;
    color: $topBarColor;
  }

  .top-toggle:checked ~ .top-list {
    transform: scale(1, 1);
  }

  .top-toggle:checked ~ .top-list .item .item-content {
    transition: opacity 0.2s ease-out 0.15s;
    opacity: 1;
    display: block;
  }

  .top-list {
    transition: transform 0.3s ease-out;
    transform-origin: top;
    transform: scale(1, 0);

    a {
      color: $topBarColor;

      .item-content {
        background-color: $topBarSubBackgroundColor;
        height: 60px;
        line-height: 60px;
        opacity: 0;
        display: none;

        span {
          cursor: pointer;
          @extend %hover-under-line;
          font-size: $mainFontSize;
          &:after {
            @extend %hover-under-line_after;
          }
        }

        &:hover {
          span:after {
            @extend %hover-under-line_hover-after;
          }
        }
      }

      &.router-link-exact-active {
        .item-content {
          span {
            color: #272727;

            &:after {
              @extend %hover-under-line_after;
              background-color: #272727;
            }
          }
        }
      }
    }
  }

  .top-toggle-label {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 6%;
    display: flex;
    align-items: center;
    margin: 0;
    cursor: pointer;

    .hamburger {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 2.4rem;
      width: 3rem;
      border: 4px solid $topBarSubBackgroundColor;
      border-radius: 0.6rem;

      .drop-btn {
        position: relative;
      }

      .drop-btn,
      .drop-btn::before,
      .drop-btn::after {
        width: 20px;
        height: 3px;
        background-color: rgb(200, 200, 200);
      }

      .drop-btn::before,
      .drop-btn::after {
        position: absolute;
        left: 0;
        content: "";
      }

      .drop-btn::before {
        top: 8px;
      }

      .drop-btn::after {
        bottom: 8px;
      }
    }
  }

  .top-toggle {
    visibility: hidden;
    position: absolute;
  }
}

@media screen and (min-width: 768px) {
  .top-bar {
    all: unset;
    display: grid;
    grid-template-columns: 1fr auto minmax(400px, 4fr) 1fr;

    .top-brand {
      grid-column: 2/3;
      padding: 0px;
    }

    .top-toggle-label {
      .hamburger {
        display: none;
      }
    }

    .top-list {
      all: unset;
      grid-column: 3 / 4;
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-end;

      a {
        .item-content {
          display: block;
          margin: 0;
          opacity: 1;
          background-color: $topBarBackgroundColor;
          height: 60px;
          line-height: 60px;
          margin: 0 1rem;
        }
      }
    }
  }
}
</style> 

<script>
export default {
  name: "navbar",
  data() {
    return {
      toggle: false,
    };
  },
  methods: {
    closeTop() {
      this.toggle = false;
    },
    aboutMeTage(tag) {
      if (this.$route.path !== "/") {
        let select = tag;
        localStorage.setItem("tag", select);
        this.$router.push({ name: "Home" });
      } else {
        setTimeout(() => {
          document.scrollingElement.scrollTop =
            document.scrollingElement.scrollHeight;
        }, 150);
      }
      this.closeTop();
    },
  },
};
</script>
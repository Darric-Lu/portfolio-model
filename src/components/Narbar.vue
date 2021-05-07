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
        <!-- <ui> -->
        <div class="top-item" @click.stop.prevent="closeTop()">
          <router-link to="/">Home</router-link>
        </div>
        <div class="top-item" @click.stop.prevent="closeTop()">
          <router-link to="/work">Work</router-link>
        </div>
        <div class="top-item" @click.stop.prevent="closeTop()">
          <router-link to="/about-me">About me</router-link>
        </div>
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
  height: 90px;
  position: fixed;
  z-index: 999;
  background-color: $topBarBackgroundColor;
}

.top-bar {
  .top-brand {
    height: 90px;
    line-height: 90px;
    padding: 5px 0px;
    font-size: 1.6 * $mainFontSize;
    color: $topBarColor;
  }
  .top-toggle:checked ~ .top-list {
    transform: scale(1, 1);
  }
  .top-toggle:checked ~ .top-list .top-item {
    transition: opacity 0.2s ease-out 0.15s;
    opacity: 1;
  }
  .top-list {
    transition: transform 0.3s ease-out;
    transform-origin: top;
    transform: scale(1, 0);
    .top-item {
      // font-size: $mainFontSize;
      background-color: $topBarSubBackgroundColor;
      height: 40px;
      line-height: 40px;
      opacity: 0;
      a {
        font-size: $mainFontSize;
        color: $topBarColor;
        @extend %hover-under-line;

        &:after {
          @extend %hover-under-line_after;
        }
        &:hover::after {
          @extend %hover-under-line_hover-after;
        }
        &.router-link-exact-active {
          color: #272727;
          &:after {
            @extend %hover-under-line_after;
            background-color: #272727;
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
      line-height: 80px;
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
      .top-item {
        margin: 0;
        opacity: 1;
        background-color: $topBarBackgroundColor;
        height: 90px;
        line-height: 90px;
        margin: 0 1rem;
      }
    }
  }
}
</style> 

<script>
export default {
  name: "Navbar",
  data() {
    return {
      toggle: false,
    };
  },
  methods: {
    closeTop() {
      this.toggle = false;
    },
  },
};
</script>
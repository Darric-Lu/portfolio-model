<template>
  <div class="home">
    <Home-video />
    <Home-top-Works :top-works="topWorks" />
  </div>
</template>


<script>
import HomeVideo from "../components/HomeVideo.vue";
import HomeTopWorks from "../components/HomeTopWorks";
import { topWorksData } from "../data/dummyData";

export default {
  name: "Home",
  components: {
    HomeVideo,
    HomeTopWorks,
  },
  data() {
    return {
      topWorks: [],
    };
  },
  created() {
    this.fetchTopWorksData();
  },
  methods: {
    fetchTopWorksData() {
      this.topWorks = [...topWorksData];
      console.log("topWorks", this.topWorks);
    },
  },
};
</script>

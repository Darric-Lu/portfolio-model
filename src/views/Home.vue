<template>
  <div class="home">
    <Home-video />
    <Home-top-Works :top-works="topWorks" />
    <Home-resume :author="author" :resume="resume" :avatar="avatar" />
  </div>
</template> 



<script>
import HomeVideo from "../components/HomeVideo.vue";
import HomeTopWorks from "../components/HomeTopWorks.vue";
import HomeResume from "../components/HomeResume.vue";
import { topWorksData } from "../data/dummyData";
import { PortfolioAuthor } from "./../data/dummyData";

export default {
  name: "Home",
  components: {
    HomeVideo,
    HomeTopWorks,
    HomeResume,
  },
  data() {
    return {
      topWorks: [],
      avatar: "",
      author: "",
      resume: [],
    };
  },
  created() {
    this.fetchTopWorksData();
  },
  methods: {
    fetchTopWorksData() {
      this.topWorks = [...topWorksData];
      this.author = PortfolioAuthor.name;
      this.avatar = PortfolioAuthor.avatarImg;
      this.resume = [...PortfolioAuthor.experience];
      // console.log("topWorks", this.topWorks);
    },
  },
};
</script>

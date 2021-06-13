<template>
  <div class="home">
    <Home-video />
    <Home-top-Works :top-works="topWorks" />
    <Home-works :works="works" />
    <Home-resume
      :author="author"
      :resume="resume"
      :avatar="avatar"
      :email="email"
    />
  </div>
</template> 



<script>
import HomeVideo from "../components/HomeVideo.vue";
import HomeTopWorks from "../components/HomeTopWorks.vue";
import HomeWorks from "../components/HomeWorks.vue";
import HomeResume from "../components/HomeResume.vue";
import { topWorksData } from "../data/dummyData";
import { PortfolioAuthor } from "./../data/dummyData";
import { works } from "./../data/works";

export default {
  name: "Home",
  components: {
    HomeVideo,
    HomeTopWorks,
    HomeWorks,
    HomeResume,
  },
  data() {
    return {
      topWorks: [],
      avatar: "",
      author: "",
      resume: [],
      email: "",
      worksAmount: 12,
      works: [],
    };
  },
  created() {
    this.fetchTopWorksData();
    this.fetchWorksData();
    this.fetchResumeData();
  },
  methods: {
    fetchTopWorksData() {
      this.topWorks = [...topWorksData];
    },
    fetchWorksData() {
      this.works = [...works.slice(0, this.worksAmount)];
    },
    fetchResumeData() {
      this.author = PortfolioAuthor.name;
      this.avatar = PortfolioAuthor.avatarImg;
      this.resume = [...PortfolioAuthor.experience];
      this.email = PortfolioAuthor.contact.email;
    },
  },
};
</script>

<template>
  <div class="home">
    <Home-Video />
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
      worksIndex: [1, 3, 7, 11, 13, 18, 22, 24, 31, 43, 48, 50], //首頁選放之其他作品
      works: [],
      author: "",
      avatar: "",
      resume: [],
      email: "",
    };
  },
  created() {
    this.fetchTopWorksData();
    this.fetchWorksData();
    this.fetchResumeData();
    this.$nextTick(() => {
      //渲染完之後執行
      this.getLocal();
    });
  },
  methods: {
    fetchTopWorksData() {
      this.topWorks = [...topWorksData];
    },
    fetchWorksData() {
      for (let i = 0; i < this.worksIndex.length; i++) {
        let index = Number(this.worksIndex[i]);
        this.works = [...this.works, ...works.slice(index - 1, index)];
        this.works[i].id = i + 1;
      }
    },
    fetchResumeData() {
      this.author = PortfolioAuthor.name;
      this.avatar = PortfolioAuthor.avatarImg;
      this.resume = [...PortfolioAuthor.experience];
      this.email = PortfolioAuthor.contact.email;
    },
    getLocal() {
      //點選aboutMe之後轉至底部
      let select = localStorage.getItem("tag");
      if (select) {
        setTimeout(() => {
          document.scrollingElement.scrollTop =
            document.scrollingElement.scrollHeight;
        }, 150);
      }
    },
  },
  destroyed() {
    //清除tag
    localStorage.setItem("tag", "");
  },
};
</script>

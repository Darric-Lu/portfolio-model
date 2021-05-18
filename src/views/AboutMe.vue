<template>
  <div class="about-me-area">
    <div class="about-me col-10">
      <div class="left col-12 col-lg-6">
        <div class="avatar">
          <div class="avatar_cover">
            <img class="avatar-img" :src="avatar" :alt="name" />
          </div>
        </div>
        <div class="name">{{ name }}</div>
        <div class="skill col-8">
          <div class="skill-title">Skill</div>
          <div class="skill-text" v-for="(skill, index) in skills" :key="index">
            {{ skill }}
          </div>
        </div>
        <div class="contact col-8">
          <div class="contact-title">Contact</div>
          <div class="contact-text">Tell: {{ contact.tell }}</div>
          <div class="contact-text">Mail: {{ contact.email }}</div>
          <div class="contact-text">FB: {{ contact.fb }}</div>
          <div class="contact-text">IG: {{ contact.ig }}</div>
        </div>
      </div>
      <div class="right col-12 col-lg-6">
        <div
          class="experience col-8"
          v-for="(experience, index) in experiences"
          :key="index"
        >
          <div class="experience-title">{{ experience.position }}</div>
          <div class="experience-company">
            <p>{{ experience.company }}</p>
            <p>{{ experience.date }}</p>
          </div>
          <div class="experience-responsible">{{ experience.responsible }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./../assets/scss/main.scss";
.about-me-area {
  background-color: #4d4d4d;
  padding: 36px 0;

  .about-me {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 0 36px 0;
    background-color: $subColor;
    border-radius: 32px;
    display: flex;
    flex-flow: row wrap;
  }
}
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
.name {
  font-size: 2 * $mainFontSize;
}
.skill,
.contact {
  margin: 24px auto;
  text-align: left;

  &-title {
    font-size: 1.6 * $mainFontSize;
  }

  &-text {
    font-size: $mainFontSize;
    color: #4d4d4d;
  }
}
.right {
  margin: auto 0;
}
.experience {
  margin: 28px auto;
  text-align: left;

  &-title {
    font-size: 1.6 * $mainFontSize;
  }

  &-company {
    font-size: $mainFontSize;
    p {
      margin: 4px 0 0 0;
    }
  }

  &-responsible {
    font-size: $mainFontSize;
    color: #4d4d4d;
  }
}
</style>

<script>
import { PortfolioAuthor } from "./../data/dummyData";
export default {
  name: "AboutMe",
  data() {
    return {
      name: "",
      school: {},
      experiences: [],
      avatar: "",
      skills: [],
      contact: {},
    };
  },
  created() {
    this.fetchAouthorData();
  },
  methods: {
    fetchAouthorData() {
      this.name = PortfolioAuthor.name;
      this.school = { ...PortfolioAuthor.school };
      this.experiences = [...PortfolioAuthor.experience];
      this.avatar = PortfolioAuthor.avatarImg;
      this.skills = [...PortfolioAuthor.skill];
      this.contact = { ...PortfolioAuthor.contact };
    },
  },
};
</script>
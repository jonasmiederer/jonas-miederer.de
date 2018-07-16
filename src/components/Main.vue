<template>

  <div>

    <div role="navigation">

      <b-navbar justified v-b-scrollspy.100 fixed="top">
        <b-nav-item class="active" href="#about">
          <mdc-icon class="" icon="face"></mdc-icon>
          About Me
        </b-nav-item>
        <b-nav-item href="#education">
          <mdc-icon class="" icon="school"></mdc-icon>
          Education
        </b-nav-item>
        <b-nav-item href="#experience">
          <mdc-icon class="" icon="work"></mdc-icon>
          Experience
        </b-nav-item>
        <b-nav-item href="#portfolio">
          <mdc-icon class="" icon="code"></mdc-icon>
          Portfolio
        </b-nav-item>
        <b-nav-item href="#skills">
          <mdc-icon class="" icon="trending_up"></mdc-icon>
          Skills
        </b-nav-item>
        <b-nav-item href="#blog">
          <mdc-icon class="" icon="comment"></mdc-icon>
          Blog
        </b-nav-item>
        <b-nav-item href="#contact">
          <mdc-icon class="" icon="mail"></mdc-icon>
          Contact
        </b-nav-item>
      </b-navbar>
    </div>
    <div>

      <about-me></about-me>
      <education></education>
      <experience></experience>
      <portfolio></portfolio>
      <skills></skills>
      <Blog></Blog>
      <contact></contact>
    </div>
  </div>
</template>

<script>


  import AboutMe from './AboutMe'
  import Portfolio from './Portfolio'
  import Skills from './Skills'
  import Education from './Education'
  import Experience from './Experience'
  import Blog from './Blog'
  import Contact from './Contact'

  export default {
    components: {Portfolio, Skills, Education, AboutMe, Contact, Experience, Blog},
    name: 'Main'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

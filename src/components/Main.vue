<template>

  <div>


    <div role="navigation">
      <b-navbar justified v-b-scrollspy.100 fixed="top" toggleable="md">
        <b-navbar-toggle target="collapse-nav">
        </b-navbar-toggle>
        <b-collapse is-nav id="collapse-nav">
          <b-nav-item class="active" href="#about">
            <mdc-icon class="" icon="person"></mdc-icon>
            <span>About Me</span>
          </b-nav-item>
          <b-nav-item href="#education">
            <mdc-icon class="" icon="school"></mdc-icon>
            <span>Education</span>
          </b-nav-item>
          <b-nav-item href="#experience">
            <mdc-icon class="" icon="work"></mdc-icon>
            <span>Experience</span>
          </b-nav-item>
          <b-nav-item href="#portfolio">
            <mdc-icon class="" icon="code"></mdc-icon>
            <span>Portfolio</span>
          </b-nav-item>
          <b-nav-item href="#skills">
            <mdc-icon class="" icon="trending_up"></mdc-icon>
            <span>Skills</span>
          </b-nav-item>
          <b-nav-item href="#blog">
            <mdc-icon class="" icon="comment"></mdc-icon>
            <span>Blog</span>
          </b-nav-item>
          <b-nav-item href="#contact">
            <mdc-icon class="" icon="mail"></mdc-icon>
            <span>Contact</span>
          </b-nav-item>
        </b-collapse>
      </b-navbar>
    </div>

    <SocialBar>
      <SocialButton v-for="(social) in socials" :key="social.name" :options="social"></SocialButton>
    </SocialBar>
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
  import SocialBar from "./misc/social-buttons/SocialBar";
  import SocialButton from "./misc/social-buttons/SocialButton";

  export default {
    components: {SocialButton, SocialBar, Portfolio, Skills, Education, AboutMe, Contact, Experience, Blog},
    name: 'Main',
    data() {
      return {
        socials: [
          {
            name: 'LinkedIn',
            class: 'btn-li',
            icon: 'fa-linkedin',
            color: '#0082ca',
            link: 'https://www.linkedin.com/in/jonas-miederer-39863912a/'
          },
          {
            name: 'Mail',
            class: 'btn-mail',
            icon: 'fa-envelope',
            color: '#2c3e50',
            link: 'mailto:hello@jonas-miederer.de'
          },
          {
            name: 'Twitter',
            class: 'btn-tw',
            icon: 'fa-twitter',
            color: '#55acee',
            link: 'https://twitter.com/jonasmied'
          },
          {
            name: 'Github',
            class: 'btn-git',
            icon: 'fa-github',
            color: '#333',
            link: 'https://github.com/JonasMie'
          },{
            name: 'Soundcloud',
            class: 'btn-sc',
            icon: 'fa-soundcloud',
            color: '#f50',
            link: 'https://soundcloud.com/miederer'
          },{
            name: 'Spotify',
            class: 'btn-spotify',
            icon: 'fa-spotify',
            color: '#1DB954',
            link: 'https://open.spotify.com/user/ablbqxghqvpddd2fzus634jds?si=g1S23kFxScuzq5EjhREF2g'
          },
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

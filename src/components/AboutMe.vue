<template>
  <section id="about" class="row">
    <div class="col-12 col-md-3 about-left">
      <div class="about-me-header">
        <mdc-icon class="accent" icon="person"></mdc-icon>
        <h2 class="accent">About Me</h2>
      </div>
      <div class="profile-img">
        <div class="profile-hexa-0">
          <div class="profile-hexa-1">
            <div class="profile-hexa-2">
              <img src="/static/img/about/profile5.png">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 col-md-9 about-right">
      <div class="about-detail-wrapper">

        <div class="row about-detail" v-for="detail in details">
          <div class="about-key col-12 col-md-6">{{detail.key}}</div>
          <div class="about-value col-12 col-md-6" v-html="detail.value"></div>
        </div>

        <div class="teaser">
          Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly
          with sour triple sec.All of those processors evacuate strange, modern vogons.Love is the only mind, the only
          guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those
          processors evacuate strange, modern vogons.
        </div>
      </div>
    </div>
  </section>
</template>

<script>

  export default {
    name: 'AboutMe',
    components: {},


    data() {
      return {
        details: [
          {
            'key': 'Name',
            'value': 'Jonas Miederer'
          },
          {
            'key': 'Address',
            'value': 'Stuttgart, Germany'
          },
          {
            'key': 'Zip',
            'value': '70327'
          },
          {
            'key': 'Phone',
            'value': '<a href="tel:+491635890361">+49 163 5890361</a>'
          },
          {
            'key': 'Contact',
            'value': '<a href="mailto:hello@jonas-miederer.de">hello@jonas-miederer.de</a><br>or via the <a href="#contact">contact form</a>'
          }

        ]
      }
    }
  }
</script>

<style scoped>

  #about {
    border-collapse: collapse;
    border: 1px solid #f2f2f2;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, .05);
  }

  .about-left {

    text-align: left;
    padding: 0;
  }

  .about-left h2 {
    display: inline-block;
    padding-left: 10px;
  }

  .left h2 {
    display: inline-block;
  }

  .about-me-header {
    padding: 20px;
  }

  .profile-img {
    height: 80%;
    display: flex;
    align-items: center;
  }

  .profile-img img {
    /*max-width: 50%;*/
    /*border-radius: 50%;*/
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%);
  }

  /*
  Profile image hexagon shape
   */

  .profile-hexa-0, .profile-hexa-0 div {
    margin: 0 auto;
    transform-origin: 50% 50%;
    overflow: hidden;
    width: 300px;
    height: 300px;
  }

  .profile-hexa-0 {
    width: 325px;
    height: 230px;
    -webkit-transform: rotate(120deg);;
    -moz-transform: rotate(120deg);;
    -ms-transform: rotate(120deg);;
    -o-transform: rotate(120deg);;
    transform: rotate(120deg);;
  }

  .profile-hexa-0 div {
    width: 100%;
    height: 100%;
  }

  .profile-hexa-1 {
    -webkit-transform: rotate(-60deg);
    -moz-transform: rotate(-60deg);
    -ms-transform: rotate(-60deg);
    -o-transform: rotate(-60deg);
    transform: rotate(-60deg);
  }

  .profile-hexa-2 {
    -webkit-transform: rotate(-60deg);
    -moz-transform: rotate(-60deg);
    -ms-transform: rotate(-60deg);
    -o-transform: rotate(-60deg);
    transform: rotate(-60deg);
  }



  .name {
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background: #444;
    margin: 0;
  }

  .name h1 {
    margin: 0;
    color: #ffffff;
  }

  .teaser {
    padding: 16px;
  }

  .about-right {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
  }

  .about-detail-wrapper {
    width: 80%;
    margin: auto
  }

  .about-detail {
    text-align: left;
    padding: 16px;
  }
</style>

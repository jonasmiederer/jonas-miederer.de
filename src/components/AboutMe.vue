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
              <img loading="eager" src="/static/img/about/profile5.png">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 col-md-9 about-right">
      <div class="about-detail-wrapper">

        <div class="teaser">
          <div class="row">
            <h3>Hi, I'm Jonas. And I'm <span id="typewriter">a software developer.</span></h3>
          </div>
          <div class="row">
            <p>
              And I'm also glad you found your way to my website. No matter if you just came here out of curiosity, if
              you
              want to become more familiar with me or if you are looking for something specific: I hope you'll find it!
              If
              not: <a href="#contact">Drop me a line.</a>
            </p>
          </div>
          <div class="row">
            <!--<h4>About me:</h4>-->
            <p>
              I am <span class="font-weight-bold">25 years old</span> and grew up in the area around Nuremberg in a
              small city called Schwabach. Since there is not too much to experience, I decided to move to Stuttgart
              after finishing my Abitur. Although I always
              wanted to move to a bigger city like Berlin, Hamburg or somewhere abroad, I'm still <span
              class="font-weight-bold">living in Stuttgart</span> ,
              because I really like my job and the people there.<br>

              During my studies at the Media University of Applied Sciences Stuttgart, I delved into Web Development
              with
              the focus on Backend Development, Business Logic and Database Administration.<br>

              After (or probably during) finishing my bachelor thesis, my interest shifted more towards the subject of
              <span class="font-weight-bold">Artificial Intelligence and Machine Learning.</span> <br>

              Luckily enough I was given the opportunity to write my master thesis at the <span
              class="font-weight-bold">Daimler AG</span> in a small but
              highly
              motivated team called <span class="font-weight-bold">pacTris</span>, because after finishing my thesis I
              decided to start working there fulltime
              as a <span
              class="font-weight-bold">software developer for Artificial Intelligence and Machine Learning</span> .

            </p>
          </div>

          <div class="row">
            <!--<div class="col-12 col-md-6">-->
            <!--<span class="font-weight-bold">Things I like:</span>-->
            <!--<ul>-->
            <!--<li>All kinds of music except Metal/Hardrock</li>-->
            <!--<li>DJing</li>-->
            <!--<li>Sports (Football, Skiing, Snowboarding, Biking, ...)</li>-->
            <!--<li>Friendly people</li>-->
            <!--</ul>-->
            <!--</div>-->

            <!--<div class="col-12 col-md-6">-->
            <!--<span class="font-weight-bold">Things I don't like:</span>-->
            <!--<ul>-->
            <!--<li>Metal/Hardrock</li>-->
            <!--<li>Coconut (and everything that smells like coconut) & Raisins</li>-->
            <!--<li>That mud in the winter when the snow is melting</li>-->
            <!--</ul>-->
            <!--</div>-->

            <p>
              If you have any comments, requests, suggestions or just want to say hello, then feel free to contact me
              via the <a href="#contact">contact form</a> or via <a href="mailto:hello@jonas-miederer.de">mail</a> . I'm
              looking forward to hearing from you. Cheers!
            </p>
          </div>
        </div>

        <!--<div class="row about-detail" v-for="detail in details">-->
        <!--<div class="about-key col-12 col-md-6">{{detail.key}}</div>-->
        <!--<div class="about-value col-12 col-md-6" v-html="detail.value"></div>-->
        <!--</div>-->

      </div>
    </div>
  </section>
</template>

<script>

  var Typewriter = require('typewriter-effect/dist/core.js')

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

        ],
        iam: [
          "a software developer.", "interested in all kinds of technology.", "a hobby DJ.", "a guitarist.", "25 years old.", "born in Bavaria.", "working at Daimler AG.", "the worlds worst cook.", "always listening to music.", "into sports.", "excited to hear from you."
        ]
      }
    },
    mounted: function () {
      new Typewriter('#typewriter', {
        strings: this.iam,
        autoStart: true,
        loop: true
      });
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

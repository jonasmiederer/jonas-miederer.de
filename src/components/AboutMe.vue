<template>
  <section id="about" class="row">
    <div class="col-12 col-md-3 about-left">
      <div>
        <mdc-icon class="accent" icon="face"></mdc-icon>
        <h2 class="accent">About Me</h2>
      </div>
      <div class="profile-img">
        <img src="/static/img/about/profile2.JPG">
      </div>
    </div>

    <div class="col-12 col-md-6 about-right">
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
            'value': '+49 163 5890361'
          },
          {
            'key': 'Email',
            'value': '<a href="mailto:jonasmied@gmail.com">jonasmied@gmail.com</a>'
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
    /*display: flex;*/
    /*flex-direction: column;*/
    /*justify-content: space-around;*/

    border-right: 1px solid #f2f2f2;
    text-align: left;
    padding: 20px ;
  }


  .about-left h2 {
    display: inline-block;
    padding-left: 10px;
  }


  .left h2 {
    display: inline-block;
  }

  .profile-img img {
    max-width: 50%;
    border-radius: 50%;
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

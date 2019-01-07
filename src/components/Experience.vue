<template>
  <section id="experience" class="row">

    <div class="col-12 col-lg-3 experience-left">
      <mdc-icon class="accent" icon="work"></mdc-icon>
      <h2 class="accent">Experience</h2>

      <div class="description">
        <!--Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.-->
      </div>
    </div>

    <div class="col-12 col-lg-9 experience-right">

      <div class="steps-wrapper" v-for="(step, index) in steps">
        <div :id="step.id">
          <div class="step-header">
          <span>
            <svg class="accent" focusable="false" viewBox="0 0 48 48" aria-hidden="true">
              <circle cx="50%" cy="50%" r="24"></circle>
              <text class="" x="24" y="24" alignment-baseline="central" text-anchor="middle">{{step.yearStart}}</text>
            </svg>
          </span>
            <h3 class="step-title">{{step.title}}</h3>
          </div>
          <div class="row step-detail" :class="{'last-entry': index === steps.length - 1}">
            {{step.details}}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

  export default {
    name: 'Experience',


    data() {
      return {
        steps: [
          {
            id: 'internship-11f',
            yearStart: 2014,
            yearEnd: 2015,
            company: {
              name: "11Freunde",
              website: "https://www.11freunde.de/"
            },
            title: 'Praktisches Studiensemester - Web Development',
            details: 'Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.',
          },
          {
            id: 'workingstudent-11f',
            yearStart: 2015,
            yearEnd: 2018,
            company: {
              name: "11Freunde",
              website: "https://www.11freunde.de/"
            },
            title: 'Werkstudent - Full Stack Development',
            details: 'Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.',
          },
          {
            id: 'master',
            yearStart: 2017,
            yearEnd: 2017,
            company: {
              name: "Daimler AG",
              website: "https://www.daimler.com/"
            },
            title: 'Masterand - Software Development Artificial Intelligence',
            details: 'Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.',
          },
          {
            id: 'job-daimler',
            yearStart: 2018,
            yearEnd: null,
            company: {
              name: "Daimler AG",
              website: "https://www.daimler.com/"
            },
            title: 'Software Developer Artificial Intelligence',
            details: 'Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.',
          },
        ],
      }
    }
  }
</script>

<style scoped>

  #experience {
    border-collapse: collapse;
    border: 1px solid #f2f2f2;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, .05);
  }

  .experience-left {
    text-align: left;
    padding: 20px ;
  }

  .experience-left h2 {
    display: inline-block;
    padding-left: 10px;
  }



  .step-detail.last-entry {
    border-left: 1px dashed gray;
  }

</style>

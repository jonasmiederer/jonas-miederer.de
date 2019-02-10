<template>
  <section id="education" class="row">

    <div class="col-12 col-lg-3 education-left">
      <mdc-icon class="accent" icon="school"></mdc-icon>
      <h2 class="accent">Education</h2>

      <div class="description">
        <!--Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.-->
      </div>
    </div>

    <div class="col-12 col-lg-9 education-right">

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
            <p v-html="step.details"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>


  // import MdcIcon from "vue-mdc-adapter/dist/icon";

  export default {
    name: 'Education',


    data() {
      return {
        steps: [
          {
            id: 'primary',
            yearStart: 2000,
            yearEnd: 2004,
            title: 'Primary school / Grundschule',
            details: '<a href ="https://www.luitpoldschule-schwabach.de/" target="_blank">Luitpoldgrundschule Schwabach</a>',
          },
          {
            id: 'gym',
            yearStart: 2004,
            yearEnd: 2012,
            title: 'Secondary school / Wolfram-von-Eschenbach Gymnasium',
            details: 'In Sep 2004, I started studying at the <a href ="http://www.weg-schwabach.de/cms/index.php" target="_blank">Wolfram-von-Eschenbach Gymnasium</a> in Schwabach. This school is a so called "musisches Gymnasium", which means it is specialised in musical education. Because I started playing the guitar (classical & later also electric guitar) one year before, this was a good opportunity to exercise my hobby during school and improve my guitar skills.',
          },
          {
            id: 'bachelor',
            yearStart: 2012,
            yearEnd: 2016,
            title: 'Bachelor - Media University of Applied Sciences, Stuttgart',
            details: 'After graduating from school, I decided to move to Stuttgart in order to study <span class="font-italic">Computer Science and Media (Medieninformatik)</span> at the <a href="https://www.hdm-stuttgart.de/" target="_blank">Media University of Applied Sciences (Hochschule der Medien)</a>  in Stuttgart. I completed the bachelor in Feb 2015 as B.Sc. with the grade 1.7',
          },
          {
            id: 'master',
            yearStart: 2016,
            yearEnd: 2017,
            title: 'Master - Media University of Applied Sciences, Stuttgart',
            details: "The Media University in Stuttgart is a great university. That's why I decided to continue my studies in regards to the master's program there after receiving my acceptance letter. Within 3 semesters I finished my academic career as M.Sc. with the grade 1.3",
          },
        ],
      }
    }
  }
</script>

<style scoped>

  #education {
    border-collapse: collapse;
    border: 1px solid #f2f2f2;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, .05);
  }

  .education-left {
    text-align: left;
    padding: 20px;
  }

  .education-left h2 {
    display: inline-block;
    padding-left: 10px;
  }

  svg {
    fill: currentColor;
    width: 48px;
    height: 48px;
    display: block;
    font-size: 24px;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    user-select: none;
    flex-shrink: 0;
  }

  svg text {
    fill: #fff;
    font-size: 16px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  }

  circle {
    fill: currentColor;
    width: 1em;
    height: 1em;
    display: inline-block;
    font-size: 24px;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    user-select: none;
    flex-shrink: 0;
  }

  .step-detail.last-entry {
    border: none
  }
</style>

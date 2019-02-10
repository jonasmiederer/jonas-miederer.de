<template>
  <section id="skills" class="row">

    <div class="col-12 col-lg-6 skills-left">
      <mdc-icon class="accent" icon="trending_up"></mdc-icon>
      <h2 class="accent">Skills</h2>

      <div id="expertise-wrapper">
        <div class="expertise" v-for="exp in expertise">
          <div :id="exp.id">
            <div class="expertise-head">
              <mdc-icon-toggle v-model="exp.collapsed"
                               toggle-on="expand_more"
                               toggle-off="expand_less">
              </mdc-icon-toggle>
              <h3 class="expertise-title" v-on:click="toggle(exp)"><b>{{exp.title}}</b></h3>
            </div>
            <div class="expertise-body">
              <div class="expertise-description" v-show="!exp.collapsed" v-html="exp.description"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 col-lg-6 skills-right">
      <div class="skill" v-for="skill in skills">
        <div :id="skill.id">
          <div class="skill-title"><b>{{skill.title}}</b></div>
          <div class="skill-bar">
            <div class="skill-bar_value" :style="{left: skill.level + '%'}">{{skill.level}}</div>
            <div class="skill-bar_buffer"></div>
            <div class="skill-bar_skill_wrapper" :style="{width: skill.level + '%'}">
              <div class="skill-bar_skill" v-infocus="'animate'"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

  // import MdcIcon from "vue-mdc-adapter/dist/icon";
  // import MdcIconToggle from "vue-mdc-adapter/dist/icon-toggle";

  export default {
    name: 'Skills',
    components: {
      // MdcIconToggle,
      // MdcIcon
    },


    data() {
      return {
        expanded: 'ml',
        skills: [
          {
            id: 'python',
            title: 'Python',
            level: 90,
            projects: []
          },
          {
            id: 'ai',
            title: 'AI / ML',
            level: 85,
            projects: []
          },
          {
            id: 'android',
            title: 'Android',
            level: 80,
            projects: []
          },
          {
            id: 'js',
            title: 'JavaScript / node.js',
            level: 80,
            projects: []
          },
          {
            id: 'java',
            title: 'Java',
            level: 75,
            projects: ['11f_android']
          },
          {
            id: 'cpp',
            title: 'C++',
            level: 40,
            projects: []
          }
        ],
        expertise: [
          {
            id: 'ml',
            title: 'Machine Learning / Artificial Intelligence',
            description: 'During my master studies, I primarily focused on topics related to Artificial Intelligence, Machine Learning and Data Mining. Both hands-on programming as well as theoretical background as part of the lectures helped me to gain a in-depth understanding of this discipline which is becoming increasingly important.\nCurrently, I\'m working at the Daimler AG as Software Developer for Artificial Intelligence.',
            collapsed: false
          },
          {
            id: 'webdev',
            title: 'Web Development',
            description: 'Most of the projects I\'ve worked on so far are web-driven projects. During school I started learning the basics of HTML, JavaScript and CSS. I liked how easy it is to get started with Web Development, all you need is a computer. That\'s the reason why I continued to teach myself other web technologies and languages like PHP, node.js, ruby and backend related topics like databases and design patterns. Although I worked as a full stack web developer during my internship and my side job, I always liked the backend development more than the frontend design part. ',
            collapsed: true
          },
          {
            id: 'android',
            title: 'Mobile / Android Development',
            description: 'If you already know Java, then it\'s pretty easy to get started with Android development. I first started programming Android applications as a hobby, later I did it as part of my student projects and my internship at 11Freunde. Since 2015, I\'m responsible for the development and maintenance of the <a href="https://play.google.com/store/apps/details?id=de.android.elffreunde">11Freunde App</a> with its more than 100.000+ accumulated downloads.',
            collapsed: true
          }

        ],
      }
    },
    methods: {
      toggle(exp) {
        var collapsed = exp.collapsed;
        for (var ex of this.expertise) {
          if (ex.id != exp.id) {
            collapsed ? ex.collapsed = collapsed : ex.collapsed = !collapsed;
          } else {
            ex.collapsed = !collapsed;
          }
        }
      }
    },
    directives: {
      infocus: {
        isLiteral: true,
        inserted: (el, binding, vnode) => {
          let f = () => {
            let rect = el.getBoundingClientRect()
            let inView = (
              rect.width > 0 &&
              rect.height > 0 &&
              rect.top >= 0 &&
              rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
            )
            if (inView) {
              console.log(el);
              el.classList.add(binding.value)
              window.removeEventListener('scroll', f)
            }
          }
          window.addEventListener('scroll', f)
          f()
        }
      },
    }
  }
</script>

<style scoped>

  #skills {
    border-collapse: collapse;
    border: 1px solid #f2f2f2;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, .05);
  }

  .skills-left {
    text-align: left;
    padding: 20px;
  }

  .skills-left h2 {
    display: inline-block;
    padding-left: 10px;
  }

  .skills-right {
    margin-top: 66px;
  }

  .skill {
    margin: 20px 0;
  }

  .skill-bar {
    position: relative;
    width: 100%;
    height: 10px;
  }

  .skill-title {
    text-align: left;
  }

  .skill-bar_value {
    bottom: 10px;
    position: absolute;
    -webkit-transition: width 2s; /* Safari */
    transition: width 2s;
    display: none;
  }

  .skill-bar_value:after {
    content: '%';
  }

  .skill-bar_buffer {
    height: 100%;
    width: 100%;
    background: gray;
    position: absolute;
  }

  .skill-bar_skill_wrapper {
    height: 100%;
    position: absolute;
  }

  .skill-bar_skill {
    height: 100%;
    position: absolute;
    width: 1px;
  }

  .animate {
    width: 100%;
    background: #6200ee;
    -webkit-transition: width 2s ease;
    -moz-transition: width 2s ease;
    -ms-transition: width 2s ease;
    -o-transition: width 2s ease;
    transition: width 2s ease;
  }

  #expertise-wrapper {
    margin: 20px 0;
  }

  .expertise {
    margin-bottom: 20px;
  }

  .expertise-head {
    display: flex;
    justify-content: left;
    align-items: center;
    cursor: pointer;
  }

  .expertise-body {
    text-align: left;
    padding-left: 48px;
  }
</style>

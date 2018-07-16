<template>
  <section id="portfolio" class="row">

    <mdc-dialog ref="dialog" cancel="Got it!" accept="Visit"
                @accept="onAccept" @cancel="onCancel" :accept-disabled="selectedProject.url=== null" :scrollable="false"
                title="" :width="'90vw'">
      <div class="dialog-body row">
        <div class="col-md-6 col-12 carousel-wrapper">

          <b-carousel id="portfolio-carousel"
                      style="text-shadow: 1px 1px 2px #333;"
                      controls
                      indicators
                      background="#fff"
                      :interval="0"
                      img-width="100%"
                      img-height="480"
                      v-model="slide"
                      @sliding-start="onSlideStart"
                      @sliding-end="onSlideEnd"
          >

            <div v-for="(imagePath) in selectedProject.images">
              <b-carousel-slide :img-src="imagePath" img-blank-color="#000000"></b-carousel-slide>
            </div>

            <!---->

            <!--&lt;!&ndash; Slides with custom text &ndash;&gt;-->
            <!--<b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">-->
            <!--<h1>Hello world!</h1>-->
            <!--</b-carousel-slide>-->

            <!--&lt;!&ndash; Slides with image only &ndash;&gt;-->
            <!--<b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58">-->
            <!--</b-carousel-slide>-->

            <!--&lt;!&ndash; Slides with img slot &ndash;&gt;-->
            <!--&lt;!&ndash; Note the classes .d-block and .img-fluid to prevent browser default image alignment &ndash;&gt;-->
            <!--<b-carousel-slide>-->
            <!--<img slot="img" class="d-block img-fluid w-100" width="1024" height="480"-->
            <!--src="https://picsum.photos/1024/480/?image=55" alt="image slot">-->
            <!--</b-carousel-slide>-->

            <!--&lt;!&ndash; Slide with blank fluid image to maintain slide aspect ratio &ndash;&gt;-->
            <!--<b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">-->
            <!--<p>-->
            <!--Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse-->
            <!--eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque-->
            <!--ut lacus vel interdum.-->
            <!--</p>-->
            <!--</b-carousel-slide>-->

          </b-carousel>

          <!--<div class="swiper-container">-->
          <!--&lt;!&ndash; Additional required wrapper &ndash;&gt;-->
          <!--<div class="swiper-wrapper">-->

          <!--<div class="swiper-slide" v-for="(imagePath) in selectedProject.images">-->
          <!--&lt;!&ndash; Required swiper-lazy class and image source specified in data-src attribute &ndash;&gt;-->
          <!--&lt;!&ndash;<img :data-src="imagePath" class="swiper-lazy">&ndash;&gt;-->
          <!--<img :src="imagePath">-->
          <!--&lt;!&ndash; Preloader image &ndash;&gt;-->
          <!--&lt;!&ndash;<div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>&ndash;&gt;-->
          <!--</div>-->
          <!--</div>-->
          <!--&lt;!&ndash; If we need pagination &ndash;&gt;-->
          <!--<div class="swiper-pagination"></div>-->

          <!--&lt;!&ndash; If we need navigation buttons &ndash;&gt;-->
          <!--<div class="swiper-button-prev"></div>-->
          <!--<div class="swiper-button-next"></div>-->

          <!--&lt;!&ndash; If we need scrollbar &ndash;&gt;-->
          <!--<div class="swiper-scrollbar"></div>-->
          <!--</div>-->
        </div>
        <div class="col-md-6 col-12 dialog-project-container">
          <div class="row">
            <h3 class="dialog-project-title">{{selectedProject.title}}</h3>
          </div>

          <div class="row">
            <p class="dialog-project-teaser">{{selectedProject.teaser}}</p>
          </div>
          <div class="row">
            <p class="dialog-project-description">{{selectedProject.description}}</p>
          </div>

        </div>
      </div>
      <!--{{selectedProject.title}}-->
    </mdc-dialog>

    <div class="col-12 col-md-3 portfolio-left">
      <mdc-icon class="accent" icon="code"></mdc-icon>
      <h2 class="accent">Portfolio</h2>

      <div class="description">
        Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with
        sour triple sec.All of those processors evacuate strange, modern vogons.Love is the only mind, the only
        guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those
        processors evacuate strange, modern vogons.
      </div>
    </div>

    <div class="col-12 col-md-9 portfolio-right">
      <div class="row">
        <div class="col-md-4 col-12" v-for="(project,index) in projects">
          <mdc-card id="project.id" class="pf-project mdc-card" v-bind:key="index"
                    @click.native="showDialog(project.id)">
            <mdc-card-primary-action>
              <mdc-card-media :src="'/static/img/projects/'+project.id+'/main.png'"
                              class="mdc-ripple-surface portfolio-card--bg-main"
                              data-project="aussteiger">
              </mdc-card-media>
            </mdc-card-primary-action>
            <mdc-card-header
              :title="project.title">
            </mdc-card-header>

            <mdc-card-text> {{truncatedText(project.teaser)}}</mdc-card-text>
            <mdc-card-actions>
              <mdc-chip-set>
                <mdc-chip v-for="tag in project.tags">{{tag}}</mdc-chip>
              </mdc-chip-set>
            </mdc-card-actions>
          </mdc-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  // import MdcCard from 'vue-mdc-adapter/dist/card'
  // import MdcCardMedia from 'vue-mdc-adapter/dist/card'
  // import MdcCardHeader from 'vue-mdc-adapter/dist/card'
  // import MdcDialog from 'vue-mdc-adapter/dist/dialog';
  // import MdcButton from "vue-mdc-adapter/dist/button";
  // import MdcIcon from "vue-mdc-adapter/dist/icon";

  export default {
    name: 'Portfolio',
    components: {
      // MdcIcon,
      // MdcButton,
      // MdcCardHeader,
      // MdcCardMedia,
      // MdcCard,
      // MdcDialog
    },

    data() {
      return {
        projects: {
          'aussteiger': {
            id: 'aussteiger',
            title: 'Naziaussteiger',
            url: 'http://aussteiger.11freunde.de/',
            teaser: 'Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria!',
            description: 'Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.',
            images: [
              '/static/img/projects/aussteiger/main.png',
              '/static/img/projects/aussteiger/detail_0.png',
              '/static/img/projects/aussteiger/detail_1.png',
              '/static/img/projects/aussteiger/detail_2.png',
              '/static/img/projects/aussteiger/detail_3.png',
              '/static/img/projects/aussteiger/detail_4.png',
            ],
            tags: ["Web", "Bootstrap", "JS", "Parallax"]
          },
          'dervergessenetote': {
            id: 'dervergessenetote',
            title: 'Der vergessene Tote',
            url: 'http://dervergessenetote.11freunde.de/',
            teaser: 'Racanas persuadere ',
            description: 'Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.',
            images: [
              '/static/img/projects/dervergessenetote/main.png',
              '/static/img/projects/dervergessenetote/detail_0.png',
              '/static/img/projects/dervergessenetote/detail_1.png',
              '/static/img/projects/dervergessenetote/detail_2.png',
              '/static/img/projects/dervergessenetote/detail_3.png',
            ],
            tags: ["Web", "Bootstrap", "JS", "Parallax"]
          },
          'konferenz': {
            id: 'konferenz',
            title:
              'Die 11Freunde-Konferenz',
            url: 'http://konferenz.11freunde.de/',
            teaser: 'Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria!',
            description: 'Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.',
            images: [
              '/static/img/projects/konferenz/main.png',
              '/static/img/projects/konferenz/detail_0.png',
              '/static/img/projects/konferenz/detail_1.png',
              '/static/img/projects/konferenz/detail_2.png',
              '/static/img/projects/konferenz/detail_3.png',
              '/static/img/projects/konferenz/detail_4.png',
            ],
            tags: ["Web"]
          },
          'quiz': {
            id: 'quiz',
            title:
              'Das 11Freunde-Quiz',
            url: 'http://quiz.11freunde.de/',
            teaser: 'Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria!',
            description: 'Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.',
            images: [
              '/static/img/projects/quiz/main.png',
              '/static/img/projects/quiz/detail_0.png',
              '/static/img/projects/quiz/detail_1.png',
              '/static/img/projects/quiz/detail_2.png',
              '/static/img/projects/quiz/detail_3.png',
              '/static/img/projects/quiz/detail_4.png',
              '/static/img/projects/quiz/detail_5.png',
              '/static/img/projects/quiz/detail_6.png',
              '/static/img/projects/quiz/detail_7.png',
              '/static/img/projects/quiz/detail_8.png',
              '/static/img/projects/quiz/detail_9.png',
              '/static/img/projects/quiz/detail_10.png',
            ],
            tags: ["Web"]
          },
          'statistik': {
            id: 'statistik',
            title:
              'Die Statistikhölle',
            url: 'http://statisik.11freunde.de/',
            teaser: 'Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria!',
            description: 'Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.',
            images: [
              '/static/img/projects/statistik/main.png',
              '/static/img/projects/statistik/detail_0.png',
              '/static/img/projects/statistik/detail_1.png',
              '/static/img/projects/statistik/detail_2.png',
            ],
            tags: ["Web"]
          },
          'euromap': {
            id: 'euromap',
            title:
              'Die Euromap',
            url: 'http://euromap.11freunde.de/',
            teaser: 'Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria!',
            description: 'Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.',
            images: [
              '/static/img/projects/euromap/main.png',
              '/static/img/projects/statistik/detail_0.png',
              '/static/img/projects/statistik/detail_1.png',
              '/static/img/projects/statistik/detail_2.png',
            ],
            tags: ["Web"]
          },
          'splitts': {
            id: 'splitts',
            title:
              'Splitts',
            url: null,
            teaser: 'Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria!',
            description: 'Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.',
            images: [
              '/static/img/projects/splitts/main.png',
              '/static/img/projects/splitts/detail_0.png',
              '/static/img/projects/splitts/detail_1.png',
              '/static/img/projects/splitts/detail_2.png',
              '/static/img/projects/splitts/detail_3.png',
              '/static/img/projects/splitts/detail_4.png',
              '/static/img/projects/splitts/detail_5.png',
              '/static/img/projects/splitts/detail_6.png',
              '/static/img/projects/splitts/detail_7.png',
            ],
            tags: ["Web"]
          },
          'hireme': {
            id: 'hireme',
            title:
              'hireMe',
            url: null,
            teaser: 'Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria!',
            description: 'Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.',
            images: [
              '/static/img/projects/hireme/main.png',
              '/static/img/projects/hireme/detail_0.png',
              '/static/img/projects/hireme/detail_1.png',
              '/static/img/projects/hireme/detail_2.png',
              '/static/img/projects/hireme/detail_3.png',
              '/static/img/projects/hireme/detail_4.png',
              '/static/img/projects/hireme/detail_5.png',
              '/static/img/projects/hireme/detail_6.png',
              '/static/img/projects/hireme/detail_7.png',
              '/static/img/projects/hireme/detail_8.png',
              '/static/img/projects/hireme/detail_9.png',
              '/static/img/projects/hireme/detail_10.png',
              '/static/img/projects/hireme/detail_11.png',
              '/static/img/projects/hireme/detail_12.png',
              '/static/img/projects/hireme/detail_13.png',
              '/static/img/projects/hireme/detail_14.png',
            ],
            tags: ["Web"]
          },
          'demoscopia': {
            id: 'demoscopia',
            title:
              'Demoscopia',
            url: null,
            teaser: 'Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria!',
            description: 'Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.',
            images: [
              '/static/img/projects/demoscopia/main.png',
              '/static/img/projects/demoscopia/detail_0.png',
              '/static/img/projects/demoscopia/detail_1.png',
              '/static/img/projects/demoscopia/detail_2.png',
              '/static/img/projects/demoscopia/detail_3.png',
              '/static/img/projects/demoscopia/detail_15.png',
              '/static/img/projects/demoscopia/detail_4.png',
              '/static/img/projects/demoscopia/detail_5.png',
              '/static/img/projects/demoscopia/detail_6.png',
              '/static/img/projects/demoscopia/detail_7.png',
              '/static/img/projects/demoscopia/detail_8.png',
              '/static/img/projects/demoscopia/detail_9.png',
              '/static/img/projects/demoscopia/detail_10.png',
              '/static/img/projects/demoscopia/detail_11.png',
              '/static/img/projects/demoscopia/detail_12.png',
              '/static/img/projects/demoscopia/detail_13.png',
              '/static/img/projects/demoscopia/detail_14.png',
            ],
            tags: ["Web"]
          },
          'smartcare': {
            id: 'smartcare',
            title:
              'SmartCare',
            url: null,
            teaser: 'Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria!',
            description: 'Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.',
            images: [
              '/static/img/projects/smartcare/main.png',
              '/static/img/projects/smartcare/detail_0.png',
              '/static/img/projects/smartcare/detail_1.png',
              '/static/img/projects/smartcare/detail_2.png',
              '/static/img/projects/smartcare/detail_3.png',
              '/static/img/projects/smartcare/detail_4.png',
              '/static/img/projects/smartcare/detail_5.png',
              '/static/img/projects/smartcare/detail_6.png',
              '/static/img/projects/smartcare/detail_7.png',
              '/static/img/projects/smartcare/detail_8.png',
              '/static/img/projects/smartcare/detail_9.png',
              '/static/img/projects/smartcare/detail_10.png',
            ],
            tags: ["Web"]
          },
          'smartchart': {
            id: 'smartchart',
            title:
              'SmartChart',
            url: null,
            teaser: 'Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria!',
            description: 'Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.',
            images: [
              '/static/img/projects/smartchart/main.png',
            ],
            tags: ["Web"]
          },
          'website': {
            id: 'website',
            title:
              'Website',
            url: null,
            teaser: 'Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria!',
            description: 'Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.',
            images: [
              '/static/img/projects/website/main.png',
            ],
            tags: ["Web"]
          },
          '11f_android': {
            id: '11f_android',
            title:
              '11Freunde News',
            url: "https://play.google.com/store/apps/details?id=de.android.elffreunde",
            teaser: 'Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria!',
            description: 'Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.',
            images: [
              '/static/img/projects/11f_android/main.png',
              '/static/img/projects/11f_android/detail_0.png',
              '/static/img/projects/11f_android/detail_1.png',
              '/static/img/projects/11f_android/detail_2.png',
              '/static/img/projects/11f_android/detail_3.png',
              '/static/img/projects/11f_android/detail_4.png',
              '/static/img/projects/11f_android/detail_5.png',
            ], tags: ["Web"]
          },
          'java': {
            id: 'java',
            title:
              'This is Java!',
            url: "http://java.11freunde.de/",
            teaser: 'Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria!',
            description: 'Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.',
            images: [
              '/static/img/projects/java/main.png',
              '/static/img/projects/java/detail_0.png',
              '/static/img/projects/java/detail_1.png',
              '/static/img/projects/java/detail_2.png',
              '/static/img/projects/java/detail_3.png',
              '/static/img/projects/java/detail_4.png',
              '/static/img/projects/java/detail_5.png',
              '/static/img/projects/java/detail_6.png',
            ],
            tags: ["Web"]
          },
          'adventskalender': {
            id: 'adventskalender',
            title:
              'Rätsel-Adventskalender',
            url: "https://jonasmie.github.io/adventskalender/",
            teaser: 'Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria!',
            description: 'Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.',
            images: [
              '/static/img/projects/adventskalender/main.png',
              '/static/img/projects/adventskalender/detail_0.png',
              '/static/img/projects/adventskalender/detail_1.png',
              '/static/img/projects/adventskalender/detail_2.png',
            ],
            tags: ["Web"]
          },
          'bardora': {
            id: 'bardora',
            title:
              'Bardora',
            url: null,
            teaser: 'Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria!',
            description: 'Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.',
            images: [
              '/static/img/projects/bardora/main.png',
              '/static/img/projects/bardora/detail_0.png',
              '/static/img/projects/bardora/detail_1.png',
              '/static/img/projects/bardora/detail_2.png',
              '/static/img/projects/bardora/detail_3.png',
              '/static/img/projects/bardora/detail_4.png',
              '/static/img/projects/bardora/detail_5.png',
              '/static/img/projects/bardora/detail_6.png',
              '/static/img/projects/bardora/video.mp4',
            ],
            tags: ["Web"]
          },
          'shopping': {
            id: 'shopping',
            title:
              'Geil shoppen',
            url: null,
            teaser: 'Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria!',
            description: 'Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.',
            images: [
              '/static/img/projects/shopping/main.png',
              '/static/img/projects/shopping/detail_0.png',
              '/static/img/projects/shopping/detail_1.png',
              '/static/img/projects/shopping/detail_2.png',
              '/static/img/projects/shopping/detail_3.png',
              '/static/img/projects/shopping/detail_4.png',
              '/static/img/projects/shopping/detail_5.png',
            ],
            tags: ["Web"]
          },
          'innoprojekt': {
            id: 'innoprojekt',
            title:
              'Innovationsprojekt',
            url: null,
            teaser: 'Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria!',
            description: 'Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.',
            images: [
              '/static/img/projects/innoprojekt/main.png',
              '/static/img/projects/innoprojekt/detail_0.png',
              '/static/img/projects/innoprojekt/detail_1.png',
              '/static/img/projects/innoprojekt/detail_2.png',
              '/static/img/projects/innoprojekt/detail_3.png',
              '/static/img/projects/innoprojekt/detail_4.png',
            ],
            tags: ["Web"]
          },
          'lorry': {
            id: 'lorry',
            title:
              'Lorry',
            url: null,
            teaser: 'Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria!',
            description: 'Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.',
            images: [
              '/static/img/projects/lorry/main.png',
              '/static/img/projects/lorry/detail_0.png',
            ],
            tags: ["Web"]
          },
          'midi': {
            id: 'midi',
            title:
              'DIY Midi Controller',
            url: null,
            teaser: 'Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria!',
            description: 'Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.',
            images: [
              '/static/img/projects/midi/main.png',
              '/static/img/projects/lorry/detail_0.png',
            ],
            tags: ["Web"]
          },
          'reflectoah': {
            id: 'reflectoah',
            title:
              'Reflectoah',
            url: null,
            teaser: 'Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria!',
            description: 'Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.',
            images: [
              '/static/img/projects/reflectoah/main.png',
            ],
            tags: ["Web"]
          }
        },
        selectedProject: {id: '', title: ''},
        slide: 0,
        sliding: null
      }
    },
    methods:
      {
        showDialog: function (id) {
          this.selectedProject = this.projects[id];
          this.$refs.dialog.show();
        }
        ,
        onAccept() {
          window.location.href = this.selectedProject.url
        },
        onCancel() {

        },
        onSlideStart(slide) {
          this.sliding = true
        },
        onSlideEnd(slide) {
          this.sliding = false
        },
        truncatedText(text) {

          if (text !== undefined && text.length > 100) {
            text = text.substr(0, 100);
            text += "..."
          }
          return text;
        }
      }
  }
</script>

<style scoped>

  #portfolio {
    border-collapse: collapse;
    border: 1px solid #f2f2f2;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, .05);
  }

  .portfolio-left {
    text-align: left;
    padding: 20px;
  }

  .portfolio-left h2 {
    display: inline-block;
    padding-left: 10px;
  }

  .portfolio-right {
    padding: 20px;
  }

  .portfolio-right > .row > div {
    padding: 7px;
  }

  .portfolio-right .pf-project {
    /*padding:10px;*/
    max-height: 350px;
  }



  .portfolio-card--bg-main {
    height: 21.875rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .mdc-chip {
    margin-right: 5px;
  }

  .mdc-chip__text {
    font-size: 11px;
  }

  .swiper-container {
    width: 600px;
    height: 300px;
  }

  .mdc-dialog__surface {
    max-width: 90% !important;
  }

  .swiper-container {
    width: 100%;
    height: 100%;
  }

  .mdc-dialog__body {
    min-height: 250px;
  }

  .dialog-body {
    height: 100%;
  }

  .dialog-project-container {
    padding: 0 40px;
  }

  .dialog-project-title {
    float: left;
  }

  .dialog-project-button {
    float: right;
  }

  .dialog-project-teaser {
    text-align: left;
    border-left: 5px solid #018786;
    padding-left: 5px;
    margin-top: 50px;
  }

  .dialog-project-description {
    text-align: left;
  }

  .carousel-wrapper {
    display: flex;
    align-items: center;
  }
</style>

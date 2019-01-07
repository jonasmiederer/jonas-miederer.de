<template>
  <section id="blog" class="row">

    <mdc-dialog ref="dialog" cancel="Got it!"
                @cancel="onCancel" :scrollable="false"
                title="" :width="'90vw'">
      <div class="dialog-body row">

        <div class="col-12 dialog-blog-container">
          <div class="row">
            <h3 class="dialog-blog-title">{{selectedBlog.title}}</h3>
          </div>

          <div class="row">
            <p class="dialog-blog-teaser">{{selectedBlog.teaser}}</p>
          </div>
          <div class="row">
            <p class="dialog-blog-description">{{selectedBlog.description}}</p>
          </div>

        </div>
      </div>
    </mdc-dialog>

    <div class="col-12 col-lg-3 portfolio-left">
      <mdc-icon class="accent" icon="comment"></mdc-icon>
      <h2 class="accent">Blog</h2>

      <div class="description">
        Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with
        sour triple sec.All of those processors evacuate strange, modern vogons.Love is the only mind, the only
        guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those
        processors evacuate strange, modern vogons.
      </div>
    </div>

    <div class="col-12 col-lg-9 portfolio-right">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4 " v-for="(blog,index) in blogs">
          <mdc-card id="blog.id" class="pf-blog mdc-card" v-bind:key="index"
                    @click.native="showDialog(blog.id)">
            <mdc-card-primary-action>
              <mdc-card-media :src="'/static/img/blog/'+blog.id+'/main.png'"
                              class="mdc-ripple-surface portfolio-card--bg-main">
              </mdc-card-media>
            </mdc-card-primary-action>
            <mdc-card-header
              :title="blog.title">
            </mdc-card-header>

            <mdc-card-text> {{truncatedText(blog.teaser)}}</mdc-card-text>
            <mdc-card-actions>
              <mdc-chip-set>
                <mdc-chip v-for="tag in blog.tags">{{tag}}</mdc-chip>
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
    name: 'Blog',
    components: {

    },

    data() {
      return {
        blogs: {
          'fooling_ai': {
            id: 'fooling_ai',
            title: 'Fooling the Intelligence',
            url: 'https://blog.mi.hdm-stuttgart.de/index.php/2017/08/27/fooling-the-intelligence/',
            teaser: 'Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria!',
            description: 'Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.',
            images: [
              '/static/img/blog/fooling_ai/main',
            ]
          },
        },
        selectedBlog: {id: '', title: ''},
      }
    },
    methods:
      {
        showDialog: function (id) {
          this.selectedBlog = this.blogs[id];
          this.$refs.dialog.show();
        }
        ,
        onCancel() {
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

  #blog {
    border-collapse: collapse;
    border: 1px solid #f2f2f2;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, .05);
  }

  .portfolio-left {
    text-align: left;
    padding: 20px ;
  }

  .portfolio-left h2 {
    display: inline-block;
    padding-left: 10px;
  }

  .portfolio-right{
    padding: 20px;
  }


  .portfolio-right > .row > div {
    padding: 7px;
  }

  .portfolio-right .pf-blog{
    /*padding:10px;*/
    max-height: 350px;
  }

  .portfolio-right .pf-blog img {
    /*width: 100%;*/
    /*height: 100%;*/
    /*!*max-height: 100%;*!*/
    /*object-fit: cover;*/
  }

  .portfolio-card--bg-main {
    height: 21.875rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .mdc-card__primary {
    /*background: rgba(0, 0, 0, .4);*/
  }

  .mdc-chip-set .mdc-chip {
    margin: 5px 0;
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

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #000;
  }

  .swiper-slide img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    position: absolute;
    left: 50%;
    top: 50%;
  }

  .mdc-dialog__body {
    min-height: 250px;
  }

  .dialog-body {
    height: 100%;
  }

  .dialog-blog-container {
    padding: 0 40px;
  }

  .dialog-blog-title {
    float: left;
  }

  .dialog-blog-button {
    float: right;
  }

  .dialog-blog-teaser {
    text-align: left;
    border-left: 5px solid #018786;
    padding-left: 5px;
    margin-top: 50px;
  }

  .dialog-blog-description {
    text-align: left;
  }
</style>

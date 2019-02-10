<template>
  <section id="blog" class="row">

    <mdc-dialog ref="dialog" cancel="Close" accept="View"
                @cancel="onCancel" @accept="onAccept" :scrollable="false"
                title="" :width="'90vw'" :accept-raised="true">
      <div class="dialog-body row">

        <div class="col-12 dialog-blog-container">
          <div class="row">
            <h3 class="dialog-blog-title">{{selectedBlog.title}}</h3>
          </div>

          <div class="row">
            <p class="dialog-blog-teaser dialog-teaser">{{selectedBlog.teaser}}</p>
          </div>
          <div class="row">
            <p class="dialog-blog-description">{{selectedBlog.description}}</p>
          </div>

        </div>
      </div>
    </mdc-dialog>

    <div class="col-12 col-lg-3 portfolio-left">
      <mdc-icon class="accent" icon="comment"></mdc-icon>
      <h2 class="accent">Blog / Papers</h2>

      <div class="description">
        During my studies I wanted to gain as much practical experience as possible, but of course practical experience
        alone won't get you far. To every
        academic education belongs an important part of theoretical research and scientific work. Here you can find some
        of my authored and co-authored papers and blog posts written during my master's program.
      </div>
    </div>

    <div class="col-12 col-lg-9 portfolio-right">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4 " v-for="(blog,index) in blogs">
          <mdc-card id="blog.id" class="pf-blog mdc-card" v-bind:key="index"
                    @click.native="showDialog(blog.id)">
            <mdc-card-primary-action>
              <mdc-card-media :src="(blog.external_img) ?blog.images[0]: '/static/img/blog/'+blog.id+'/main.png' "
                              class="mdc-ripple-surface portfolio-card--bg-main">
              </mdc-card-media>
            </mdc-card-primary-action>
            <mdc-card-header
              :title="blog.title">
            </mdc-card-header>

            <mdc-card-text> {{truncatedText(blog.teaser)}}</mdc-card-text>
            <mdc-card-actions>
              <mdc-chip-set>
                <mdc-chip v-for="(tag,index) in blog.tags" :key="tag">{{tag}}</mdc-chip>
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
    components: {},

    data() {
      return {
        blogs: {
          'fooling_ai': {
            id: 'fooling_ai',
            title: 'Fooling the Intelligence',
            url: 'https://blog.mi.hdm-stuttgart.de/index.php/2017/08/27/fooling-the-intelligence/',
            teaser: '"The rise of powerful AI will either be the best or the worst thing ever to happen to humanity. We do not yet know which. The research done by this centre is crucial to the future of our civilisation and of our species." - Stephen Hawking',
            description: 'Imagine autonomous vehicles mistake stop signs for yield signs, computer-generated voices control your phone and malware is manipulated in order to be classified as harmless. Sounds scary? It is. And it is actually a real danger of machine learning models, exploited by so called Adversarial Machine Learning (AML) attacks. In this blog post, I\'m explaining what AML actually is, how such attacks can be executed and how we can protect against them.',
            images: [
              '/static/img/blog/fooling_ai/main',
            ],
            tags: ["Blog post", "English"]
          },
          'innovation': {
            id: 'innovation',
            title: 'Innovationsprojekt',
            url: 'static/files/papers/blackbox.pdf',
            teaser: 'Untersuchungen zur Realisierung eines Flugschreibers für unbemannte Flugobjekte im Modellflug',
            description: 'Diese Projektdokumentation beschreibt die Erkenntnisse und Erfahrungen bei der Durchführung des Innovationsprojekts zur Untersuchung der Realisierung eines Flugschreibers für unbemannte Flugobjekte im Modellflug.' +
              'Neben einer Marktanalyse wird vor allem der Frage nach einer zuverlässigen und autarken Energieversorgung nachgegangen und in mehreren Feldtests untersucht. Hierbei liegt der Fokus auf einem Energy-Harvesting-Konzept, welches verschiedene Kopplungen zur Energiegewinnung zwischen Motor und Flugschreiber untersucht.' +
              'Als weiterer Schwerpunkt wird die Datenhaltung des Flugschreibers untersucht. Hierbei werden bestehende Technologien, wie beispielsweise die Trusted-Computing-Plattform betrachtet, um mithilfe dieser ein zuverlässiges Modell zur Datenhaltung zu konzipieren und anhand verschiedener Sicherheitsziele die zu erfassenden Flugdaten zu kategorisieren.' +
              'Bei der Positionsbestimmung wird auf die besonderen Eigenschaften des GPS-Standards und auf die Versuche mit verschiedenen GPS-Modulen eingegangen. Mithilfe eines Mikrocontrollers wurde ein Prototyp entwickelt, der die empfangenen GPS-Daten auswertet, signiert und auf ein Speichermedium loggt. Da die Umsetzung jedoch auch hier durch die Einschränkungen der verfügbaren Hardware beeinträchtigt wurde, wurde daher auch der Hauptfokus auf die theoretischen Grundlagen des Global Positioning Systems gelegt.',
            images: [
              '/static/img/projects/innoprojekt/main.png',
            ],
            external_img: true,
            tags: ["Paper", "German"]
          },
          'triangle': {
            id: 'triangle',
            title: 'Triangle',
            url: 'static/files/papers/triangle.pdf',
            teaser: 'Schaffen einer positiven Wahrnehmung beim Einkaufen durch Triangle - Ist es möglich, eine positive affektive Reaktion hinsichtlich des Einkaufserlebnisses durch gesteigerte Kontrolle und Immersion des Kunden hervorzurufen?',
            description: 'Seit knapp 150 Jahren besteht der Einkaufsprozess nahezu unverändert in seiner ursprünglichen Form. Allerdings sieht sich der klassische Einzelhandel durch das Internet zukünftig unter massiven Druck gesetzt und steht unter Zugzwang. Die sinkenden Preise sowie die rasante Entwicklung von Tablets und Touchscreens würden es dem Einzelhandel zwar ermöglichen den Kunden innovativer und mit neuen Ideen zu begegnen, jedoch werden diese Potentiale noch nicht erkannt oder umgesetzt. \n' +
              'In Verbindung mit einer Smartphone- oder Tablet-Anwendung besitzt der Einzelhändler prinzipiell die Möglichkeit ein personalisiertes Einkaufserlebnis zu schaffen, mit dem er die Kunden stärker in ihren Einkauf einbindet. Für die Kunden kann die Verwendung einer derartigen Anwendung dagegen zu einem Anstieg der wahrgenommenen Kontrolle während des Einkaufs führen.\n' +
              'Im Rahmen dieser Arbeit wird ein mögliches Konzept und ein dazugehöriger Prototyp vorgestellt, mithilfe dessen überprüft wurde, ob durch Kontrolle und Immersion eine positive affektive Reaktion hinsichtlich des Einkaufserlebnisses hervorgerufen werden kann, um somit der Monotonie während des Einkaufs entgegenzuwirken. Für die Evaluation wurde der standardisierte Fragebogen AtrrakDiff verwendet und abhängig von den Antworten der Probanden spezifische qualitative Fragen gestellt.\n' +
              'Die Evaluation zeigte, dass es bei der Artikelauswahl zu einer stärkeren Immersion und einem gesteigerten Gefühl der Kontrolle kam. Das Gefühl der Kontrolle beim Bezahlvorgang dagegen sank. Es ist daher prinzipiell möglich, eine positive affektive Reaktion auszulösen, allerdings wurden dabei auch negative Eindrücke gemessen.',
            images: [
              '/static/img/projects/shopping/main.png',
            ],
            external_img: true,
            tags: ["Paper", "German"]
          },
          'scale': {
            id: 'scale',
            title: 'Scale smart, not hard',
            url: 'static/files/papers/scale_smart_not_hard.pdf',
            teaser: 'In this paper some theoretical ideas are presented that may improve the usage of cloud computing services.',
            description: 'In this paper some theoretical ideas are presented that may improve the usage of cloud computing services. Many users feel overburdened or do not have sufficient knowledge to configure their cloud service setup correctly. Other users, especially large-scale customers, have to manage a large amount of services, which makes it hard to constantly maintain and adjust to current needs.\n' +
              'According to the model of Google Cloud Platform, an exemplary architecture is described with its core components. This architecture represents the status quo, a design that is leveraged similarly by other other cloud providers like Amazon or Microsoft. Based on these components, new theoretical ideas are introduced, described and evaluated. The approaches are primary data-driven and based on machine learning techniques. By this means, an adaptive, optimal configured system can be created that helps the users to run their services more easily and with less management effort. \n' +
              'Although not all approaches would be completely useful, some ideas have the potential to improve scalability, resilience, costs and user experience of running cloud services. ',
            images: [
              '/static/img/blog/scale/main.png',
            ],
            tags: ["Paper", "English"]
          },
          'google': {
            id: 'google',
            title: 'Google - Network strategies & architectures',
            url: 'static/files/papers/google.pdf',
            teaser: 'In this paper, the key concepts of Google’s networks and its components are described and evaluated. In order to receive an impression of what the com- pany actually has to manage, an overview over the size and traffic share is given, although Google does not provide any numbers, thus an exact estimation is not possible.',
            description: 'Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.',
            images: [
              'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png',
            ],
            external_img: true,
            tags: ["Paper", "English"]
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
        onAccept() {
          window.open(
            this.selectedBlog.url, '_blank'
          );
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

  .portfolio-right .pf-blog {
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

  .dialog-blog-description {
    text-align: left;
  }
</style>

<template>
  <section id="portfolio" class="row">

    <mdc-dialog ref="dialog" cancel="Close" accept="Visit"
                @accept="onAccept" @cancel="onCancel" :accept-disabled="selectedProject.url=== null" :scrollable="false"
                title="" :width="'90vw'" :accept-raised="true">
      <div class="dialog-body row">
        <div class="col-md-6 col-12 carousel-wrapper">
          <swiper :options="swiperOption">
            <swiper-slide v-for="(imagePath) in selectedProject.images" :key="imagePath">

              <video v-if="imagePath.endsWith('mp4')" class="img-fluid" :src="imagePath"></video>
              <img v-else class="img-fluid" :src="imagePath"></img>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>

          </swiper>


        </div>
        <div class="col-md-6 col-12 dialog-project-container">
          <div class="row">
            <h3 class="dialog-project-title">{{selectedProject.title}}</h3>
          </div>

          <div class="row">
            <p class="dialog-project-teaser dialog-teaser" v-html="selectedProject.teaser"></p>
          </div>
          <div class="row">
            <p class="dialog-project-description" v-html="selectedProject.description"></p>
          </div>

        </div>
      </div>
      <!--{{selectedProject.title}}-->
    </mdc-dialog>

    <div class="col-12 col-lg-3 portfolio-left">
      <mdc-icon class="accent" icon="code"></mdc-icon>
      <h2 class="accent">Portfolio</h2>

      <div class="description">
        <p>
          Developing new applications, working with innovative technologies and coding in general is my passion.
        </p>
        <p>
          During my bachelor's program, I primary focused on web development and related technologies, which is also the
          field of responsibility within my sidejob at 11Freunde.
        </p>

        <p>
          But I'm not only working on web development, but I'm also enthusiastic about things like IoT, embedded
          systems or mobile applications.
        </p>
        Here you can find some of my works I finished in the past, I hope you like it.
      </div>
    </div>

    <div class="col-12 col-lg-9 portfolio-right">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4 " v-for="(project,index) in projects">
          <mdc-card id="project.id" class="pf-project mdc-card" v-bind:key="index"
                    @click.native="showDialog(project.id)">
            <!--<div>-->
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
            <!--</div>-->
            <mdc-card-actions>
              <mdc-chip-set>
                <mdc-chip v-for="tag in project.tags" >{{tag}}</mdc-chip>
              </mdc-chip-set>
            </mdc-card-actions>
          </mdc-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

  export default {
    name: 'Portfolio',
    components: {

    },


    data() {
      return {
        projects: {
          'oezil': {
            id: 'oezil',
            title:
              'In Pieces',
            url: "http://oezil.11freunde.de/english",
            teaser: 'The Erdogan photos, a world cup debacle, Özil’s retirement and a debate about everyday racism in Germany. The Özil case polarised a nation. Chronicle of a fateful summer.',
            description: 'In Pieces (Der Bruch) is a long and detailed dossier about Mesut Özil, the german football player with turkish roots. In 2018, the whole nation discussed, whether is was ok to meet the turkish president, shake his hands and shoot a photo with him. After the disastrous performance of the german national team, he was even blamed for the early knockout at the World Cup 2018.\nRon Ulrich and Andreas Bock wrote about this fateful summer, I was responsible for the technical implementation.',
            images: [
              '/static/img/projects/oezil/main.png',
              '/static/img/projects/oezil/detail_0.png',
              '/static/img/projects/oezil/detail_1.png',
              '/static/img/projects/oezil/detail_2.png',
              '/static/img/projects/oezil/detail_3.png',
              '/static/img/projects/oezil/detail_4.png',
              '/static/img/projects/oezil/detail_5.png',
              '/static/img/projects/oezil/detail_6.png',
            ],
            tags: ["Web", "Bootstrap", "JS", "Parallax", "Frontend"]
          },
          'java': {
            id: 'java',
            title:
              'This is Java!',
            url: "http://java.11freunde.de/english",
            teaser: 'Since 1995 over 70 indonesian football fans died. For the Persija Jakarta ultras, every away trip could be their last. 11FREUNDE takes a road trip through a war zone',
            description: 'Everyone knows about the english Premier League, La Liga in Spain or the german Bundesliga. But what do you know about indonesian football? A football culture with one of the most hardcore fans of the world. Where fans do everything to support their club. And by everything, I mean everything: Since 1995, the indonesian football has seen 70 deaths. Ron Ulrich writes about a roadtrip through the country, I was responsible for the technical implementation.',
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
            tags: ["Web", "Bootstrap", "JS", "Parallax", "Frontend"]
          },
          // 'reflecthoa': {
          //   id: 'reflecthoa',
          //   title:
          //     'Reflecthoa',
          //   url: null,
          //   teaser: 'Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria!',
          //   description: 'Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.',
          //   images: [
          //     '/static/img/projects/reflecthoa/main.png',
          //   ],
          //   tags: ["Embedded", "Side Project", "Gesture Recognition", "Smart Mirror", "Python", "C++"]
          // },
          'website': {
            id: 'website',
            title:
              'Website',
            url: "http://jonas-miederer.de",
            teaser: 'My personal website including my portfolio, papers, skills and other useless information.',
            description: 'Here you can find some information about me. Information about my education and my experience. You can see samples from my portfolio as well as my blog posts and research papers. Furthermore I give an overview over my skills and you can contact me here. So feel free to visit my homepage.' +
              '<br><br>' +
              'This website is not based on any templates, but was developed from scratch. As framwork I used Vue.js.',
            images: [
              '/static/img/projects/website/main.png',
            ],
            tags: ["Web", "Vue.js", "Bootstrap", "Material Design"]
          },
          'aussteiger': {
            id: 'aussteiger',
            title: 'Über das Spiel zum Kampf',
            url: 'http://aussteiger.11freunde.de/',
            teaser: 'Neonazis rekrutieren ihren Nachwuchs in Fanszenen. Wie geraten Jugendliche über den Fußball in den Rechtsextremismus? \n' +
              'Drei Aussteiger erzählen',
            description: 'Neonazis rekrutieren ihren Nachwuchs in Fanszenen. Wie geraten Jugendliche über den Fußball in den Rechtsextremismus? In unserer großen Multimedia-Reportage in Zusammenarbeit mit Lauscherlounge erzählen drei Aussteiger ihre Geschichte.' +
              '<br><br>' +
              'Ron Ulrich writes about Nazis in football and how they recruit young people to follow their ideology. The combination of the great illustrations by Florian Bayer and the audio coverage by Lauscherlounge add the perfect flair to this text. I was responsible for the technical implementation.',
            images: [
              '/static/img/projects/aussteiger/main.png',
              '/static/img/projects/aussteiger/detail_0.png',
              '/static/img/projects/aussteiger/detail_1.png',
              '/static/img/projects/aussteiger/detail_2.png',
              '/static/img/projects/aussteiger/detail_3.png',
              '/static/img/projects/aussteiger/detail_4.png',
            ],
            tags: ["Web", "Bootstrap", "JS", "Parallax", "Frontend"]
          },
          'dervergessenetote': {
            id: 'dervergessenetote',
            title: 'Der vergessene Tote',
            url: 'http://dervergessenetote.11freunde.de/',
            teaser: '1988 wurde ein Fan des 1. FC Saarbrücken beim Spiel gegen Schalke tödlich verletzt. Das Gericht verurteilte einen Hooligan von Borussia Mönchengladbach. \n' +
              'Der Fall gibt bis heute Rätsel auf',
            description: 'Im deutschen Fußball waren bisher zwei Todesopfer bekannt. Doch es gibt ein drittes: Im September 1988, vor exakt 30 Jahren, starb ein Saarbrücker Fan bei einer Schlägerei. Die Spur führt bis zu »Hogesa«.' +
              '<br><br>' +
              'This report by Ron Ulrich is definitely worth a read and the impressive illustrations by Andrew Thomson perfectly fit to the mood of the text. I was responsible for the technical implementation.',
            images: [
              '/static/img/projects/dervergessenetote/main.png',
              '/static/img/projects/dervergessenetote/detail_0.png',
              '/static/img/projects/dervergessenetote/detail_1.png',
              '/static/img/projects/dervergessenetote/detail_2.png',
              '/static/img/projects/dervergessenetote/detail_3.png',
            ],
            tags: ["Web", "Bootstrap", "JS", "Parallax", "Frontend"]
          },
          'konferenz': {
            id: 'konferenz',
            title:
              'Die 11Freunde-Konferenz',
            url: 'http://konferenz.11freunde.de/',
            teaser: 'Alle Spiele, alle Tore, Liveticker, Stehtribüne und die besten Tweets – Echtzeit-Liveticker zur Bundesliga mit Social-Feed',
            description: 'Humorous, social, exciting, interactive and always with the most useful and useless facts for the saturday afternoon games: That is the 11Freunde Bundesligakonferenz. All important events such as goals, penalties or substitutions are brought to you in realtime with comments by an 11Freunde editor. The Twitter feed collects the best and merriest contributions from the web, while the survey reflects the opinions of the users.' +
              '<br><br>' +
              'In this project I was responsible for the backend and business logic, developed with node.js, mongoDB and socket.io for realtime communication.',
            images: [
              '/static/img/projects/konferenz/main.png',
              '/static/img/projects/konferenz/detail_0.png',
              '/static/img/projects/konferenz/detail_1.png',
              '/static/img/projects/konferenz/detail_2.png',
              '/static/img/projects/konferenz/detail_3.png',
              '/static/img/projects/konferenz/detail_4.png',
            ],
            tags: ["Web", "node.js", "mongoDB", "Frontend", "Backend", "socket.io", "Live Data Processing"]
          },
          'quiz': {
            id: 'quiz',
            title:
              'Das 11Freunde-Quiz',
            url: 'http://quiz.11freunde.de/',
            teaser: 'Das große 11Freunde Quiz. Stelle im täglichen Quiz dein Fußballwissen unter Beweis',
            description: 'Für jede richtige Antwort gibt es maximal 10 Punkte, insgesamt hast Du 20 Sekunden Zeit, um die Frage richtig zu beantworten. Die Punkte vergeben wir nach dem Prinzip »Der Schnellste siegt«. Das heißt: Gibst Du in den Sekunden 20 bis 16 die richtige Antwort erhältst Du 10 Punkte, erfolgt die richtige Antwort in den Sekunden 15-11 gibt es 9 Punkte, alle richtigen Antworten ab der zehnten Sekunde erhalten acht Punkte. Am Ende werden alle Punkte addiert und du erhältst dein Gesamtergebnis und du siehst, wo du dich mit deinen Punkten im Gesamtverhältnis aller Quizteilnehmer einordnen kannst.\n' +
              '<br><br>' +
              'In this project I was responsible for the backend logic and database design/integration.',
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
            tags: ["Web", "PHP", "Backend", "MySQL", "Interactive"]
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
            tags: ["Web", "PHP", "Backend", "Frontend", "MySQL", "Multimedia", "Data Aggregation"]
          },
          'euromap': {
            id: 'euromap',
            title:
              'Die Euromap',
            url: 'https://www.11freunde.de/europakarte',
            teaser: 'Zusammen mit Hyundai gehen wir auf die Suche nach der Fankultur in Europa. Und du kannst dabei sein. In unserer Karte gibt es alle aktuellen Reisefotos, Videoreportagen und Geschichten von unserer Europareise auf einen Blick. ',
            description: 'Die 11FREUNDE-Europareise – Geh mit uns auf den Fankultur-Roadtrip\n' +
              'Zusammen mit Hyundai gehen wir auf die Suche nach der Fankultur in Europa. Und du kannst dabei sein. In unserer Karte gibt es alle aktuellen Reisefotos, Videoreportagen und Geschichten von unserer Europareise auf einen Blick. <br><br>' + 'Und das sind unsere Reiserouten: <br>' +
              'Die »Blaue Route«: Köln – Beveren – Lüttich – Paris<br>' +
              'Die »Grüne Route«: München – Wien – Bratislava – Budapest – München<br>' +
              'Die »Rote Route«: Berlin – Prag – Berlin<br>' +

              '<br><br>' +
              'This project was part of the 11Freunde Europe Jounrney during the UEFA Euro 2016. I developed the Euromap based on PHP in the backend and Mapbox for the design of the map.',
            images: [
              '/static/img/projects/euromap/main.png',
              '/static/img/projects/euromap/detail_0.png',
              '/static/img/projects/euromap/detail_1.png'
            ],
            tags: ["Web", "PHP", "Backend", "Frontend", "Mapbox", "Social Media Aggregation", "Interactive"]
          },
          'splitts': {
            id: 'splitts',
            title:
              'Splitts',
            url: null,
            teaser: 'Splitts - The easy way to share costs and expenses',
            description: 'Tired of those awkward cost splitting moments with your friends? Splitts lets you just focus on having fun during your group activities. No account is needed, you can create ad-hoc groups on the fly. Our algorithm calculates the share for each participant and tracks, whether it was already payed. For Splitts no app is required, because it was developed as a mobile-optimized web app.' +
              '<br><br>' +
              'In this project I was responsible for the backend development of the web app in node.js and the mongoDB database. The focus was laid on realtime events with socket.io and the no-account philosophy with sessions. ',
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
            tags: ["Web app", "node.js", "mongoDB", "socket.io", "Backend", "Student project"]
          },
          'hireme': {
            id: 'hireme',
            title:
              'hireMe',
            url: null,
            teaser: 'hireMe - Bewerbung mit nur einem Klick',
            description: 'Vergiss den Wechsel zwischen Stellenanzeige, Jobportal, Schreibprogramm, Anhängen und E-Mail. Mit dem hireMe-Button bewirbst du dich mit nur einem Klick.' +
              '<br><br>' +
              'Zentrale Datenablage: Deinen Lebenslauf, deine Arbeitsproben, Empfehlungsschreiben, und Zertifikate speicherst du jetzt sicher online ab. Verfügbar, wenn du sie brauchst. Gleichzeitig behältst du hier den Überblick über deine Bewerbungen.' +
              '<br><br>' +
              'hireMe-Button: Binden Sie schnell und einfach den hireMe-Button auf Ihrer Website ein, um potenziellen Kandidaten den Bewerbungs-Prozess zu erleichtern.' +
              '<br><br>' +
              'Analytics: Wo kommen meine Bewerber her? Wie viele Interessenten bewerben sich auch? Mit den Analytics lassen sich diese Kennzahlen analysieren und optimieren.' +
              '<br><br>' +
              'In this student project I was responsible for the backend development and database design and integration.'
            ,
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
            tags: ["Web", "PHP", "Yii", "Student Project", "MySQL", "Business Logic"]
          },
          'demoscopia': {
            id: 'demoscopia',
            title:
              'Demoscopia',
            url: null,
            teaser: 'Die Platform für studentische Umfragen - Because one good turn deserves another.',
            description: 'Kennst du das? Für eine Hausarbeit, deine Bachelorarbeit oder vielleicht sogar deine Masterarbeit musst du eine Umfrage erstellen. Aber wie bekommst du Leute dazu teilzunehmen? Wenn du deine Umfrage über den Mail-Verteiler bewirbst, gibt es nur Gemecker und für Amazon-Gutscheine ist der studentische Geldbeutel meist auch zu klein' +
              '<br><br>' +
              'Hier kommt Demoscopia ins Spiel. Auf usnerer Plattform kannst du spielend leicht deine Umfragen erstellen und an deine Kommilitionen weiterleiten. Der Clou: Nur wer selbst schon einmal Umfragen auf Demoscopia beantwortet hat, kann auch welche erstellen. Somit ist gesichter, dass jeder, der für seine Umfragen Teilnehmer sucht, selbst erst einmal an solchen teilnehmen muss. Am Ende ist jeder der Gewinner - Because one good turn deserves another.' +
              '<br><br>' +
              'In this project I was responsible for the backend business logic and database (mongoDB), written in JavaScript (node.js).',

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
            tags: ["Web", "node.js", "mongoDB", "Student Project", "Business Logic"]
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
            tags: ["Smart Home", "Python", "Java", "openHAB", "Accessibility", "IoT", "Embedded"]
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
            tags: ["AI", "ML", "Python", "Audio Processing", "Thesis"]
          },
          '11f_android': {
            id: '11f_android',
            title:
              '11Freunde News',
            url: "https://play.google.com/store/apps/details?id=de.android.elffreunde",
            teaser: 'Immer auf Ballhöhe: 11Freunde informiert Sie über alle Fußball-Neuigkeiten auf und abseits des Rasens.',
            description: 'Die 11FREUNDE-App für Fußballkultur informiert dich täglich über die Dinge, die auf und abseits des Platzes passieren. Hier findest du Geschichten vom Ascheplatz um die Ecke und von der glitzernden Fußballwelt der europäischen Topligen. Hier liest du Interviews mit Legenden und solchen, die es werden wollen. Hier verfolgst du unseren Liveticker, der in Echtzeit von den Spielen der Bundesliga, Champions League und der Nationalmannschaft berichtet. ' +
              '<br><br>' +
              'I am responsible for the development of new features, bugfixing and maintanance of this app.',
            images: [
              '/static/img/projects/11f_android/main.png',
              '/static/img/projects/11f_android/detail_0.png',
              '/static/img/projects/11f_android/detail_1.png',
              '/static/img/projects/11f_android/detail_2.png',
              '/static/img/projects/11f_android/detail_3.png',
              '/static/img/projects/11f_android/detail_4.png',
              '/static/img/projects/11f_android/detail_5.png',
            ],
            tags: ["Android", "Mobile Development", "Java"]
          },
          'adventskalender': {
            id: 'adventskalender',
            title:
              'Rätsel-Adventskalender',
            url: "https://jonasmie.github.io/adventskalender/",
            teaser: 'The online riddle Advent calendar',
            description: 'Me little brother and me had a tradition: We did not simply give our christmas presents to each other, but we embedded them into quizzes and riddles. Only after solving the quiz, we were given access to the present. At some point, we extended this tradition to the pre-christmas time: As an Advent calendar, each day from Dec 1st to Dec 24th, we were sending quizzes to each other. Last year, I decided to set up an online riddle Advent calendar, so that each day he received the latest quiz (primarily because I wanted to learn Vue.js).',
            images: [
              '/static/img/projects/adventskalender/main.png',
              '/static/img/projects/adventskalender/detail_0.png',
              '/static/img/projects/adventskalender/detail_1.png',
              '/static/img/projects/adventskalender/detail_2.png',
            ],
            tags: ["Web", "Vue.js", "Bootstrap"]
          },
          'bardora': {
            id: 'bardora',
            title:
              'Bardora',
            url: null,
            teaser: 'Bardora, die Plattform für Bars in deiner Stadt.',
            description: 'Wir sind Bardora, die Plattform für Bars in deiner Stadt. Aus unzähligen Bars zeigen wir Dir Ergebnisse entsprechend deines Standorts schnell, übersichtlich und personalisiert an. Unsere Daten und Öffnungszeiten stammen aus erster Hand von den Barbesitzern.\n' +
              'Für uns zählt, was Dir gefällt! Vier verschiedene Bar-Kategorien ermöglichen es Dir, so Deine Lieblingsbars zu finden. Dies unterscheidet Bardora deutlich von vergleichbaren Apps. Informiere Dich über Preise, Entfernung und Zeiten der Happy Hour. Entdecke das Nachtleben in seiner großen Vielfalt und lerne neue Locations kennen!\n' +
              'Hilf Bardora noch besser zu werden und bewerte Bars mit einem Like. Lege dazu einfach einen Benutzeraccount an und los geht’s.' +
              '<br><br>' +
              'This project was a combination of Android Development and Embedded Systems. We created a local bar guide with several features (such as a pub crawl planner) and combined it with an alcohol tester that tells the user whether he is allowed to drive. I was responsible for the development of the android app and the integration of the alcohol sensor.'
            ,
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
            tags: ["Mobile Development", "Android", "Backend", "Business Logic", "IoT", "Embedded", "Student Project"]
          },

          // 'shopping': {
          //   id: 'shopping',
          //   title:
          //     'Geil shoppen',
          //   url: null,
          //   teaser: 'Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria! Racanas persuadere in rusticus aboa! Eheu, castus calcaria!',
          //   description: 'Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those processors evacuate strange, modern vogons.',
          //   images: [
          //     '/static/img/projects/shopping/main.png',
          //     '/static/img/projects/shopping/detail_0.png',
          //     '/static/img/projects/shopping/detail_1.png',
          //     '/static/img/projects/shopping/detail_2.png',
          //     '/static/img/projects/shopping/detail_3.png',
          //     '/static/img/projects/shopping/detail_4.png',
          //     '/static/img/projects/shopping/detail_5.png',
          //   ],
          //   tags: ["Student Project", "Research", "Paper", "Experiment", "UX"]
          // },
          'innoprojekt': {
            id: 'innoprojekt',
            title:
              'Innovationsprojekt',
            url: null,
            teaser: 'Untersuchungen zur Realisierung eines Flugschreibers für unbemannte Flugobjekte im Modellflug',
            description: 'Das Ziel des Projekts ist es, die Anforderungen an einen Flugdatenschreiber für Drohnen zu erfassen und Konzepte zur Umsetzung zu erarbeiten. Außerdem sollen einige Technologien anhand von Feldversuchen untersucht werden, um im Anschluss eine Empfehlung bei der Konzeption eines Flugdatenschreibers für Drohnen aussprechen zu können.' +
              '<br><br>' +
              'In this project I was responsible for the Proof of Concept of the embedded system: The Arduino received GPS signals from a GPS receiver, parsed them, signed them and logs them to a SD card.',
            images: [
              '/static/img/projects/innoprojekt/main.png',
              '/static/img/projects/innoprojekt/detail_0.png',
              '/static/img/projects/innoprojekt/detail_1.png',
              '/static/img/projects/innoprojekt/detail_2.png',
              '/static/img/projects/innoprojekt/detail_3.png',
              '/static/img/projects/innoprojekt/detail_4.png',
            ],
            tags: ["Research", "Drones", "GPS", "Student Project", "Paper", "Embedded"]
          },
          'lorry': {
            id: 'lorry',
            title:
              'Lorry',
            url: null,
            teaser: 'Don\'t Worry, Use Lorry. The interactive and smart driving time assistant.',
            description: 'Es soll ein Planungstool entwickelt werden, das dynamisch und intelligent Rastplätze für die Pausen vorschlägt und dabei Parkplatzsituation, Verkehr und geltende Gesetze beachtet. So kann der Fahrer zu Beginn seiner Tour die Rastplätze für seine Pausen planen. Für die Auswahl werdem dem Fahrer alle relevanten Informationen über den Rastplatz zur Verfügung gestellt. Orientierung bietet beispielsweise ein eingebautes Bewertungssystem, der Benzinpreis oder Services wie Restaurant, Waschanlage, Übernachtungsmöglichkeit, welche je nach konfigurierten Point of Interests angezeigt werden.' +
              '<br><br>' +
              'This project was part of the Daimler Truck App Challenge, a challenge to find new and innovative ways to support truck drivers. I was responsible for the development of the Android App, with its main element, the interactive driving times wheel.',
            images: [
              '/static/img/projects/lorry/main.png',
              '/static/img/projects/lorry/detail_0.png',
              '/static/img/projects/lorry/detail_1.png',
              '/static/img/projects/lorry/detail_2.png',
              '/static/img/projects/lorry/detail_3.png',
              '/static/img/projects/lorry/detail_4.png',
              '/static/img/projects/lorry/detail_5.png',
              '/static/img/projects/lorry/detail_6.png',
              '/static/img/projects/lorry/video.mp4',
            ],
            tags: ["Student Project", "Android", "Mobile Development", "UX", "Innovation", "Java", "UX"]
          },
          'midi': {
            id: 'midi',
            title:
              'DIY Midi Controller',
            url: null,
            teaser: 'A selfmade lowbudget MIDI controller for DJing ',
            description: 'In 2010, I started with my first attempts at DJing with a cheap Hercules DJ Console Rmx. Which sounded horrible. But that didn\'t matter to me, because I really liked it and had fun mixing my favourite music. So I continued with DJing and in summer 2013 I decided, to move from a simple MIDI controller to a more advanced setup (2x Reloop RP-4000 MK2 Turntables and a Behringer DJX750 Pro Mixer). I improved my DJ skills and still use this setup, I just like the feeling of working with oldschool (timecode) vinyls. <br>' +
              'But some things are really hard with an analog setup, such as looping, cueing or other convenient functions. So I thought: Why not add a MIDI controller to my vinyl setup. But a solid and nice controller is too expensive and not customizable. So I\'m developing my own controller from scratch. Based on a Teensy 2 MIDI microcontroller, I\'m setting up everything from hard- to software according to the role model of the Traktor Kontrol S4.',
            images: [
              '/static/img/projects/midi/main.png'
            ],
            tags: ["Embedded", "Side Project", "Teensy 2", "Hardware", "Software", "MIDI", "DJ"]
          },
          'kneipenquiz': {
            id: 'kneipenquiz',
            title:
              '11Freunde Kneipenquiz',
            url: "https://www.11freunde.de/artikel/fussballexperten-gesucht-0",
            teaser: 'In mehreren Fragerunden testen die 11FREUNDE Redakteure euer Fußballwissen. Macht euch gefasst auf Audio- und Videoclips, bisher nicht gekanntes und erschreckendes Bildmaterial.',
            description: 'In mehreren Fragerunden testen die 11FREUNDE Redakteure euer Fußballwissen. Macht euch gefasst auf Audio- und Videoclips, bisher nicht gekanntes und erschreckendes Bildmaterial - im vorweihnachtlichen Ambiente' +
              '<br>' +
              'Natürlich werden auch dieses Mal die größten Fußballexperten entsprechend gefeiert und fürstlich beschert - sprich, gehen nicht mit leeren Händen nach Hause.' +
              '<br>' +
              '<br>' +
              'I developed the 11Freunde Kneipenquiz as a web application. One part of the application is the frontend, visible to the users participating at the Kneipenquiz, the other part is the backend / admin system, which the moderator uses to control the frontend, switch the screens, edit questions and teams and update the ranking',
            images: [
              '/static/img/projects/kneipenquiz/main.png',
              '/static/img/projects/kneipenquiz/detail_0.png',
              '/static/img/projects/kneipenquiz/detail_1.png',
              '/static/img/projects/kneipenquiz/detail_2.png',
              '/static/img/projects/kneipenquiz/detail_3.png',
              '/static/img/projects/kneipenquiz/detail_4.png',
              '/static/img/projects/kneipenquiz/detail_5.png',
              '/static/img/projects/kneipenquiz/detail_6.png',
              '/static/img/projects/kneipenquiz/detail_7.png',
              '/static/img/projects/kneipenquiz/detail_8.png',
            ],
            tags: ["Backend", "Frontend", "node.js", "mongoDB", "Bootstrap"]
          }
        },
        selectedProject: {id: '', title: ''},
        slide: 0,
        sliding: null,
        lazy: true,
        swiperOption: {
          effect: 'flip',
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          autoplay: {
            delay: 2500,
            disableOnInteraction: true
          },
        }
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
          window.open(
            this.selectedProject.url, '_blank'
          );
        },
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
    /*max-height: 350px;*/
  }


  .portfolio-card--bg-main {
    height: 21.875rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .swiper-container {
    width: 600px;
    height: 300px;
  }

  .swiper-container {
    width: 100%;
    height: 100%;
  }


  .dialog-body {
    height: 100%;
  }

  .dialog-project-container {
    padding: 0 40px;
  }

  .dialog-project-title {
    float: left;
    font-weight: bold;
  }

  .dialog-project-button {
    float: right;
  }

  .dialog-project-description {
    text-align: left;
  }

  .carousel-wrapper {
    display: flex;
    align-items: center;
  }
</style>

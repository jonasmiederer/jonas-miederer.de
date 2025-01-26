import Section from "./section";
import PortfolioParent, { PortfolioItem } from "./utils/portfolio";


export default function Portfolio() {


    const content = <div>
        <PortfolioParent>
            <PortfolioItem
                key={"11f-liveticker"}
                name="11Freunde Liveticker @ ICE Portal"
                description={
                    <div>
                        <p>
                            Die 11FREUNDE-App für Fußballkultur informiert dich täglich über die Dinge, die auf und abseits des Platzes passieren. Hier findest du Geschichten vom Ascheplatz um die Ecke und von der glitzernden Fußballwelt der europäischen Topligen. Hier liest du Interviews mit Legenden und solchen, die es werden wollen. Hier verfolgst du unseren Liveticker, der in Echtzeit von den Spielen der Bundesliga, Champions League und der Nationalmannschaft berichtet.
                        </p>
                        <br></br>
                        <p>
                            I am responsible for the development of new features, bugfixing and maintanance of this app.
                        </p>
                    </div>
                }
                link={{ link: "https://play.google.com/store/apps/details?id=de.android.elffreunde&hl=de", text: "play.google.com" }}
                image="img/11f_app/app.png"
                tags={["Android", "Java", "Firebase"]}>
            </PortfolioItem>

            <PortfolioItem
                key={"11f-app"}
                name="11Freunde App"
                description={
                    <div>
                        <p>
                            Die 11FREUNDE-App für Fußballkultur informiert dich täglich über die Dinge, die auf und abseits des Platzes passieren. Hier findest du Geschichten vom Ascheplatz um die Ecke und von der glitzernden Fußballwelt der europäischen Topligen. Hier liest du Interviews mit Legenden und solchen, die es werden wollen. Hier verfolgst du unseren Liveticker, der in Echtzeit von den Spielen der Bundesliga, Champions League und der Nationalmannschaft berichtet.
                        </p>
                        <br></br>
                        <p>
                            I am responsible for the development of new features, bugfixing and maintanance of this app.
                        </p>
                    </div>
                }
                link={{ link: "https://play.google.com/store/apps/details?id=de.android.elffreunde&hl=de", text: "play.google.com" }}
                image="img/11f_app/app.png"
                tags={["Android", "Java", "Firebase"]}>
            </PortfolioItem>

            <PortfolioItem
                key={"11f-quiz"}
                name="11Freunde Quiz"
                description={
                    <div>
                        <p>
                            The interactive quiz section on 11Freunde offers football-themed quizzes designed to test fans’ knowledge of players, teams, tournaments, and football culture. These quizzes are typically engaging and fun, appealing to a wide audience of football enthusiasts.
                        </p>
                    </div>
                }
                link={{ link: "https://www.11freunde.de/quiz", text: "11freunde.de/quiz" }}
                image="img/11f_quiz/image.png"
                tags={["Web", "PHP", "Symphony", "MySQL"]}>
            </PortfolioItem>

            <PortfolioItem
                key={"11f-frankfurt"}
                name="Frankfurt, oder?"
                description={
                    <div>
                        <p>
                            The dossier narrates a satirical story about two Benfica Lisbon fans who mistakenly traveled to Frankfurt (Oder) instead of Frankfurt (Main) for a Europa League match in 2019. This humorous tale, concocted by the 11Freunde magazine team, explores media gullibility and how such stories gain global traction. The detailed hoax involved social media accounts, staged photos, and fabricated travel routes, highlighting both the power and pitfalls of viral news.
                        </p>
                    </div>
                }
                link={{ link: "https://frankfurtoder.11freunde.de/", text: "frankfurtoder.11freunde.de" }}
                image="img/11f_frankfurtoder/image.png"
                tags={["Web", "Bootstrap", "Parallax"]}>
            </PortfolioItem>

            <PortfolioItem
                key={"11f-scream"}
                name="The Joshua Scream"
                description={
                    <div>
                        <p>
                            The dossier from 11Freunde explores the unique playing style and influence of Joshua Kimmich, emphasizing his role as a modern, versatile footballer with tactical intelligence. It discusses his development into a key figure for Bayern Munich and the German national team, highlighting his leadership qualities and adaptability in multiple positions. The article also reflects on Kimmich’s personality, passion for football, and his broader impact on the sport.
                        </p>
                    </div>
                }
                link={{ link: "https://kimmich.11freunde.de/english.html", text: "kimmich.11freunde.de" }}
                image="img/11f_kimmich/image.png"
                tags={["Web", "Bootstrap", "Parallax"]}>
            </PortfolioItem>

            <PortfolioItem
                key={"11f-risiko"}
                name="Zwo, Eins, Risiko"
                description={
                    <div>
                        <p>
                            The dossier humorously recounts stories of interactions between football fans and police, focusing on absurd, amusing, or dramatic incidents. It highlights the intersection of football culture and law enforcement, often reflecting the intense emotions and unique situations that arise in the world of football.
                        </p>
                    </div>
                }
                link={{ link: "https://polizei.11freunde.de/", text: "polizei.11freunde.de" }}
                image="img/11f_polizei/image.png"
                tags={["Web", "Bootstrap", "Parallax"]}>
            </PortfolioItem>

            <PortfolioItem
                key={"11f-inpieces"}
                name="In Pieces"
                description={
                    <div>
                        <p>
                            In Pieces (Der Bruch) is a long and detailed dossier about Mesut Özil, the german football player with turkish roots. In 2018, the whole nation discussed, whether is was ok to meet the turkish president, shake his hands and shoot a photo with him. After the disastrous performance of the german national team, he was even blamed for the early knockout at the World Cup 2018. Ron Ulrich and Andreas Bock wrote about this fateful summer, I was responsible for the technical implementation.
                        </p>
                    </div>
                }
                link={{ link: "https://oezil.11freunde.de/", text: "oezil.11freunde.de", disabled: true }}
                image="img/11f_oezil/image.png"
                tags={["Web", "Bootstrap", "Parallax"]}>
            </PortfolioItem>

            <PortfolioItem
                key={"11f-java"}
                name="This is Java!"
                description={
                    <div>
                        <p className="italic">Since 1995 over 70 indonesian football fans died. For the Persija Jakarta ultras, every away trip could be their last. 11FREUNDE takes a road trip through a war zone</p>
                        <br></br>
                        <p>
                            Everyone knows about the english Premier League, La Liga in Spain or the german Bundesliga. But what do you know about indonesian football? A football culture with one of the most hardcore fans of the world. Where fans do everything to support their club. And by everything, I mean everything: Since 1995, the indonesian football has seen 70 deaths. Ron Ulrich writes about a roadtrip through the country, I was responsible for the technical implementation.
                        </p>
                    </div>
                }
                link={{ link: "https://java.11freunde.de/", text: "java.11freunde.de", disabled: true }}
                image="img/11f_java/image.png"
                tags={["Web", "Bootstrap", "Parallax"]}>
            </PortfolioItem>

            <PortfolioItem
                key={"jm-website"}
                name="Personal Website"
                description={
                    <div>
                        <p className="italic">My personal website including my portfolio, papers, skills and other useless information.</p>
                        <br></br>
                        <p>
                            Here you can find some information about me. Information about my education and my experience. You can see samples from my portfolio as well as my blog posts and research papers. Furthermore I give an overview over my skills and you can contact me here. So feel free to visit my homepage.

                            This website is not based on any templates, but was developed from scratch. As framwork I used Vue.js.
                        </p>
                    </div>
                }
                link={{ link: "https://jonas-miederer.de/", text: "jonas-miederer.de", disabled: false }}
                image="img/jonas-miederer/old/image.png"
                tags={["Web", "Vue.js", "Bootstrap"]}>
            </PortfolioItem>

            <PortfolioItem
                key={"11f-aussteiger"}
                name="Über das Spiel zum Kampf"
                description={
                    <div>
                        <p>
                            The 11 Freunde page "Aussteiger" delves into the stories of footballers who left professional sports behind for unconventional paths. It examines their motivations, challenges, and how they navigate life beyond football, shedding light on personal transformations and societal perspectives.
                        </p>
                    </div>
                }
                link={{ link: "https://aussteiger.11freunde.de/", text: "aussteiger.11freunde.de", disabled: false }}
                image="img/11f_aussteiger/image.png"
                tags={["Web", "Bootstrap", "Parallax"]}>
            </PortfolioItem>

            <PortfolioItem
                key={"11f-dvt"}
                name="Der vergessene Tote"
                description={
                    <div>
                        <p className="italic">
                            In 1988, a fan of 1. FC Saarbrücken was fatally injured during a match against Schalke. The court convicted a hooligan from Borussia Mönchengladbach. The case remains a mystery to this day
                        </p>
                        <br></br>
                        <p>
                            There have been two known fatalities in German soccer to date. But there is a third: in September 1988, exactly 30 years ago, a Saarbrücken fan died in a brawl. The trail leads back to “Hogesa”.
                        </p>
                        <br></br>
                        <p>
                            This report by Ron Ulrich is definitely worth a read and the impressive illustrations by Andrew Thomson perfectly fit to the mood of the text. I was responsible for the technical implementation.
                        </p>
                    </div>
                }
                link={{ link: "https://dervergessenetote.11freunde.de/", text: "dervergessenetote.11freunde.de", disabled: true }}
                image="img/11f_vergessenertoter/image.png"
                tags={["Web", "Bootstrap", "Parallax"]}>
            </PortfolioItem>

            <PortfolioItem
                key={"11f-konferenz"}
                name="Die 11Freunde-Konferenz"
                description={
                    <div>
                        <p className="italic">
                            All matches, all goals, live ticker, grandstand and the best tweets - real-time live ticker for the Bundesliga with social feed
                        </p>
                        <br></br>
                        <p>
                            Humorous, social, exciting, interactive and always with the most useful and useless facts for the saturday afternoon games: That is the 11Freunde Bundesligakonferenz. All important events such as goals, penalties or substitutions are brought to you in realtime with comments by an 11Freunde editor. The Twitter feed collects the best and merriest contributions from the web, while the survey reflects the opinions of the users.
                        </p>
                        <br></br>
                        <p>
                            In this project I was responsible for the backend and business logic, developed with node.js, mongoDB and socket.io for realtime communication.
                        </p>
                    </div>
                }
                image="img/11f_konferenz/image.png"
                tags={["node.js", "mongoDB", "socket.io"]}>
            </PortfolioItem>

            <PortfolioItem
                key={"11f-quiz-1"}
                name="Das 11Freunde-Quiz (1st version)"
                description={
                    <div>
                        <p className="italic">
                            The big 11Freunde quiz. Put your soccer knowledge to the test in the daily quiz
                        </p>
                        <br></br>
                        <p>
                            A maximum of 10 points is awarded for each correct answer, and you have a total of 20 seconds to answer the question correctly. The points are awarded according to the principle of “the fastest wins”. This means: If you give the correct answer in seconds 20 to 16, you receive 10 points, if you give the correct answer in seconds 15-11, you receive 9 points, all correct answers from the tenth second onwards receive eight points. At the end, all the points are added up and you receive your overall result and you can see where your points place you in the overall ranking of all quiz participants.
                        </p>
                        <br></br>
                        <p>
                            In this project I was responsible for the backend logic and database design/integration.
                        </p>
                    </div>
                }
                image="img/11f_quiz_old/image.png"
                tags={["PHP", "MySQL", "Symfony"]}>
            </PortfolioItem>

            <PortfolioItem
                key={"11f-statistik"}
                name="Die Statistikhölle"
                description={
                    <div>
                        <p className="italic">
                            All statistics and all information about your favourite team.
                        </p>
                        <br></br>
                        <p>
                            How many yellow cards did Franck Ribéry receive this season? How many assists did Marco Reus score in the last game? How many times has Mario Gomez been in the starting eleven? What was the number of corner kicks of Werder Bremen in the game against Frankfurt?
                            The 11Freunde-Statistikhölle gives you all the information. You can get the stats for each team from the 1st to the 3rd german league. We give an comprehensive overview over the squad with lots of interesting data for each player in the team. We also provide a social aggregation with tweet, facebook posts and content from instagram for each team to keep you up to date with the latest news.
                        </p>
                        <br></br>
                        <p>
                            In this project I was responsible for the whole application, including the front- and backend development.
                        </p>
                    </div>
                }
                image="img/11f_statisik/image.png"
                tags={["PHP", "MySQL", "Data Aggregation"]}>
            </PortfolioItem>

            <PortfolioItem
                key={"11f-europa"}
                name="11Freunde Europareise"
                description={
                    <div>
                        <p className="italic">
                            Together with Hyundai, we are going in search of fan culture in Europe. And you can be part of it. In our map you will find all the latest travel photos, video reports and stories from our trip to Europe at a glance.
                        </p>
                        <br></br>
                        <p>
                            The 11FREUNDE European journey - join us on the fan culture road trip Together with Hyundai, we are going in search of fan culture in Europe. And you can be part of it. In our map you will find all the latest travel photos, video reports and stories from our European trip at a glance.
                        </p>
                        <br></br>
                        <p>
                            This project was part of the 11Freunde European Jounrney during the UEFA Euro 2016. I developed the Euromap based on PHP in the backend and Mapbox for the design of the map.
                        </p>
                    </div>
                }
                image="img/11f_euromap/image.png"
                tags={["PHP", "MySQL", "Mapbox"]}>
            </PortfolioItem>

            <PortfolioItem
                key={"jm-splitts"}
                name="Splitts"
                description={
                    <div>
                        <p className="italic">
                            Splitts - The easy way to share costs and expenses
                        </p>
                        <br></br>
                        <p>
                            Tired of those awkward cost splitting moments with your friends? Splitts lets you just focus on having fun during your group activities. No account is needed, you can create ad-hoc groups on the fly. Our algorithm calculates the share for each participant and tracks, whether it was already payed. For Splitts no app is required, because it was developed as a mobile-optimized web app.
                        </p>
                        <br></br>
                        <p>
                            In this project I was responsible for the backend development of the web app in node.js and the mongoDB database. The focus was laid on realtime events with socket.io and the no-account philosophy with sessions.
                        </p>
                    </div>
                }
                image="img/splitts/image.png"
                tags={["node.js", "mongoDB", "socket.io"]}>
            </PortfolioItem>

            <PortfolioItem
                key={"jm-hireme"}
                name="hireMe"
                description={
                    <div>
                        <p className="italic">
                            hireMe - Apply with just one click
                        </p>
                        <br></br>
                        <p>
                            Forget switching between job advertisement, job portal, writing program, attachments and e-mail. With the hireMe button, you can apply with just one click.

                            Central data storage: You can now save your CV, work samples, letters of recommendation and certificates securely online. Available when you need them. At the same time, you can keep track of your applications here.

                            hireMe button: Quickly and easily include the hireMe button on your website to make the application process easier for potential candidates.

                            Analytics: Where do my applicants come from? How many interested parties are applying? Analytics can be used to analyze and optimize these key figures.

                        </p>
                        <br></br>
                        <p>
                            In this student project I was responsible for the backend development and database design and integration.
                        </p>
                    </div>
                }
                image="img/hireme/image.png"
                tags={["PHP", "Yii", "MySQL"]}>
            </PortfolioItem>

            <PortfolioItem
                key={"jm-demoscopia"}
                name="Demoscopia"
                description={
                    <div>
                        <p className="italic">
                            The platform for student surveys - Because one good turn deserves another.
                        </p>
                        <br></br>
                        <p>
                            Do you know this? You have to create a survey for a term paper, your bachelor's thesis or maybe even your master's thesis. But how do you get people to take part? If you advertise your survey via the mailing list, there will only be grumbling and the student wallet is usually too small for Amazon vouchers

                            This is where Demoscopia comes into play. On our platform, you can easily create your surveys and forward them to your fellow students. The highlight: Only those who have already answered surveys on Demoscopia can create them. This means that anyone looking for participants for their surveys must first take part in them themselves. In the end, everyone is the winner - because one good turn deserves another.
                        </p>
                        <br></br>
                        <p>
                            In this project I was responsible for the backend business logic and database (mongoDB), written in JavaScript (node.js).
                        </p>
                    </div>
                }
                image="img/demoscopia/image.png"
                tags={["node.js", "mongoDB", "Web"]}>
            </PortfolioItem>

            <PortfolioItem
                key={"jm-bardora"}
                name="Bardora"
                description={
                    <div>
                        <p className="italic">
                            Bardora, the platform for bars in your town.
                        </p>
                        <br></br>
                        <p>
                            We are Bardora, the platform for bars in your city. From countless bars, we show you results according to your location quickly, clearly and personalized. Our data and opening hours come first-hand from the bar owners. What counts for us is what you like! Four different bar categories allow you to find your favorite bars. This clearly distinguishes Bardora from comparable apps. Find out about prices, distance and happy hour times. Discover the nightlife in all its diversity and get to know new locations! Help Bardora become even better and rate bars with a Like. Simply create a user account and off you go.
                        </p>
                        <br></br>
                        <p>
                            This project was a combination of Android Development and Embedded Systems. We created a local bar guide with several features (such as a pub crawl planner) and combined it with an alcohol tester that tells the user whether he is allowed to drive. I was responsible for the development of the android app and the integration of the alcohol sensor.
                        </p>
                    </div>
                }
                image="img/bardora/image.png"
                tags={["Android", "IoT", "Embedded"]}>
            </PortfolioItem>

            <PortfolioItem
                key={"jm-lorry"}
                name="Lorry"
                description={
                    <div>
                        <p className="italic">
                            Don't Worry, Use Lorry. The interactive and smart driving time assistant.
                        </p>
                        <br></br>
                        <p>
                            A planning tool that dynamically and intelligently suggests rest areas for breaks, taking into account the parking situation, traffic and applicable laws. This allows the driver to plan the rest areas for his breaks at the start of his tour. All relevant information about the rest area is made available to the driver for the selection. For example, a built-in rating system, the fuel price or services such as a restaurant, car wash or overnight accommodation are displayed depending on the configured point of interest.
                        </p>
                        <br></br>
                        <p>
                            This project was part of the Daimler Truck App Challenge, a challenge to find new and innovative ways to support truck drivers. I was responsible for the development of the Android App, with its main element, the interactive driving times wheel.
                        </p>
                    </div>
                }
                image="img/lorry/image.png"
                tags={["Android", "UX", "Java"]}>
            </PortfolioItem>

            <PortfolioItem
                key={"11f-kneipenquiz"}
                name="11Freunde Kneipenquiz"
                description={
                    <div>
                        <p className="italic">
                            The 11FREUNDE editors will test your soccer knowledge in several rounds of questions. Get ready for audio and video clips, previously unknown and shocking footage.
                        </p>
                        <br></br>
                        <p>
                            The 11FREUNDE editors will test your soccer knowledge in several rounds of questions. Get ready for audio and video clips, unprecedented and shocking footage.
                            Of course, this time the greatest soccer experts will also be celebrated accordingly and given princely gifts - in other words, they won't go home empty-handed.
                        </p>
                        <br></br>
                        <p>
                            I developed the 11Freunde Kneipenquiz as a web application. One part of the application is the frontend, visible to the users participating at the Kneipenquiz, the other part is the backend / admin system, which the moderator uses to control the frontend, switch the screens, edit questions and teams and update the ranking
                        </p>
                    </div>
                }
                image="img/11f_kneipenquiz/image.png"
                tags={["node.js", "mongoDB", "Bootstrap"]}>
            </PortfolioItem>

        </PortfolioParent >
    </div >

    return (
        <Section title="Portfolio" content={content} />
    )
};
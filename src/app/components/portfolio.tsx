import Section from "./section";
import PortfolioGrid, { PortfolioItemProps } from "./utils/portfolio";

const items: PortfolioItemProps[] = [
    {
        name: "11Freunde Liveticker @ ICE Portal",
        image: "img/11f_bahnapi/image.webp",
        link: { link: "https://iceportal.de/", text: "iceportal.de" },
        tags: ["PHP", "API", "Lumen"],
        description: <div>
            <p>Im ICE Portal der Deutschen Bahn können Reisende während ihrer Fahrt auf vielfältige Entertainment-Angebote zugreifen, darunter Filme, Serien, Hörbücher, Podcasts und Magazine. Ein besonderes Highlight ist der Liveticker von 11FREUNDE, der es ermöglicht, Fußballspiele direkt im Zug zu verfolgen.</p>
            <p>I am responsible for the development of new features, bugfixing and maintanance of this app.</p>
        </div>
    },
    {
        name: "11Freunde App",
        image: "img/11f_app/app.webp",
        link: { link: "https://play.google.com/store/apps/details?id=de.android.elffreunde&hl=de", text: "play.google.com" },
        tags: ["Android", "Java", "Firebase"],
        description: <div>
            <p>Die 11FREUNDE-App für Fußballkultur informiert dich täglich über die Dinge, die auf und abseits des Platzes passieren.</p>
            <p>I am responsible for the development of new features, bugfixing and maintanance of this app.</p>
        </div>
    },
    {
        name: "11Freunde Quiz",
        image: "img/11f_quiz/image.webp",
        link: { link: "https://www.11freunde.de/quiz", text: "11freunde.de/quiz" },
        tags: ["Web", "PHP", "Symphony", "MySQL"],
        description: <div><p>The interactive quiz section on 11Freunde offers football-themed quizzes designed to test fans&apos; knowledge of players, teams, tournaments, and football culture.</p></div>
    },
    {
        name: "Frankfurt, oder?",
        image: "img/11f_frankfurtoder/image.webp",
        link: { link: "https://frankfurtoder.11freunde.de/", text: "frankfurtoder.11freunde.de" },
        tags: ["Web", "Bootstrap", "Parallax"],
        description: <div><p>The dossier narrates a satirical story about two Benfica Lisbon fans who mistakenly traveled to Frankfurt (Oder) instead of Frankfurt (Main) for a Europa League match in 2019.</p></div>
    },
    {
        name: "The Joshua Scream",
        image: "img/11f_kimmich/image.webp",
        link: { link: "https://kimmich.11freunde.de/english.html", text: "kimmich.11freunde.de" },
        tags: ["Web", "Bootstrap", "Parallax"],
        description: <div><p>The dossier from 11Freunde explores the unique playing style and influence of Joshua Kimmich, emphasizing his role as a modern, versatile footballer with tactical intelligence.</p></div>
    },
    {
        name: "Zwo, Eins, Risiko",
        image: "img/11f_polizei/image.webp",
        link: { link: "https://polizei.11freunde.de/", text: "polizei.11freunde.de" },
        tags: ["Web", "Bootstrap", "Parallax"],
        description: <div><p>The dossier humorously recounts stories of interactions between football fans and police, focusing on absurd, amusing, or dramatic incidents.</p></div>
    },
    {
        name: "In Pieces",
        image: "img/11f_oezil/image.webp",
        link: { link: "https://oezil.11freunde.de/", text: "oezil.11freunde.de", disabled: true },
        tags: ["Web", "Bootstrap", "Parallax"],
        description: <div><p>In Pieces (Der Bruch) is a long and detailed dossier about Mesut Özil, the german football player with turkish roots. Ron Ulrich and Andreas Bock wrote about this fateful summer, I was responsible for the technical implementation.</p></div>
    },
    {
        name: "This is Java!",
        image: "img/11f_java/image.webp",
        link: { link: "https://java.11freunde.de/", text: "java.11freunde.de", disabled: true },
        tags: ["Web", "Bootstrap", "Parallax"],
        description: <div>
            <p className="italic text-default-600 font-medium">Since 1995 over 70 indonesian football fans died. For the Persija Jakarta ultras, every away trip could be their last.</p>
            <p>Ron Ulrich writes about a roadtrip through the country, I was responsible for the technical implementation.</p>
        </div>
    },
    {
        name: "Personal Website",
        image: "img/jonas-miederer/old/image.webp",
        link: { link: "https://jonas-miederer.de/", text: "jonas-miederer.de" },
        tags: ["Web", "Vue.js", "Bootstrap"],
        description: <div><p>My personal website including my portfolio, papers, skills and other useless information. This website was developed from scratch using Vue.js.</p></div>
    },
    {
        name: "Über das Spiel zum Kampf",
        image: "img/11f_aussteiger/image.webp",
        link: { link: "https://aussteiger.11freunde.de/", text: "aussteiger.11freunde.de" },
        tags: ["Web", "Bootstrap", "Parallax"],
        description: <div><p>The 11 Freunde page &quot;Aussteiger&quot; delves into the stories of footballers who left professional sports behind for unconventional paths.</p></div>
    },
    {
        name: "Der vergessene Tote",
        image: "img/11f_vergessenertoter/image.webp",
        link: { link: "https://dervergessenetote.11freunde.de/", text: "dervergessenetote.11freunde.de", disabled: true },
        tags: ["Web", "Bootstrap", "Parallax"],
        description: <div>
            <p className="italic text-default-600 font-medium">In 1988, a fan of 1. FC Saarbrücken was fatally injured during a match against Schalke.</p>
            <p>This report by Ron Ulrich is definitely worth a read. I was responsible for the technical implementation.</p>
        </div>
    },
    {
        name: "Die 11Freunde-Konferenz",
        image: "img/11f_konferenz/image.webp",
        tags: ["node.js", "mongoDB", "socket.io"],
        description: <div><p>Humorous, social, exciting, interactive and always with the most useful and useless facts for the saturday afternoon games. I was responsible for the backend and business logic, developed with node.js, mongoDB and socket.io.</p></div>
    },
    {
        name: "Das 11Freunde-Quiz (1st version)",
        image: "img/11f_quiz_old/image.webp",
        tags: ["PHP", "MySQL", "Symfony"],
        description: <div><p>The big 11Freunde quiz. Put your soccer knowledge to the test in the daily quiz. I was responsible for the backend logic and database design/integration.</p></div>
    },
    {
        name: "Die Statistikhölle",
        image: "img/11f_statisik/image.webp",
        tags: ["PHP", "MySQL", "Data Aggregation"],
        description: <div><p>How many yellow cards did Franck Ribéry receive this season? The 11Freunde-Statistikhölle gives you all the information. I was responsible for the whole application, including the front- and backend development.</p></div>
    },
    {
        name: "11Freunde Europareise",
        image: "img/11f_euromap/image.webp",
        tags: ["PHP", "MySQL", "Mapbox"],
        description: <div><p>Together with Hyundai, we went in search of fan culture in Europe during UEFA Euro 2016. I developed the Euromap based on PHP and Mapbox.</p></div>
    },
    {
        name: "Splitts",
        image: "img/splitts/image.webp",
        tags: ["node.js", "mongoDB", "socket.io"],
        description: <div>
            <p className="italic text-default-600 font-medium">Splitts - The easy way to share costs and expenses</p>
            <p>I was responsible for the backend development in node.js and mongoDB, with a focus on realtime events with socket.io.</p>
        </div>
    },
    {
        name: "hireMe",
        image: "img/hireme/image.webp",
        tags: ["PHP", "Yii", "MySQL"],
        description: <div>
            <p className="italic text-default-600 font-medium">hireMe - Apply with just one click</p>
            <p>I was responsible for the backend development and database design and integration.</p>
        </div>
    },
    {
        name: "Demoscopia",
        image: "img/demoscopia/image.webp",
        tags: ["node.js", "mongoDB", "Web"],
        description: <div>
            <p className="italic text-default-600 font-medium">The platform for student surveys - Because one good turn deserves another.</p>
            <p>I was responsible for the backend business logic and database (mongoDB), written in JavaScript (node.js).</p>
        </div>
    },
    {
        name: "Bardora",
        image: "img/bardora/image.webp",
        tags: ["Android", "IoT", "Embedded"],
        description: <div>
            <p className="italic text-default-600 font-medium">Bardora, the platform for bars in your town.</p>
            <p>A combination of Android Development and Embedded Systems — a local bar guide combined with an alcohol tester. I was responsible for the Android app and the integration of the alcohol sensor.</p>
        </div>
    },
    {
        name: "Lorry",
        image: "img/lorry/image.webp",
        tags: ["Android", "UX", "Java"],
        description: <div>
            <p className="italic text-default-600 font-medium">Don&apos;t Worry, Use Lorry. The interactive and smart driving time assistant.</p>
            <p>Part of the Daimler Truck App Challenge. I was responsible for the Android App with its main element, the interactive driving times wheel.</p>
        </div>
    },
    {
        name: "11Freunde Kneipenquiz",
        image: "img/11f_kneipenquiz/image.webp",
        tags: ["node.js", "mongoDB", "Bootstrap"],
        description: <div><p>I developed the 11Freunde Kneipenquiz as a web application — a frontend visible to participants and a backend/admin system for the moderator to control screens, edit questions and update the ranking.</p></div>
    },
];

export default function Portfolio() {
    return (
        <Section title="Portfolio" content={<PortfolioGrid items={items} />} />
    );
}

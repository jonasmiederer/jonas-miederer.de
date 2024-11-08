import Section from "./section";
import PortfolioParent, { PortfolioItem } from "./utils/portfolio";


export default function Portfolio() {


    const content = <div>
        <PortfolioParent>
            <PortfolioItem
                name="11Freunde App"
                description="
Die 11FREUNDE-App für Fußballkultur informiert dich täglich über die Dinge, die auf und abseits des Platzes passieren. Hier findest du Geschichten vom Ascheplatz um die Ecke und von der glitzernden Fußballwelt der europäischen Topligen. Hier liest du Interviews mit Legenden und solchen, die es werden wollen. Hier verfolgst du unseren Liveticker, der in Echtzeit von den Spielen der Bundesliga, Champions League und der Nationalmannschaft berichtet.

I am responsible for the development of new features, bugfixing and maintanance of this app."
                link={{ link: "https://play.google.com/store/apps/details?id=de.android.elffreunde&hl=de", text: "play.google.com" }}
                image="img/11f_app/app.png"
                tags={["Android", "Java", "Firebase"]}>
            </PortfolioItem>

            <PortfolioItem
                name="11Freunde Quiz"
                description={"Test your knowledge about football and everything around it."}
                link={{ link: "https://www.11freunde.de/quiz", text: "11freunde.de/quiz" }}
                image="img/11f_quiz/image.png"
                tags={["Web", "PHP", "Symphony", "MySQL"]}>
            </PortfolioItem>

            <PortfolioItem
                name="Frankfurt, oder?"
                link={{ link: "https://frankfurtoder.11freunde.de/", text: "frankfurtoder.11freunde.de" }}
                image="img/11f_frankfurtoder/image.png"
                tags={["Web", "Bootstrap", "Parallax"]}>
            </PortfolioItem>

            <PortfolioItem
                name="The Joshua Scream"
                link={{ link: "https://kimmich.11freunde.de/english.html", text: "kimmich.11freunde.de" }}
                image="img/11f_kimmich/image.png"
                tags={["Web", "Bootstrap", "Parallax"]}>
            </PortfolioItem>

            <PortfolioItem
                name="Zwo, Eins, Risiko"
                link={{ link: "https://polizei.11freunde.de/", text: "polizei.11freunde.de" }}
                image="img/11f_polizei/image.png"
                tags={["Web", "Bootstrap", "Parallax"]}>
            </PortfolioItem>

        </PortfolioParent>
    </div>

    return (
        <Section title="Portfolio" content={content} />
    )
};
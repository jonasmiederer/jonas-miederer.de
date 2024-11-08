import Section from "./section";
import CV, { CVItem } from "./utils/cv";


export default function Experience() {


    const content = <div>
        <CV>
            <CVItem
                year="2024"
                title="Solution Architect @ AWS / Amazon"
                description="">
            </CVItem>

            <CVItem
                year="2022"
                title="Senior Cloud Native Developer @ Eviden"
                description="Responsible for designing, building, and optimizing scalable, resilient, and efficient applications for cloud environments, leveraging containerization, microservices, and cloud-native technologies for different clients.">
            </CVItem>

            <CVItem
                year="2020"
                title="Software Architect @ Mercedes-Benz Tech Motion"
                description="As Tech Lead within the pactrisPRO team I'm responsible for AI Algorithm Development, Backend / API Development, Cloud Architecture, DevOps management & Security Architecture / Design">
            </CVItem>

            <CVItem
                year="2019"
                title="Lecturer for Computer Science @ DHBW Stuttgart"
                description="Besides my primary job I started a position as Lecturer at DHBW (Cooperative State University) Stuttgart, Campus Horb. I'm teaching computer science and programming to industrial engineering students, 1st and 2nd semester. I love to share my knowledge and passion about coding with the students and it also gives me a lot in return.">
            </CVItem>

            <CVItem
                year="2018"
                title="Software Developer Artificial Intelligence @ Ferchau GmbH / Daimler AG"
                description="">
            </CVItem>

            <CVItem
                year="2017"
                title="Master's candidate - Software Development Artificial Intelligence @ Daimler AG"
                description="">
            </CVItem>

            <CVItem
                year="2015"
                title="Working student - Full Stack Development @ 11Freunde GmbH"
                description="I very much liked the kind of work and freedom I had during my internship at 11Freunde. Therefore I was genuinely happy about the offer to continue as a working student being able to work completely remotely. Since I already gained some experience in Android development during my studies, I also assumed responsibility for maintenance of the 11Freunde App with its more than 100.000 accumulated downloads.">
            </CVItem>

            <CVItem
                year="2014"
                title="Practical semester / internship - Web Development @ 11Freunde GmbH"
                description="As part of my bachelor's program, I worked as an intern for 6 months at 11Freunde Verlag in Berlin. My scope of responsibility included developing new web applications (front- and backend), maintaining existing applications and databases as well as various IT-related tasks">
            </CVItem>
        </CV>
    </div>

    return (
        <Section title="Experience" content={content} />
    )
};
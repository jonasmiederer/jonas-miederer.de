import Section from "./section";
import CV, { CVItem } from "./utils/cv";


export default function Experience() {


    const content = <div>
        <CV>
            <CVItem
                year="2024"
                title="Solutions Architect @ AWS / Amazon"
                description="Designing & architecting scalable & secure cloud solutions helping customers to benefit from the AWS cloud">
            </CVItem>

            <CVItem
                year="2022"
                title="Senior Cloud Native Developer @ Atos / Eviden"
                description="Responsible for designing, building, and optimizing scalable, resilient, and efficient applications for cloud environments, leveraging containerization, microservices, and cloud-native technologies for different clients.">
            </CVItem>

            <CVItem
                year="2020"
                title="Software Architect / Tech Lead @ Mercedes-Benz Tech Motion"
                description="As Tech Lead within the pactrisPRO team responsible for AI algorithm development, backend / API development, cloud architecture, DevOps management & security architecture / design">
            </CVItem>

            <CVItem
                year="2019"
                title="Lecturer for Computer Science @ DHBW Stuttgart"
                description="Responsible for planning & conducting lectures at DHBW (Cooperative State University) Stuttgart, Campus Horb teaching computer science and programming to industrial engineering students, 1st and 2nd semester.">
            </CVItem>

            <CVItem
                year="2018"
                title="Software Developer Artificial Intelligence @ Ferchau GmbH / Daimler AG"
                description="Planning, implementing and rolling out new services and features for pactrisPRO, the AI-based supply chain optimization product">
            </CVItem>

            <CVItem
                year="2017"
                title="Master's candidate - Software Development Artificial Intelligence @ Daimler AG"
                description="Completing my thesis as part of the pacTris team at Daimler (grade 1.0). Developed an AI-based 3D bin packing algorithm for optimized container fillings in logistics.">
            </CVItem>

            <CVItem
                year="2015"
                title="Working student - Full Stack Development @ 11Freunde GmbH"
                description="Responsible for various web development projects involving internal & external partners. Maintained and redeveloped the Android app.">
            </CVItem>

            <CVItem
                year="2014"
                title="Practical semester / internship - Web Development @ 11Freunde GmbH"
                description="As part of my bachelor's program, I worked as an intern at 11Freunde Verlag in Berlin for 6 months. My scope of responsibility included developing new web applications (frontend & backend), maintaining existing applications and databases as well as various IT-related tasks">
            </CVItem>
        </CV>
    </div>

    return (
        <Section title="Experience" content={content} />
    )
};
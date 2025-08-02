import Section from "./section";
import Typewriter from "./typewriter";


export default function About() {
    

    const content = <div>
        <h2>Hi, I&apos;m <div className="inline-block font-semibold from-[#FF72E1] to-[#F54C7A] bg-clip-text text-transparent bg-linear-to-b" ><Typewriter/></div></h2>

        <p className="my-3">I&apos;m a Cloud Architect with a strong passion for scalable solutions, serverless technologies, and programming. My expertise spans software engineering (Python, AI/ML, TypeScript, Docker/Kubernetes, Cloud, AWS) and solutions architecture, where I focus on designing secure, scalable, and highly available systems.</p>
        <p className="my-3"> Outside of work, I&apos;m into sports like gym, soccer, and biking, as well as skiing and making music. I love spending my free time working on side projects, reading, or hanging out with friends.</p>
        <p className="my-3">Some of my proudest achievements include winning the Mercedes-Benz Innovation Award and the RedHat Hackfest 2023. </p>
        <p className="my-3">I also have experience teaching Computer Science at the Duale Hochschule Campus Horb, and I&apos;ve been working as a full-stack developer at 11Freunde Verlag since 2014.</p>
        <p className="my-3">Feel free to <a href="#contact">reach out to me</a> any time if you&apos;d like to connect or discuss exciting projects!</p>
    </div>
    
    return (
        <Section title="About Me" content={content} />
    )
};
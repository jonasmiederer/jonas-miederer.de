import Section from "./section";
import Typewriter from "./typewriter";


export default function About() {
    

    const content = <div>
        <h2>Hi, I'm <div className="inline-block font-semibold from-[#FF72E1] to-[#F54C7A] bg-clip-text text-transparent bg-gradient-to-b" ><Typewriter/></div></h2>

        <p className="my-3">And I'm also glad you found your way to my website. No matter if you just came here out of curiosity, if you want to become more familiar with me or if you are looking for something specific: I hope you'll find it! If not: Drop me a line.</p>
        <p className="my-3">I am 27 years old and grew up in the area around Nuremberg in a small city called Schwabach. After finishing Abitur I decided to move to Stuttgart. Although I always wanted to move to a bigger city like Berlin, Hamburg or somewhere abroad, I'm still living in Stuttgart , because I really like my job and the people there.</p>
        <p className="my-3">During my studies at the Media University of Applied Sciences Stuttgart, I delved into Web Development with the focus on Backend Development, Business Logic and Database Administration.
            After (or probably during) finishing my bachelor thesis, my interest shifted more towards the subject of Artificial Intelligence and Machine Learning.</p>
        <p className="my-3">Luckily enough I was given the opportunity to write my master thesis at the Daimler AG in a small but highly motivated team called pacTris, because after finishing my thesis I decided to start working there fulltime as a software developer for Artificial Intelligence and Machine Learning .</p>
        <p className="my-3">If you have any comments, requests, suggestions or just want to say hello, then feel free to contact me via the contact form or via mail . I'm looking forward to hearing from you. Cheers!</p>
    </div>
    
    return (
        <Section title="About Me" content={content} />
    )
};
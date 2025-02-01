'use client'
import TypewriterLib from 'typewriter-effect';

export default function Typewriter() {

    const years = (() => {        
        return Math.abs(new Date(Date.now().valueOf() - new Date(1993, 8,24).valueOf()).getUTCFullYear() - 1970);
    })()
    return <TypewriterLib
        options={{
            strings: ['Jonas', 'Solutions Architect', `${years} years old`],
            autoStart: true,
            loop: true,
            skipAddStyles: true
        }}
    />
}
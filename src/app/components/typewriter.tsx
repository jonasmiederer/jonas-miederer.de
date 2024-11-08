'use client'
import TypewriterLib from 'typewriter-effect';

export default function Typewriter() {

    return <TypewriterLib
        options={{
            strings: ['Cloud Architect', 'World'],
            autoStart: true,
            loop: true,
            skipAddStyles: true
        }}
    />
}
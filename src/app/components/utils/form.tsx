'use client'

import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { useEffect, useState } from "react";


export default function Form() {


    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [message, setMessage] = useState("")
    const [isValid, setIsValid] = useState(false)

    useEffect(() => {
        checkValidity()
     }, [name, mail, message]);


    function checkValidity() {        
        if (name != "" && mail != "" && message != "") {
            setIsValid(true)
        } else {
            setIsValid(false);
        }
    }

    return (

        <div className="flex flex-col gap-3">
            <Input
                className="w-full"
                size="sm"
                label="Name"
                isRequired
                variant="underlined"
                value={name}
                onValueChange={val => { setName(val) }}
            />
            <Input
                className="w-full"
                size="sm"
                type="email"
                label="Email"
                isRequired
                variant="underlined"
                onValueChange={val => { setMail(val) }}
            />
            <Textarea
                className="w-full"
                size="sm"
                label="Message"
                isRequired
                variant="underlined"
                value={message}
                onValueChange={val => { setMessage(val)}}
            />

            <Button className="w-full" size="sm" variant="flat" isDisabled={!isValid}>
                Submit
            </Button>
        </div>

    )
};
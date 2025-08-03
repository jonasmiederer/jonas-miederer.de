'use client'

import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import { useEffect, useState } from "react";
import { addToast } from "@heroui/toast";

const API_URL = process.env.NEXT_PUBLIC_API_URL ? process.env.NEXT_PUBLIC_API_URL + 'contact' : 'error';

export default function Form() {


    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [message, setMessage] = useState("")
    const [isValid, setIsValid] = useState(false)

    useEffect(() => {
        checkValidity()
    }, [name, mail, message]);

    async function submit() {
        if (isValid) {
            const res = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, mail, message })
            });

            if (res && res.ok) {                
                addToast({
                    title: "I've got mail 🥹",
                    description: "Thanks for your message!",
                    timeout: 3000,
                    shouldShowTimeoutProgress: true,
                    color: "success"
                });
                setName("");
                setMail("");
                setMessage("");
            } else {
                addToast({
                    title: "Whoops, something went wrong.. 🤕",
                    description: "I'm sorry, please try again later or contact me via mail",
                    timeout: 3000,
                    shouldShowTimeoutProgress: true,
                    color: "danger"
                });
            }

        }
    }

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
                onValueChange={val => { setMessage(val) }}
            />

            <Button className="w-full" size="sm" variant="flat" isDisabled={!isValid} onClick={submit}>
                Submit
            </Button>
        </div>

    )
};
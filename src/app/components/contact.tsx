import { Button } from "@heroui/button";
import Section from "./section";
import { Divider } from "@heroui/divider";
import Form from "./utils/form";
import { Link } from "@heroui/link";

export default function Contact() {


    const content = <div className="flex flex-col md:flex-row w-full justify-between" >

        <div className="md:w-5/12 w-full flex flex-col gap-2 justify-center">
            <Button
                radius="full"
                className="bg-[#0077b5] shadow-lg"
                href="https://www.linkedin.com/in/jonas-miederer/"
                isExternal
                as={Link}
            >
                LinkedIn
            </Button>

            <Button
                radius="full"
                className="bg-[#24292e] text-white shadow-lg"
                href="https://github.com/jonasmiederer"
                isExternal
                as={Link}
            >
                Github
            </Button>

            <Button
                radius="full"
                className="bg-linear-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                href="mailto:hello@jonas-miederer.de"
                isExternal
                as={Link}
            >
                Mail
            </Button>
        </div>

        <div className="md:hidden my-10">
            <Divider className="" orientation="horizontal"></Divider>
        </div>

        <div className="sm:max-sm:hidden">
            <Divider className="" orientation="vertical"></Divider>
        </div>

        <div className="md:w-5/12 w-full">
            <Form></Form>
        </div>
    </div>

    return (
        <Section title="Contact" content={content} />
    )
};
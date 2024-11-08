'use client';

import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";
import { Chip } from "@nextui-org/chip";
import { useState } from "react";

export default function PortfolioParent(items) {

    // return <div className="grid gap-4 grid-cols-3 grid-rows-3"> flex flex-wrap 
    return <div className="grid gap-2 xl:gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4"> 
        {items.children}
    </div>

};

export function PortfolioItem({ name, description, link, image, tags }) {

    const [isItemActive, setIsItemActive] = useState(false);

    return <Card className={" " + (isItemActive ? 'col-span-2 row-span-2': 'max-h-[320px]')} shadow="sm" key={0} isPressable onPress={() => setIsItemActive(!isItemActive)}>
        <CardHeader className="flex gap-3">
            <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width={40}
            />
            <div className="flex flex-col items-start">
                <p className="text-md">{name}</p>
                <Link isExternal showAnchorIcon href={link.link}>{link.text}</Link>
            </div>
        </CardHeader>
        <Divider />
        <CardBody>
            <Image            
                alt="11Freunde App"
                className="object-cover rounded-xl max-h-80 h-full "                
                src={image}
                isZoomed={!isItemActive}
                removeWrapper                
            />

            
            { isItemActive && <p>{description}</p> }
        </CardBody>
        <Divider />
        <CardFooter>
            <div className="flex gap-4">
                {tags.map(tag => {
                    return (<Chip>{tag}</Chip>)
                })}
                                
            </div>
        </CardFooter>
    </Card>
}
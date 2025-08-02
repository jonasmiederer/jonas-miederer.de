'use client';

import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Link } from "@heroui/link";
import { Image } from "@heroui/image";
import { Divider } from "@heroui/divider";
import { Chip } from "@heroui/chip";
import { useState, cloneElement, ReactElement, Children, PropsWithChildren } from "react";
import React from "react";


interface PortfolioParentType {
    children: ReactElement<PartialPortfolioItemProps>[],
    renderItem: Function
}
export default function PortfolioParent({ children, renderItem }: PortfolioParentType) {

    const [activeItem, setActiveItem] = useState(null);

    return (
        <div className="grid gap-2 xl:gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {children.map((item) => {
                return renderItem(item, activeItem, setActiveItem);
            })}
        </div>
    );
};

export interface PortfolioItemProps {
    key: string,
    name: string;
    description: any;
    link?: {
        link: string;
        text: string;
        disabled?: boolean
    };
    image: string;
    tags: string[];
    activeItem?: string | null;
    setActiveItem?: Function
}

export type PartialPortfolioItemProps = Omit<PortfolioItemProps, 'activeItems' | 'setActiveItems'>

export function PortfolioItem({ key, name, description, link, image, tags, activeItem, setActiveItem }: PartialPortfolioItemProps) {

    return <Card className={" " + (activeItem === name ? 'col-span-2 row-span-2' : 'max-h-[320px]')} shadow="sm" key={key} isPressable onPress={() => setActiveItem && setActiveItem(activeItem === name ? null : name)}>
        <CardHeader className="flex gap-3">
            {/* <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width={40}
            /> */}
            <div className="flex flex-col items-start">
                <p className="text-md text-left">{name}</p>
                {link ? <Link isDisabled={link.disabled} isExternal showAnchorIcon href={link.link}>{link.text}</Link> : <div>&nbsp;</div>}

            </div>
        </CardHeader>
        <Divider />
        <CardBody>
            <Image
                alt="11Freunde App"
                className="object-cover rounded-xl max-h-80 h-full "
                src={image}
                isZoomed={activeItem !== name}
                removeWrapper
            />


            {activeItem === name && <p>{description}</p>}
        </CardBody>
        <Divider />
        <CardFooter>
            <div className="flex gap-1 overflow-auto">
                {tags.map((tag, index) => {
                    return (<Chip key={`${key}-${index}`}>{tag}</Chip>)
                })}

            </div>
        </CardFooter>
    </Card>
}
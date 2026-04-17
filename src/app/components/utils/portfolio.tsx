'use client';

import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Link } from "@heroui/link";
import { Image } from "@heroui/image";
import { Divider } from "@heroui/divider";
import { Chip } from "@heroui/chip";
import { useState } from "react";
import NextImage from "next/image";

export interface PortfolioItemProps {
    name: string;
    description: React.ReactNode;
    link?: {
        link: string;
        text: string;
        disabled?: boolean;
    };
    image: string;
    tags: string[];
}

interface PortfolioGridProps {
    items: PortfolioItemProps[];
}

export default function PortfolioGrid({ items }: PortfolioGridProps) {
    const [activeItem, setActiveItem] = useState<string | null>(null);

    return (
        <div className="grid gap-2 xl:gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {items.map((item) => {
                const isActive = activeItem === item.name;
                return (
                    <Card
                        key={item.name}
                        className={isActive ? 'col-span-2 row-span-2' : 'max-h-[320px]'}
                        shadow="sm"
                        isPressable
                        onPress={() => setActiveItem(isActive ? null : item.name)}
                    >
                        <CardHeader className="flex gap-3">
                            <div className="flex flex-col items-start">
                                <p className="text-md text-left">{item.name}</p>
                                {item.link
                                    ? <Link className="text-left" isDisabled={item.link.disabled} isExternal showAnchorIcon href={item.link.link}>{item.link.text}</Link>
                                    : <div>&nbsp;</div>
                                }
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody className="overflow-hidden">
                            <div className="overflow-hidden rounded-xl w-full relative" style={{ aspectRatio: '16/9' }}>
                                <Image
                                    as={NextImage}
                                    alt={item.name}
                                    className="object-cover rounded-xl"
                                    src={`/${item.image}`}
                                    fill
                                    sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                                    loading="lazy"
                                    isZoomed={!isActive}
                                    removeWrapper
                                />
                            </div>
                            {isActive && <div className="mt-4 text-sm leading-relaxed space-y-3">{item.description}</div>}
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <div className="flex gap-1 overflow-auto">
                                {item.tags.map((tag, index) => (
                                    <Chip key={`${item.name}-${index}`}>{tag}</Chip>
                                ))}
                            </div>
                        </CardFooter>
                    </Card>
                );
            })}
        </div>
    );
}

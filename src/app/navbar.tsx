'use client'
import { Link } from "@heroui/link";
import {
    Navbar as NavbarUI,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
} from "@heroui/navbar";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="flex justify-center">
            <NavbarUI shouldHideOnScroll className="flex justify-center center" >
                <NavbarContent className="flex flex-wrap center justify-center" justify="center">
                    {/* <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                /> */}
                    {/* <NavbarItem> */}
                    <Link color="foreground" href="#about">
                        About Me
                    </Link>
                    {/* </NavbarItem> */}
                    {/* <NavbarItem> */}
                    <Link color="foreground" href="#experience">
                        Experience
                    </Link>
                    {/* </NavbarItem> */}
                    {/* <NavbarItem> */}
                    <Link color="foreground" href="#portfolio">
                        Portfolio
                    </Link>
                    {/* </NavbarItem> */}

                    {/* <NavbarItem> */}
                    <Link color="foreground" href="#contact">
                        Contact
                    </Link>
                    {/* </NavbarItem> */}
                </NavbarContent>
            </NavbarUI>
        </div>
    );
}

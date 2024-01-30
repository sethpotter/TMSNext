'use client'

import {DropdownButton} from "@/components/DropdownButton";
import {Box, Button, Heading, Text, Flex, MenuButton, MenuItem} from "@chakra-ui/react";
import React from "react";
import styles from "./Header.module.css";
import {Inter, Oswald} from "next/font/google";
import Image from 'next/image';
import {FlexH, FlexV} from "../common";
import routes from "@/app/routes";
import Link from 'next/link';
import {navigate} from "@/app/actions";

const oswald = Oswald({weight: "500", subsets: ["latin"]});

export const Header = () => {

    const headerRoutes = [
        "Home",
        "About",
        "Catalog",
        "Contact"
    ];

    const tmsButtonBuilder = ({children, ...rest}: any) =>
        <MenuButton className={styles.button} {...rest} transition="all 0.4s">
            {children}
        </MenuButton>

    const tmsItemBuilder = ({children, ...rest}: any) =>
        <MenuItem className={styles.menuItem} {...rest}>{children}</MenuItem>

    const handleClick = (key: string) => {
        let path = routes[key as keyof typeof routes];
        const catalogPaths = routes["Catalog"][1] as {};

        if(!path) {
            path = catalogPaths[key as keyof typeof catalogPaths];
        }
        if(typeof path !== "string") {
            path = routes["Catalog"][0] as string;
        }

        console.log(path);
        navigate(path);
    }

    const buildNav = () => {
        return headerRoutes.map((key: string) => {
            const value = routes[key as keyof typeof routes];
            if(typeof value === 'string') {
                return (
                    <button key={key} className={styles.button} onClick={() => handleClick(key)}>{key}</button>
                );
            } else {
                return (
                    <DropdownButton key={key}
                                    name={key}
                                    items={Object.keys(value[1])}
                                    onClick={(result) => handleClick(result)}
                                    useIcon={false}
                                    buttonBuilder={tmsButtonBuilder}
                                    itemBuilder={tmsItemBuilder}
                    />
                );
            }
        })
    }

    return (
        <Box className="border-b border-black">
            <FlexH justifyContent="center">
                <Box minW="1000px">
                    <FlexV h="150px">
                        <FlexH pb={5} className={oswald.className} justifyContent="space-between">
                            <FlexH flexGrow={0} gap={3}>
                                <FlexV pl={4} justifyContent="center">
                                    <Link href="/">
                                        <Image src="/images/logo.webp" alt="TMS Logo" width="104" height="100" />
                                    </Link>
                                </FlexV>
                                <FlexV color="#071f4e" justifyContent="center">
                                    <Text fontSize="30px">Temperature Measurement Systems</Text>
                                    <Text fontSize="16px">Quality Thermocouples, Designed at Competitive Prices</Text>
                                </FlexV>
                            </FlexH>
                            <FlexV pt={3} color="#071f4e" justifyContent="center" alignItems="end">
                                <Text>(903) 489-1405</Text>
                                <Text>Toll Free (800) 967-6498</Text>
                            </FlexV>
                        </FlexH>
                    </FlexV>
                    <Box className="flex basis-0 items-center justify-between">
                        {buildNav()}
                    </Box>
                </Box>
            </FlexH>
        </Box>
    );
}

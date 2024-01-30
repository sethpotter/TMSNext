'use client'

import {Box, Button, Text, Link} from "@chakra-ui/react";
import React from "react";
import Image from 'next/image'
import {FlexH, FlexV} from "../common";

export const Footer = () => {
    return (
        <Box className="border-t border-black">
            <FlexH pt={5} justifyContent="center" alignItems="center">
                <FlexV gap={1} justifyContent="center" alignItems="center" color="grey" fontSize="14px" flexGrow={0}>
                    <Text>© 2024, TMS, Inc. All Rights Reserved.</Text>
                    <FlexH gap={2}>
                        <Link href="/about">About</Link>
                        <Link href="/catalog">Catalog</Link>
                        <Link href="/contact">Contact</Link>
                    </FlexH>
                    <FlexV alignItems="center">
                        <Text h="20px">Contact Sales</Text>
                        <Text>+1 (903) 489-1405</Text>
                    </FlexV>
                    <Button variant="ghost">
                        <Image src="/images/logo.webp" alt="TMS Logo" width="72" height="64" />
                    </Button>
                </FlexV>
            </FlexH>
        </Box>
    );
}

import {Box, Button, Divider, Image, Text} from "@chakra-ui/react";
import routes from "@/app/routes";
import Link from "next/link";
import {FlexH, FlexV} from "@/components/common";

const TmsButton = ({children, ...rest}: any) => {
    return (
        <Button
            boxShadow="
                inset 0 2px 6px 0 rgba(255, 255, 255, 0.3),
                inset 0 -3px 6px 0 rgba(0, 0, 0, 0.6),
                0px 1px 6px 1px rgba(0, 0, 0, 0.4)"
            border="3px solid black"
            borderRadius="10px"
            minW="191px"
            minH="50px"
            bg="#071f4e"
            color="white"
            {...rest}
            _hover={{
                color: "black",
                background: "#F0F0F0"
            }}
        >
            {children}
        </Button>
    );
}

const getBrowseButtons = () => {
    const catalogPages: {} = routes["Catalog"][1];

    return Object.keys(catalogPages).map((page) => {

        const value = catalogPages[page as keyof typeof catalogPages];

        return (
            <Link key={"browse-" + page} href={value}>
                <TmsButton isDisabled={!value}>
                    {page}
                </TmsButton>
            </Link>
        );
    })
}

const BrowserButtons = () => {
    return (
        <FlexV flexGrow={0}>
            <FlexV p={3} border="3px solid #071f4e" alignItems="center" flexGrow={0}>
                <Text mb={4} color="#071f4e" fontSize="26px" fontWeight="600">Browse</Text>
                <FlexV flexGrow={0}>
                    {getBrowseButtons()}
                </FlexV>
                <Divider my={6} borderColor="grey" />
                <Link href="https://www.flipsnack.com/A68D5D5569B/new-flipbook/full-view.html" target="_blank">
                    <TmsButton bg="#1f5bd1">View Catalog</TmsButton>
                </Link>
                <Link href="/about">
                    <TmsButton>Learn More</TmsButton>
                </Link>
                <Link href="/warranty">
                    <TmsButton>Warranty</TmsButton>
                </Link>
                <Link href="/distributor">
                    <TmsButton>Distribution</TmsButton>
                </Link>
            </FlexV>
        </FlexV>
    );
}

const TMSPage = ({children, ...rest}: any) => {
    return (
        <FlexH my={3} justifyContent="center">
            <FlexH gap={5} justifyContent="center">
                <BrowserButtons/>
                <FlexV flexGrow={0}>
                    <FlexV maxWidth="656" border="3px solid #071f4e">
                        <Image src="/images/contentBanner.webp" width="648" height="158" />
                        <Text m={2.5} color="#444444" fontWeight="350" fontSize="17px" lineHeight="20px" letterSpacing="-0.5px">
                            {children}
                        </Text>
                    </FlexV>
                    <Box p={1} pt={4}>
                        <Image style={{borderRadius: "10px"}} src="/images/qualityProducts.webp" width="648" height="118" />
                        <Box className="innerShadow" position="relative" top="-100%" width="100%" height="100%"></Box>
                    </Box>
                </FlexV>
            </FlexH>
        </FlexH>
    );
}

export {
    BrowserButtons,
    TMSPage
}
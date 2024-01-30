import {Header} from "@/components/Navbar/header";
import {Footer} from "@/components/Navbar/footer";
import {Roboto} from "next/font/google";
import {TMSPage} from "@/app/tms-layouts";
import {Button, ListItem, Text, UnorderedList, Link} from "@chakra-ui/react";
import {FlexH, FlexV} from "@/components/common";

const roboto = Roboto({weight: "100", subsets: ["latin"]});
const robotoBold = Roboto({weight: "400", subsets: ["latin"]});

export default function Page() {

    const rtds = {
        "Type 1": "/catalog/rtds/type-1",
        "Type 2": "/catalog/rtds/type-2",
        "Type 3": "/catalog/rtds/type-3",
        "Type 4": "/catalog/rtds/type-4",
        "Type S4": "/catalog/rtds/type-4-S",
        "Type 5": "/catalog/rtds/type-5",
        "Type 6": "/catalog/rtds/type-6"
    }

    return (
        <>
            <Header/>
            <TMSPage useIcon={false}>
                <Text as="b">
                    RTDs&nbsp;
                </Text>
                <br/>
                <br/>
                Temperature Measurement System has manufactured quality Resistance Temperature Detectors (RTDs), also
                known as resistive thermal devices, since 1981.
                <br/>
                <br/>
                Measurement of temperature with a resistance temperature detector is a matter of measuring resistance.
                The sensing element in an RTD is usually a small diameter wire, processed in such a manner so that its
                resistance will change in a known and repeatable manner relative to temperature.
                <br/>
                <br/>
                RTDs are commonly used because their results are more stable, accurate and repeatable.
                offer many RTD sensor types and parts including terminal heads, terminal and barrier blocks,
                extensions and RTD elements.
                <br/>
                <br/>
                <Text mb={1} fontWeight="600">
                    RTD products include:&nbsp;
                </Text>
                <UnorderedList>
                    <ListItem>Platinum RTDs</ListItem>
                    <ListItem>Nickel RTDs</ListItem>
                    <ListItem>Copper RTDs</ListItem>
                    <ListItem>High Accuracy RTDs</ListItem>
                    <ListItem>Hard Pack RTDs</ListItem>
                    <ListItem>RTD / Transmitter Assemblies</ListItem>
                    <ListItem>RTD Assemblies</ListItem>
                </UnorderedList>
                <br/>
                <br/>
                <Text mb={1} fontWeight="600">
                    RTDs:&nbsp;
                </Text>
                <FlexH gap={2} flexWrap="wrap">
                    {
                        Object.keys(rtds).map((key) =>
                            <Link color="blue.400"
                                  key={"link-" + key}
                                  href={rtds[key as keyof typeof rtds]}
                                  p={1}
                            >
                                {key}
                            </Link>
                        )
                    }
                </FlexH>
            </TMSPage>
            <Footer/>
        </>
    );
}

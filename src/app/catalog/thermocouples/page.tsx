import {Header} from "@/components/Navbar/header";
import {Footer} from "@/components/Navbar/footer";
import {Roboto} from "next/font/google";
import {TMSPage} from "@/app/tms-layouts";
import {Button, ListItem, Text, UnorderedList, Link} from "@chakra-ui/react";
import {FlexH, FlexV} from "@/components/common";

const roboto = Roboto({weight: "100", subsets: ["latin"]});
const robotoBold = Roboto({weight: "400", subsets: ["latin"]});

export default function Page() {

    const thermocouples = {
        "Type 1": "/catalog/thermocouples/type-1",
        "Type 2": "/catalog/thermocouples/type-2",
        "Type 3": "/catalog/thermocouples/type-3",
        "Type 4": "/catalog/thermocouples/type-4",
        "Type S4": "/catalog/thermocouples/type-4-S",
        "Type 5": "/catalog/thermocouples/type-5",
        "Type 6": "/catalog/thermocouples/type-6",
        "Type 7": "/catalog/thermocouples/type-7",
        "Type 8": "/catalog/thermocouples/type-8",
        "Type 9": "/catalog/thermocouples/type-9",
        "Type 10": "/catalog/thermocouples/type-10",
        "Type 11": "/catalog/thermocouples/type-11",
        "Tube Skin": "/catalog/thermocouples/tube-skin",
        "Multi Point": "/catalog/thermocouples/multi-point",
    }

    return (
        <>
            <Header/>
            <TMSPage useIcon={false}>
                <Text as="b">
                    Thermocouples&nbsp;
                </Text>
                <br/>
                <br/>
                Thermocouples measure the voltage related to temperature difference at the junction between two
                dissimilar metals. They are commonly used because they are convenient, versatile and cost efficient.
                <br/>
                <br/>
                Temperature Measurement System has manufactured quality thermocouples for numerous applications since
                1981. We offer many thermocouple types, assemblies and elements including terminal heads, terminal and
                barrier blocks, extensions, tube skin assemblies and multipoint assemblies.
                <br/>
                <br/>
                Our on-site machine shop gives us the ability to manufacture our own temperature sensors and offer a
                higher level of quality to our valued customers. It also gives us the flexibility to customize and
                design thermocouples to your individual specifications.
                <br/>
                <br/>
                We have years of experience providing custom temperature measurement solutions based on their
                temperature range, chemical resistance of the thermocouple or sheath material, abrasion resistance and
                installation requirements.
                <br/>
                <br/>
                <Text mb={1} fontWeight="600">
                    Thermocouple products include:&nbsp;
                </Text>
                <UnorderedList>
                    <ListItem>Industrial Thermocouples</ListItem>
                    <ListItem>Miniature Thermocouples</ListItem>
                    <ListItem>Bayonet Thermocouples</ListItem>
                    <ListItem>Melt-Bolt Thermocouples</ListItem>
                    <ListItem>Washer Thermocouples</ListItem>
                    <ListItem>Wire Type Thermocouples</ListItem>
                    <ListItem>Tube Skin Thermocouples</ListItem>
                    <ListItem>Engine Thermocouples</ListItem>
                    <ListItem>Cuttable Thermocouples</ListItem>
                    <ListItem>Industrial Thermocouple Assemblies</ListItem>
                    <ListItem>Tube Skin Thermocouple Assemblies</ListItem>
                    <ListItem>Multi-Point Thermocouple Assemblies</ListItem>
                </UnorderedList>
                <br/>
                <br/>
                <Text mb={1} fontWeight="600">
                    Thermocouples:&nbsp;
                </Text>
                <FlexH gap={2} flexWrap="wrap">
                    {
                        Object.keys(thermocouples).map((key) =>
                            <Link color="blue.400"
                                  key={"link-" + key}
                                  href={thermocouples[key as keyof typeof thermocouples]}
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

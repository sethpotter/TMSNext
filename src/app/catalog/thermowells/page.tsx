import {Header} from "@/components/Navbar/header";
import {Footer} from "@/components/Navbar/footer";
import {Roboto} from "next/font/google";
import {TMSPage} from "@/app/tms-layouts";
import {Button, ListItem, Text, UnorderedList, Link} from "@chakra-ui/react";
import {FlexH, FlexV} from "@/components/common";

const roboto = Roboto({weight: "100", subsets: ["latin"]});
const robotoBold = Roboto({weight: "400", subsets: ["latin"]});

export default function Page() {

    const thermowells = {
        "Straight Barstock": "/catalog/thermowells/straight-barstock",
        "Tapered Barstock": "/catalog/thermowells/tapered-barstock",
        "Tubes No Bushing": "/catalog/thermowells/tubes-no-bushing",
        "Tubes Mounting Bushing": "/catalog/thermowells/tubes-mounting-bushing",
        "Tubes Flanged": "/catalog/thermowells/tubes-flanged",
        "Socket Weld": "/catalog/thermowells/socket-weld",
        "Weld In, Barstock": "/catalog/thermowells/weld-in-barstock",
        "Flanged Barstock": "/catalog/thermowells/flanged-barstock",
        "Flanged Tantalum Sleeve": "/catalog/thermowells/flanged-tantalum-sleeve",
        "Ground Joint": "/catalog/thermowells/ground-joint",
        "Van Stone": "/catalog/thermowells/van-stone"
    }

    return (
        <>
            <Header/>
            <TMSPage useIcon={false}>
                <Text as="b">
                    Thermowells&nbsp;
                </Text>
                <br/>
                <br/>
                Thermowells protect temperature sensors used in industrial processes. The materials selected for
                service is governed by the environment the thermowell will be subject to. Corrosion resistance is one
                of the major concerns in regard to material selection of a particular application.
                <br/>
                <br/>
                Thermowells not only help to extend the life of temperature sensors, but they allow for easy sensor
                replacement and prevent temperature measurement interruptions.
                <br/>
                <br/>
                TMS has provided quality thermowells for over 40 years and has the advantage of an on-site machine
                shop to help facilitate custom orders and improve customer service.
                <br/>
                <br/>
                The sales staff at TMS is capable of offering assistance in selecting materials and/or thermowells for
                a given service. Suggestions can be offered based on information about the particular application.
                <br/>
                <br/>
                <Text mb={1} fontWeight="600">
                    Thermowell products include:&nbsp;
                </Text>
                <UnorderedList>
                    <ListItem>Straight Threaded Thermowells</ListItem>
                    <ListItem>Tapered Threaded Thermowells</ListItem>
                    <ListItem>Threaded Bimetal Thermometer wells</ListItem>
                    <ListItem>Flanged Thermowells</ListItem>
                    <ListItem>Van Stone Thermowells</ListItem>
                    <ListItem>Socket Weld Thermowells</ListItem>
                    <ListItem>Weld-In Thermowells</ListItem>
                    <ListItem>Test Wells</ListItem>
                    <ListItem>Sample Probes</ListItem>
                    <ListItem>Metal Protection Tubes</ListItem>
                    <ListItem>Ceramic Protection Tubes</ListItem>
                    <ListItem>Coated Thermowells</ListItem>
                    <ListItem>Specialty Thermowells to Customer Specs</ListItem>
                </UnorderedList>
                <br/>
                <br/>
                <Text mb={1} fontWeight="600">
                    Thermowells:&nbsp;
                </Text>
                <FlexH gap={2} flexWrap="wrap">
                    {
                        Object.keys(thermowells).map((key) =>
                            <Link color="blue.400"
                                  key={"link-" + key}
                                  href={thermowells[key as keyof typeof thermowells]}
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

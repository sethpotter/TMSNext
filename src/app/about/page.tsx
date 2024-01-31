import {ListItem, Text, UnorderedList, Link} from "@chakra-ui/react";
import {Header} from "@/components/Navbar/header";
import {Footer} from "@/components/Navbar/footer";
import {TMSPage} from "@/app/tms-layouts";

export default function Page() {
    return (
        <>
            <Header/>
            <TMSPage>
                <Text>
                    <Text as="b">
                        Temperature Measurement Systems (TMS)&nbsp;
                    </Text>
                    manufactures a complete line of high quality customized and standard temperature sensors.
                    Since 1980, we have provided temperature sensors and their related hardware to industry.
                    Unlike many other manufactures, TMS is equipped with an on-site machine shop.
                    This enables us to manufacture our own products and maintain a high standard of
                    quality and customer service.
                </Text>
                <br/>
                <Text mb={1} fontWeight="600">
                    Some of the temperature sensing devices TMS produces are:
                </Text>
                <UnorderedList>
                    <ListItem>Thermocouples</ListItem>
                    <ListItem>Thermocouple Assemblies</ListItem>
                    <ListItem>Thermowells</ListItem>
                    <ListItem>RTDs (Resistance Temperature Detectors)</ListItem>
                    <ListItem>RTD Assemblies</ListItem>
                    <ListItem>Multi-point Thermocouples</ListItem>
                    <ListItem>Tubeskin Thermocouples</ListItem>
                    <ListItem>Wire & Accessories</ListItem>
                    <ListItem>All related hardware</ListItem>
                </UnorderedList>
                <br/>
                <Text>
                    These are just some of the products TMS manufactures.
                    If you are interested in other related products that we have to offer just visit
                    our <Link color="blue" href="/catalog">products page</Link> or <Link color="blue" href="/contact">contact</Link> a sales representative.
                    <br/>
                    <br/>
                    TMS maintains large inventories of standard and exotic materials for emergency
                    situations. Rush deliveries are no problem. At TMS, our goal is to provide our customers
                    with the product they need, when they need it while maintaining high standards of
                    quality at competitive prices.
                </Text>
            </TMSPage>
            <Footer/>
        </>
    );
}

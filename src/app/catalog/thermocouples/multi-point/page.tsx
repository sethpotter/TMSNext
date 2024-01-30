import {Header} from "@/components/Navbar/header";
import {Footer} from "@/components/Navbar/footer";
import {EasyTable, FlexH, FlexV} from "@/components/common";
import {Oswald, Roboto} from "next/font/google";
import {Text, Image, Divider, Table, TableContainer, Th, Tr, Thead, Tbody, Td} from "@chakra-ui/react";

import parameters from "@/../public/data/parameters.json";
import thermocouples from "@/../public/data/thermocouples.json";

const roboto = Roboto({weight: "100", subsets: ["latin"]});
const robotoBold = Roboto({weight: "400", subsets: ["latin"]});

export default function Page() {

    return (
        <>
            <Header/>
                <FlexV my={10} alignItems="center">
                    <FlexV maxW="1000px">
                        <FlexH bg="#071f4e">
                            <FlexV py={2} px={4}>
                                <Text fontSize="28px" color="white">Multi Point Thermocouple Assembly  - Thermocouples</Text>
                            </FlexV>
                        </FlexH>
                        <FlexH p={4} minW="1000px" justifyContent="center" alignItems="center" gap={3}>
                            <Image width="800px"
                                   height="550px"
                                   src="/images/thermocouples/drawings/multipoint.png"
                                   style={{filter: "contrast(90%) brightness(125%) saturate(75%)"}}
                                   alt=""
                                   mt={2}
                            />
                        </FlexH>
                        <Divider borderWidth="1px" borderColor="black" />
                        <FlexV p={4}>
                            <Text fontSize="18px">
                                Multipoint Assemblies are manufactured in three basic designs. Due to the many
                                variations that are possible with these designs no ordering information is provided
                                within this literature.
                                Please consult TMS with your individual specifications for these items.
                                <br/>
                                <br/>
                                <b>Guide Tube Design</b> – Thermocouple elements are bottomed into a block which is an
                                integral part of the protection tube assembly. The blocks provide increased sensitivity
                                to temperature change. Individual thermocouple elements are easily replaceable without
                                the need to disassemble the entire thermocouple assembly.
                                <br/>
                                <br/>
                                <b>Spring Loaded Design</b> – Spring loaded design forces thermocouple hot junction to come in
                                contact with the inner wall of the thermocouple protection tube providing quick
                                response to temperature change.
                                <br/>
                                <br/>
                                <b>Free Hanging Design</b> – Thermocouple elements are manufactured to specified lengths and
                                are secured to a Stainless Steel strap by clamps. The Multipoint thermocouple bundle
                                hangs freely inside the protection tube.
                                <br/>
                                <br/>
                                Other designs and configurations are available.  Consult TMS.
                            </Text>
                        </FlexV>
                    </FlexV>
                </FlexV>
            <Footer/>
        </>
    );
}

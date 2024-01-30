import {Header} from "@/components/Navbar/header";
import {Footer} from "@/components/Navbar/footer";
import {EasyTable, FlexH, FlexV} from "@/components/common";
import {Oswald, Roboto} from "next/font/google";
import {Text, Image, Divider} from "@chakra-ui/react";

import parameters from "@/../public/data/parameters.json";
import rtds from "@/../public/data/rtds.json";

const roboto = Roboto({weight: "100", subsets: ["latin"]});
const robotoBold = Roboto({weight: "400", subsets: ["latin"]});

export default function Page() {

    const rtd = rtds["type_3"];

    const displayParameter = (parameter: any) => {
        const options = parameter.value;
        const html = Object.keys(options).map((key) => {
            const value = options[key as keyof typeof options];
            return (
                <Text key={"param" + key}><b>{value}</b> - {key}</Text>
            );
        });

        return (
            <FlexV flexGrow={0}>
                <Text fontWeight="600">{parameter.name}</Text>
                <FlexV flexGrow={0}>
                    {html}
                </FlexV>
            </FlexV>
        )
    }

    const getParameters = () => {
        const sensor_type = parameters["sensor_type"];
        const number_of_wires = parameters["number_of_wires"];
        const sheath_diameter = parameters["sheath_diameter"];
        delete sheath_diameter.value[".062 (1/16\")"];
        delete sheath_diameter.value[".375 (3/8\")"];
        const sheath_material = parameters["sheath_material"];
        const armor_material_and_length = parameters["armor_material_and_length"];
        armor_material_and_length.name = "Armor"
        const lead_insulation = parameters["lead_insulation"];
        lead_insulation.value = {
            "Teflon": "TT",
            "Fiberglass": "GG"
        };
        const temp_range = parameters["temp_range"];
        return (
            <FlexH justifyContent="space-between">
                <FlexV gap={3}>
                    {displayParameter(sensor_type)}
                    {displayParameter(number_of_wires)}
                    {displayParameter(sheath_diameter)}
                    <FlexV flexGrow={0}>
                        <Text fontWeight="600">Sheath Length &quot;L&quot; - Specify In Inches</Text>
                        <Text>
                            Represented by a number. Specify the length &quot;L&quot;
                            <br/>
                            of the sheath in inches.
                        </Text>
                    </FlexV>
                </FlexV>
                <FlexV gap={3}>
                    {displayParameter(sheath_material)}
                    {displayParameter(armor_material_and_length)}
                    <FlexV flexGrow={0}>
                        <Text fontWeight="600">Armor Length &quot;L&quot; - Specify In Inches</Text>
                        <Text>
                            Represented by a number. Specify the length &quot;L&quot;
                            <br/>
                            of the armor in inches.
                        </Text>
                    </FlexV>
                    {displayParameter(lead_insulation)}
                    <FlexV flexGrow={0}>
                        <Text fontWeight="600">Lead Length - Specify In Inches</Text>
                        <Text>
                            Represented by a number. Specify the length &quot;L&quot;
                            <br/>
                            of the leads in inches.
                        </Text>
                    </FlexV>
                    {displayParameter(temp_range)}
                </FlexV>
            </FlexH>
        );
    }

    return (
        <>
            <Header/>
                <FlexV my={10} alignItems="center">
                    <FlexV maxW="1000px" minW="1000px">
                        <FlexH bg="#071f4e">
                            <FlexV py={2} px={4}>
                                <Text fontSize="28px" color="white">{rtd.name} - RTDs</Text>
                                <Text fontSize="20px" color="blue.100">{rtd.description}</Text>
                            </FlexV>
                        </FlexH>
                        <FlexH p={4} justifyContent="space-between" alignItems="center" gap={3}>
                            <Image width="450px"
                                   height="100px"
                                   src={rtd.image}
                                   style={{filter: "contrast(90%) brightness(125%) saturate(75%)"}}
                                   alt=""
                                   objectFit="scale-down"
                                   mt={2}
                            />
                            <FlexV justifyContent="center" alignItems="center" textAlign="center">
                                <Text><b>Example Order</b></Text>
                                <Text
                                    fontSize="20px"><u>3</u> - <u>2P</u> - <u>3</u> - <u>4</u> - <u>12</u> - <u>R</u> - <u>TH</u> - <u>36</u> - <u>TT</u> - <u>42</u> - <u>TEMP</u></Text>
                                <Text>The dashes <b>—</b> separate the part parameters.</Text>
                            </FlexV>
                        </FlexH>
                        <FlexH alignItems="center" mb={2}>
                            <Text fontSize="18px" fontWeight="600" mr={3}>Design Type: {rtd.code}</Text>
                            <FlexH>
                                <Divider borderWidth="1px" borderColor="black"/>
                            </FlexH>
                        </FlexH>
                        <FlexV>
                            {getParameters()}
                        </FlexV>
                        <br/>
                        For Dual Sensors Designate As 2 + Sensor Code.
                        <br/>
                        Ex: Dual 100 OHM Platinum = 2P
                        <br/>
                        * NOTE: For Smaller Diameter Sensors, Consult TMS.
                        <br/>
                        ** NOTE: Sensors with Code "HT" will be provided with Fiberglass Leads.
                        <br/>
                        *** NOTE: Sensors with Code "HP" will be provided with Hard Packed RTD.
                        <br/>
                        All HP sensors provided with transition.
                        <br/>
                        Sensors with No Code (362°F) will be provided with Teflon Lead unless otherwise specified.
                    </FlexV>
                </FlexV>
            <Footer/>
        </>
    );
}

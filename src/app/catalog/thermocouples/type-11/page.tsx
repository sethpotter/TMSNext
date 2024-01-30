import {Header} from "@/components/Navbar/header";
import {Footer} from "@/components/Navbar/footer";
import {EasyTable, FlexH, FlexV} from "@/components/common";
import {Oswald, Roboto} from "next/font/google";
import {Text, Image, Divider} from "@chakra-ui/react";

import parameters from "@/../public/data/parameters.json";
import thermocouples from "@/../public/data/thermocouples.json";

const roboto = Roboto({weight: "100", subsets: ["latin"]});
const robotoBold = Roboto({weight: "400", subsets: ["latin"]});

export default function Page() {

    const thermocouple = thermocouples["type_11"];

    const displayParameter = (parameter: any) => {
        const options = parameter.value;
        const html = Object.keys(options).map((key) => {
            const value = options[key as keyof typeof options];
            return (
                <Text key=""><b>{value}</b> - {key}</Text>
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
        const sheath_material = parameters["sheath_material"];
        const sheath_diameter = parameters["sheath_diameter"];
        const thermocouple_calibration_type = parameters["thermocouple_calibration_type"];
        const hot_junction = parameters["hot_junction"];
        const armor_material_and_length = parameters["armor_material_and_length"];
        armor_material_and_length.name = "Armor"
        const lead_insulation = parameters["lead_insulation"];
        return (
            <FlexH justifyContent="space-between">
                <FlexV gap={3}>
                    {displayParameter(sheath_material)}
                    {displayParameter(sheath_diameter)}
                    {displayParameter(thermocouple_calibration_type)}
                    {displayParameter(hot_junction)}
                </FlexV>
                <FlexV gap={3}>
                    <FlexV flexGrow={0}>
                        <Text fontWeight="600">Sheath Length &quot;L1&quot; - Specify In Inches</Text>
                        <Text>
                            Represented by a number. Specify the length &quot;L&quot;
                        </Text>
                    </FlexV>
                    <FlexV flexGrow={0}>
                        <Text fontWeight="600">Sheath Length &quot;L2&quot; - Specify In Inches</Text>
                        <Text>
                            Represented by a number. Specify the length &quot;L&quot;
                        </Text>
                    </FlexV>
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
                        <Text fontWeight="600">Lead Insulation - 20 AWG Standard</Text>
                        <Text>20 AWG, 16 AWG</Text>
                    </FlexV>
                    <FlexV flexGrow={0}>
                        <Text fontWeight="600">Lead Length &quot;L&quot; - Specify In Inches</Text>
                        <Text>
                            Represented by a number. Specify the length &quot;L&quot;
                            <br/>
                            of the sheath in inches.
                        </Text>
                    </FlexV>
                </FlexV>
            </FlexH>
        );
    }

    return (
        <>
            <Header/>
                <FlexV my={10} alignItems="center">
                    <FlexV maxW="1000px">
                        <FlexH bg="#071f4e">
                            <FlexV py={2} px={4}>
                                <Text fontSize="28px" color="white">{thermocouple.name} - Thermocouples</Text>
                                <Text fontSize="20px" color="blue.100">{thermocouple.description}</Text>
                            </FlexV>
                        </FlexH>
                        <FlexH p={4} justifyContent="space-between" alignItems="center" gap={3}>
                            <Image width="550px"
                                   height="200px"
                                   src={thermocouple.image}
                                   style={{filter: "contrast(90%) brightness(125%) saturate(75%)"}}
                                   alt=""
                                   objectFit="scale-down"
                                   mt={2}
                            />
                            <FlexV justifyContent="center" alignItems="center" textAlign="center">
                                <Text><b>Example Order</b></Text>
                                <Text fontSize="20px"><u>11</u> - <u>Q</u> - <u>6</u> - <u>J</u> - <u>G</u> - <u>6</u> - <u>9</u> - <u>SH42</u> - <u>GG16</u> - <u>6</u></Text>
                                <Text>The dashes <b>—</b> separate the part parameters.</Text>
                            </FlexV>
                        </FlexH>
                        <FlexH alignItems="center" mb={2}>
                            <Text fontSize="18px" fontWeight="600" mr={3}>Design Type: {thermocouple.code}</Text>
                            <FlexH>
                                <Divider borderWidth="1px" borderColor="black" />
                            </FlexH>
                        </FlexH>
                        <FlexV>
                            {getParameters()}
                        </FlexV>
                    </FlexV>
                </FlexV>
            <Footer/>
        </>
    );
}

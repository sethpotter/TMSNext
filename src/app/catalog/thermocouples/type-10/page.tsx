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

    const thermocoupleBead = thermocouples["type_10_beaded"];
    const thermocoupleNoble = thermocouples["type_10_noble"];

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

    const getParametersBead = () => {
        const thermocouple_calibration_type = parameters["thermocouple_calibration_type_beaded"];
        return (
            <FlexH justifyContent="space-between">
                <FlexV gap={3}>
                    {displayParameter(thermocouple_calibration_type)}
                    <FlexV flexGrow={0}>
                        <Text fontWeight="600">Standard Wire Sizes (AWG)</Text>
                        <Text>8, 14, 20, 24  Other sizes available</Text>
                    </FlexV>
                    <FlexV flexGrow={0}>
                        <Text fontWeight="600">Ceramic Insulators Length &quot;L&quot; - Specify In Inches</Text>
                        <Text>
                            Represented by a number. Specify the length &quot;L&quot;
                        </Text>
                    </FlexV>
                    <Text>
                        *** Insulator Material unless otherwise specified are <b>Mullite</b> for Type K, J, E and T Thermocouples.
                        Other materials are available, Contact TMS.
                    </Text>
                </FlexV>
                <FlexV gap={3}>

                </FlexV>
            </FlexH>
        );
    }

    const getParametersNoble = () => {
        const thermocouple_calibration_type = parameters["thermocouple_calibration_type_noble"];
        return (
            <FlexH justifyContent="space-between">
                <FlexV gap={3}>
                    {displayParameter(thermocouple_calibration_type)}
                    <FlexV flexGrow={0}>
                        <Text fontWeight="600">Wire 24 AWG Standard</Text>
                        <Text>Other sizes available, Contact TMS</Text>
                    </FlexV>
                    <FlexV flexGrow={0}>
                        <Text fontWeight="600">Ceramic Insulators Length &quot;L&quot; - Specify In Inches</Text>
                        <Text>
                            Represented by a number. Specify the length &quot;L&quot;
                        </Text>
                    </FlexV>
                    <Text>
                        *** Insulator Material for the Noble Metal Thermocouples is <b>Alumina</b> unless otherwise specified.
                        Other materials are available, Contact TMS.
                    </Text>
                </FlexV>
                <FlexV gap={3}>

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
                                <Text fontSize="28px" color="white">{thermocoupleBead.name} - Thermocouples</Text>
                                <Text fontSize="20px" color="blue.100">{thermocoupleBead.description}</Text>
                            </FlexV>
                        </FlexH>
                        <FlexH p={4} justifyContent="space-between" alignItems="center" gap={3}>
                            <Image width="625px"
                                   height="100px"
                                   src={thermocoupleBead.image}
                                   style={{filter: "contrast(90%) brightness(125%) saturate(75%)"}}
                                   alt=""
                                   objectFit="scale-down"
                                   mt={2}
                            />
                            <FlexV justifyContent="center" alignItems="center" textAlign="center">
                                <Text><b>Example Order</b></Text>
                                <Text fontSize="20px"><u>10</u> - <u>K</u> - <u>14</u> - <u>12</u></Text>
                                <Text>The dashes <b>—</b> separate the part parameters.</Text>
                            </FlexV>
                        </FlexH>
                        <FlexH alignItems="center" mb={2}>
                            <Text fontSize="18px" fontWeight="600" mr={3}>Design Type: {thermocoupleBead.code}</Text>
                            <FlexH>
                                <Divider borderWidth="1px" borderColor="black" />
                            </FlexH>
                        </FlexH>
                        <FlexV>
                            {getParametersBead()}
                        </FlexV>
                    </FlexV>
                </FlexV>
                <FlexV my={10} alignItems="center">
                    <FlexV maxW="1000px">
                        <FlexH bg="#071f4e">
                            <FlexV py={2} px={4}>
                                <Text fontSize="28px" color="white">{thermocoupleNoble.name} - Thermocouples</Text>
                                <Text fontSize="20px" color="blue.100">{thermocoupleNoble.description}</Text>
                            </FlexV>
                        </FlexH>
                        <FlexH p={4} justifyContent="space-between" alignItems="center" gap={3}>
                            <Image width="625px"
                                   height="100px"
                                   src={thermocoupleNoble.image}
                                   style={{filter: "contrast(90%) brightness(125%) saturate(75%)"}}
                                   alt=""
                                   objectFit="scale-down"
                                   mt={2}
                            />
                            <FlexV justifyContent="center" alignItems="center" textAlign="center">
                                <Text><b>Example Order</b></Text>
                                <Text fontSize="20px"><u>10</u> - <u>R</u> - <u>24</u> - <u>36</u></Text>
                                <Text>The dashes <b>—</b> separate the part parameters.</Text>
                            </FlexV>
                        </FlexH>
                        <FlexH alignItems="center" mb={2}>
                            <Text fontSize="18px" fontWeight="600" mr={3}>Design Type: {thermocoupleNoble.code}</Text>
                            <FlexH>
                                <Divider borderWidth="1px" borderColor="black" />
                            </FlexH>
                        </FlexH>
                        <FlexV>
                            {getParametersNoble()}
                        </FlexV>
                    </FlexV>
                </FlexV>
            <Footer/>
        </>
    );
}

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

    const thermocouple = thermocouples["type_4"];

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
        const lead_insulation = parameters["lead_insulation"];
        return (
            <FlexH justifyContent="space-between">
                <FlexV gap={3}>
                    {displayParameter(sheath_material)}
                    {displayParameter(sheath_diameter)}
                    {displayParameter(thermocouple_calibration_type)}
                </FlexV>
                <FlexV gap={3}>
                    {displayParameter(hot_junction)}
                    <FlexV flexGrow={0}>
                        <Text fontWeight="600">Sheath Length &quot;L&quot; - Specify In Inches</Text>
                        <Text>
                            Represented by a number. Specify the length &quot;L&quot;
                            <br/>
                            of the sheath in inches.
                        </Text>
                    </FlexV>
                    <Text>
                        **1/2&qout; NPT X 1/2&qout; NPT is our standard fitting.
                        <br/>
                        Other options available:
                        <br/>
                        3/4&qout; NPT X 3/4&qout; NPT
                        <br/>
                        1&qout; NPT X 1&qout; NPT
                    </Text>
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
                            <Image width="625px"
                                   height="100px"
                                   src={thermocouple.image}
                                   style={{filter: "contrast(90%) brightness(125%) saturate(75%)"}}
                                   alt=""
                                   objectFit="scale-down"
                                   mt={2}
                            />
                            <FlexV justifyContent="center" alignItems="center" textAlign="center">
                                <Text><b>Example Order</b></Text>
                                <Text fontSize="20px"><u>4</u> - <u>Q</u> - <u>4</u> - <u>J</u> - <u>U</u> - <u>12</u></Text>
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

import {Header} from "@/components/Navbar/header";
import {Footer} from "@/components/Navbar/footer";
import {EasyTable, FlexH, FlexV} from "@/components/common";
import {Oswald, Roboto} from "next/font/google";
import {Text, Image, Divider} from "@chakra-ui/react";

import parameters from "@/../public/data/parameters.json";
import thermowells from "@/../public/data/thermowells.json";

const roboto = Roboto({weight: "100", subsets: ["latin"]});
const robotoBold = Roboto({weight: "400", subsets: ["latin"]});

export default function Page() {

    const thermowell = thermowells["tapered_barstock"];

    const pressureRating = {
        "Material": ["Brass", "Carbon Steel", "304SS", "316SS", "Monel"],
        "70 °F": ["5000", "5200", "7000", "7000", "6500"],
        "200 °F": ["4200", "5000", "6200", "7000", "6000"],
        "400 °F": ["1000", "4800", "5600", "6400", "5400"],
        "600 °F": ["-", "4600", "5400", "6200", "5300"],
        "800 °F": ["-", "3500", "5200", "6100", "5200"],
        "1000 °F": ["-", "1500", "4500", "5100", "1500"],
        "1200 °F": ["-", "-", "1650", "2500", "-"],
    };

    const getTable = () => {
        return {
            "Part Number": thermowell["parts"],
            ...thermowell["fields"]
        }
    }

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
        const plug_and_chain = parameters["plug_and_chain"];
        plug_and_chain.name = "Plug and Chain (Optional)";
        return (
            <FlexH justifyContent="space-between">
                <FlexV gap={3}>
                    {displayParameter(sheath_material)}
                    <FlexV flexGrow={0}>
                        <Text fontWeight="600">Insertion Length &quot;U&quot; - Specify In Inches</Text>
                        <Text>
                            Represented by a number. Specify the length &quot;U&quot;
                            <br/>
                            of the insert in inches.
                        </Text>
                    </FlexV>
                </FlexV>
                <FlexV gap={3}>
                    <FlexV flexGrow={0}>
                        <Text fontWeight="600">T Length - Specify In Inches</Text>
                        <Text>
                            Represented by a number. Specify the length &quot;T&quot;
                            <br/>
                            T Length is standard unless specified otherwise.
                            <br/>
                        </Text>
                    </FlexV>
                    {displayParameter(plug_and_chain)}
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
                                <Text fontSize="28px" color="white">{thermowell.name} - Thermowells</Text>
                                <Text fontSize="20px" color="blue.100">{thermowell.description}</Text>
                            </FlexV>
                        </FlexH>
                        <FlexH p={4} justifyContent="space-between" alignItems="center" gap={3}>
                            <Image width="500px"
                                   height="200px"
                                   src={thermowell.image}
                                   style={{filter: "contrast(200%) brightness(105%)"}}
                                   alt=""
                                   objectFit="contain"
                                   mt={2}
                            />
                            <FlexV justifyContent="center" alignItems="center" textAlign="center">
                                <Text><b>Example Order</b></Text>
                                <Text fontSize="20px"><u>103T</u> - <u>P</u> - <u>6</u> - <u>1.75</u> (-SP)</Text>
                                <Text>The dashes <b>—</b> separate the part parameters.</Text>
                            </FlexV>
                        </FlexH>
                        <FlexH alignItems="center" mb={2}>
                            <FlexH>
                                <Divider borderWidth="1px" borderColor="black" />
                            </FlexH>
                        </FlexH>
                        <FlexV>
                            <FlexV>
                                <FlexH justifyContent="center">
                                    <EasyTable table={getTable()} px={4} py={1}/>
                                </FlexH>
                            </FlexV>
                            <Divider m={4}/>
                            {getParameters()}
                            <Divider m={4} borderWidth="1px" borderColor="black" />
                            <FlexV>
                                <Text mb={2} fontWeight="600" fontSize="18px">Pressure/Temperature Rating - Pounds (Lbs.) Per Square Inch</Text>
                                <FlexH justifyContent="center">
                                    <EasyTable table={pressureRating} px={4} py={1}/>
                                </FlexH>
                            </FlexV>
                        </FlexV>
                    </FlexV>
                </FlexV>
            <Footer/>
        </>
    );
}

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

    const thermowell = thermowells["tubes_flanged"];

    const getTable = () => {
        return {
            "Part Number": thermowell["parts"],
            ...thermowell["fields"]
        }
    }

    const getFlangeTable = () => {
        const flange_code = parameters["flange_code"];
        const flange_table = {
            "Size" : Object.keys(flange_code.value.Size),
            "A" : Object.values(flange_code.value.Size),
            "Rating" : Object.keys(flange_code.value.Rating).slice(0, -1),
            "B" : Object.values(flange_code.value.Rating).slice(0, -1),
            "Facing" : Object.keys(flange_code.value.Facing),
            "C" : Object.values(flange_code.value.Facing),
        }
        return (
            <EasyTable table={flange_table} px={4} py={1}/>
        )
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
        return (
            <FlexH justifyContent="space-between">
                <FlexV gap={3}>
                    {displayParameter(sheath_material)}
                    <FlexV flexGrow={0}>
                        <Text fontWeight="600">Flange Code</Text>
                        <Text>
                            Create a Flange Code using the table above.
                            <br/>
                            Example: <b>BVF</b> - Size: 1&qout;, Rating: 300 LB, Facing: Flat Face
                        </Text>
                    </FlexV>
                </FlexV>
                <FlexV gap={3}>
                    <FlexV flexGrow={0}>
                        <Text fontWeight="600">Insertion Length &quot;U&quot; - Specify In Inches</Text>
                        <Text>
                            Represented by a number. Specify the length &quot;U&quot;
                            <br/>
                            of the insert in inches.
                        </Text>
                    </FlexV>
                    <FlexV flexGrow={0}>
                        <Text fontWeight="600">T Length - Specify In Inches</Text>
                        <Text>
                            Represented by a number. Specify the length &quot;T&quot;
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
                                <Text fontSize="28px" color="white">{thermowell.name} - Thermowells</Text>
                                <Text fontSize="20px" color="blue.100">{thermowell.description}</Text>
                            </FlexV>
                        </FlexH>
                        <FlexH p={4} justifyContent="space-between" alignItems="center" gap={3}>
                            <Image width="500px"
                                   height="200px"
                                   src={thermowell.image}
                                   style={{filter: "contrast(110%) brightness(110%)"}}
                                   alt=""
                                   objectFit="contain"
                                   mt={2}
                            />
                            <FlexV justifyContent="center" alignItems="center" textAlign="center">
                                <Text><b>Example Order</b></Text>
                                <Text fontSize="20px"><u>401</u> - <u>R</u> - <u>CUR</u> - <u>12</u> - <u>3</u></Text>
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
                                <FlexH gap={5} justifyContent="center">
                                    <EasyTable table={getTable()} px={4} py={1}/>
                                    <FlexV>
                                        <Text mb={2} fontWeight="600" fontSize="18px">Flange Sizes and Ratings</Text>
                                        {getFlangeTable()}
                                    </FlexV>
                                </FlexH>
                            </FlexV>
                            <Divider m={4}/>
                            {getParameters()}
                            <br/>
                            <Text>
                                **Add &qout;FP&qout; After Flange Facing For Full Penetrant Weld.
                                <br/>
                                **Add &qout;SF&qout; After Flange Facing For Smooth Finish 125-250 RMS.
                                <br/>
                                **Other Sizes Available. Consult TMS.
                            </Text>
                        </FlexV>
                    </FlexV>
                </FlexV>
            <Footer/>
        </>
    );
}

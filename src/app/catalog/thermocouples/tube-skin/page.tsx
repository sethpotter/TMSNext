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

    const descObj = {
        "Detail Number":
            ["1.", "2. 3. 4.", "5.", "7.", "8."],
        "Description":
            [
                "Terminal Head Assembly",
                "Nipple-Union-Nipple 3/4\"",
                "Reducing Bushing 1 1/2\" X 3/4\"",
                "Thermocouple Assembly",
                "Welding Clips (2)"
            ]
    }

    const orderObj = {
        "Part Number": [
            "TS-100",
            "TS-101",
            "TS-102",
            "TS-103"
        ],
        "T/C Diameter": [
            ".188 - 3/16\"",
            ".188 - 3/16\"",
            ".250 - 1/4\"",
            ".250 - 1/4\""
        ],
        "T/C Calibration": [
            "Chromel/Alumel",
            "Iron/Constantan",
            "Iron/Constantan",
            "Chromel/Alumel"
        ],
        "Length": ["Specify", "Specify", "Specify", "Specify"],
        "Sheath Material": ["Specify", "Specify", "Specify", "Specify"]
    }

    return (
        <>
            <Header/>
                <FlexV my={10} alignItems="center">
                    <FlexV maxW="1000px">
                        <FlexH bg="#071f4e">
                            <FlexV py={2} px={4}>
                                <Text fontSize="28px" color="white">Tube Skin Thermocouple Assembly  - Thermocouples</Text>
                            </FlexV>
                        </FlexH>
                        <FlexH p={4} minW="1000px" justifyContent="center" alignItems="center" gap={3}>
                            <Image width="750px"
                                   height="400px"
                                   src="/images/thermocouples/drawings/tube-skin.png"
                                   style={{filter: "contrast(90%) brightness(125%) saturate(75%)"}}
                                   alt=""
                                   mt={2}
                            />
                        </FlexH>
                        <Divider borderWidth="1px" borderColor="black" />
                        <FlexV p={4}>
                            <Text fontSize="18px">
                                Tube skin thermocouple assemblies are used to provide an efficient means of measuring the temperature of vessel walls.
                                Unless otherwise specified, grounded hot junctions are provided to insure quick response.
                                The thermocouples can be designed with an expansion loop to provide flexibility.
                                Weld pads are provided and can be curved to the radius of the vessel to be welded to.
                                Tube skin thermocouples can be manufactured as shown in the following information or can be manufactured to your specifications.
                                <br/>
                                <br/>
                                Please consult TMS with any changes to the following design(s) or with your individual specifications.
                            </Text>
                        </FlexV>
                        <FlexV gap={3}>
                            <Text fontSize="18px" fontWeight="600">Assembly Information</Text>
                            <EasyTable table={descObj} p={1}/>
                            <Text fontSize="18px" fontWeight="600">Ordering Information</Text>
                            <EasyTable table={orderObj} p={1}/>
                        </FlexV>
                    </FlexV>
                </FlexV>
            <Footer/>
        </>
    );
}

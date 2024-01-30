import {Header} from "@/components/Navbar/header";
import {Footer} from "@/components/Navbar/footer";
import {EasyTable, FlexH, FlexV} from "@/components/common";
import {
    Text,
    Image,
    Box,
    Divider
} from "@chakra-ui/react";
import {Roboto} from "next/font/google";
import terminalHeads from "@/../public/data/terminal_heads.json";

const roboto = Roboto({weight: "100", subsets: ["latin"]});
const robotoBold = Roboto({weight: "400", subsets: ["latin"]});

export default function Page() {

    const getTable = (item: string) => {
        const obj = terminalHeads[item as keyof typeof terminalHeads];
        return {
            ...obj["fields"],
            "Part Number": obj["parts"]
        }
    }

    const categories = {
        "Screw Cover": [
            "screwtop_aluminum",
            "screwtop_cast_iron",
            "screwtop_small_cast_aluminum",
            "screwtop_stainless_steel",
            "screwtop_polypropylene_white",
            "screwtop_polypropylene_black"
        ],
        "Hinged Cover": [
            "fliptop_polypropylene_white",
            "fliptop_polypropylene_black",
            "fliptop_aluminum"
        ],
        "Explosion Proof": [
            "explosion_proof_dome_top",
            "explosion_proof_flat_top",
            "explosion_proof_aluminum",
            "explosion_proof_stainless"
        ],
        "Extra": [
            "buz_dome"
        ]
    }

    const getEntry = (item: string) => {
        const obj = terminalHeads[item as keyof typeof terminalHeads];
        const image = (obj.image) ? obj.image : "/images/logo.webp";
        const hasParts = (obj.parts.length > 0)
        return (
            <FlexH p={2} justifyContent={(hasParts) ? "space-between" : ""} alignItems="center" gap={3}>
                <Image src={image} objectFit="scale-down" boxSize="100px" alt="" />
                <FlexV maxW="200px">
                    <Text fontWeight="600">{obj.name}</Text>
                    <Text>{obj.description}</Text>
                </FlexV>
                {
                    (hasParts) ?
                        <EasyTable py={0} px={2} table={getTable(item)} />
                        :
                        <></>
                }
            </FlexH>
        );
    }

    const getCategory = (cat: string) => {
        return (
            <FlexV>
                <FlexH flexGrow={0}>
                    <Text mb={3} fontSize="24px">{cat}</Text>
                </FlexH>
                <FlexV gap={2} flexGrow={0}>
                    {categories[cat as keyof typeof categories].map((item) => getEntry(item))}
                </FlexV>
            </FlexV>
        );
    }

    return (
        <>
            <Header/>
                <FlexH gap={6} py={10} bg="rgb(244, 244, 244)" justifyContent="center">
                    <Image objectPosition="0 4px;"
                           objectFit="cover"
                           src="/images/no_thermowell.png"
                           width="200px"
                           height="300px"
                           style={{filter: "saturate(50%) brightness(120%) contrast(110%)"}}
                           alt=""
                    />
                    <FlexV flexGrow={0} pt="50px">
                        <Text className={roboto.className} fontSize="48px">Terminal Heads</Text>
                        <Text pl={1} lineHeight="20px" className={robotoBold.className} fontSize="28px">Part Datasheet</Text>
                    </FlexV>
                </FlexH>
                <FlexV my={10} alignItems="center">
                    <FlexV minW="800px">
                        {getCategory("Screw Cover")}
                        <Divider m={4}/>
                        {getCategory("Hinged Cover")}
                        <Divider m={4}/>
                        <FlexV>
                            <FlexH flexGrow={0}>
                                <Text mb={3} fontSize="24px">Explosion Proof</Text>
                            </FlexH>
                            <FlexV gap={2} flexGrow={0}>
                                {getEntry("explosion_proof_dome_top")}
                                {getEntry("explosion_proof_flat_top")}
                                <FlexH alignItems="center">
                                    {getEntry("explosion_proof_aluminum")}
                                    <Box position="relative">
                                        <Text pl={2} fontSize="14px" width="600px" position="absolute" style={{transform: "translateY(-50%)"}}>
                                            <b>Note</b>
                                            <br/>
                                            EXPLOSION-PROOF CERTIFIED
                                            <br/>
                                            NEMA 4X AND IP66/68 CERTIFIED
                                            <br/>
                                            Material of Construction: Die-Cast Aluminum
                                            <br/>
                                            Surface Finishing: Painted Grey or Custom Color*
                                            <br/>
                                            “O” Ring: Buna “N”
                                            <br/>
                                            Weight: 0.5 KG (1.1 LBS)
                                        </Text>
                                    </Box>
                                </FlexH>
                                {getEntry("explosion_proof_stainless")}
                            </FlexV>
                        </FlexV>
                        <Divider m={4}/>
                        {getCategory("Extra")}
                    </FlexV>
                </FlexV>
            <Footer/>
        </>
    );
}

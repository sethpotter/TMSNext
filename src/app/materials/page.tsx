import {Header} from "@/components/Navbar/header";
import {Footer} from "@/components/Navbar/footer";
import {FlexH, FlexV} from "@/components/common";
import {Divider, Heading, Text, Table, Td, TableContainer, Thead, Tr, Th, Tbody} from "@chakra-ui/react";
import {Oswald} from "next/font/google";
import materials from "@/../public/data/materials.json";
import specifications from "@/../public/data/materials-specifications.json";

const oswald = Oswald({weight: "500", subsets: ["latin"]});

export default function Page() {

    const createMaterialTable = (keys: string[]) => {
        return (
            <TableContainer>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Material</Th>
                            <Th>Code</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            keys.map((key, index) => {
                                    const background = (index % 2 == 0) ? "white" : "gray.100";
                                    return (
                                        <Tr key={"table-" + key}>
                                            <Td py={1} bg={background}>{key}</Td>
                                            <Td py={1} bg={background}>{materials[key as keyof typeof materials]}</Td>
                                        </Tr>
                                    );
                                }
                            )
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        )
    }

    const createMediaTable = (items: any[]) => {
        return (
            <TableContainer>
                <Table>
                    <Thead>
                        <Tr>
                            <Th pt={0}>Media</Th>
                            <Th pt={0}>Temp. F°</Th>
                            <Th pt={0}>Conc.</Th>
                            <Th pt={0}>Mat.</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            items.map((item, index) => {
                                const bold = (index % 2 == 0) ? "600" : "400";
                                const lineHeight = "16px";
                                return (
                                    <Tr key={"table-" + index} fontWeight={bold}>
                                        <Td lineHeight={lineHeight} pe={0} py={0}>{item.media}</Td>
                                        <Td lineHeight={lineHeight} py={0}>{item.temperature}°</Td>
                                        <Td lineHeight={lineHeight} py={0}>{item.concentrate}</Td>
                                        <Td lineHeight={lineHeight} py={0}>{item.material}</Td>
                                    </Tr>
                                );
                            })
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        )
    }

    const getMaterialTables = () => {
        const keys = Object.keys(materials);
        const midIndex = Math.ceil(keys.length / 2);
        const firstHalf = keys.slice(0, midIndex);
        const secondHalf = keys.slice(midIndex);
        return [createMaterialTable(firstHalf), createMaterialTable(secondHalf)]
    }

    const getSpecificationTables = () => {
        const midIndex = Math.ceil(specifications.length / 2);
        const firstHalf = specifications.slice(0, midIndex);
        const secondHalf = specifications.slice(midIndex);
        return [createMediaTable(firstHalf), createMediaTable(secondHalf)]
    }

    const materialTables = getMaterialTables();
    const specificationTables = getSpecificationTables();

    return (
        <>
            <Header/>
            <FlexH my={3} justifyContent="center">
                <FlexV flexGrow={0} alignItems="center">
                    <Text pb={4} fontSize="30px" className={oswald.className}>Materials Datasheet</Text>
                    <FlexV border="1px solid black" borderRadius="5px">
                        <FlexH fontSize="12px" letterSpacing="-0.75px">
                            <FlexV p={4} gap={4} alignItems="end">
                                <FlexH flexGrow={0}>{materialTables[0]}</FlexH>
                                <FlexH flexGrow={0}>{specificationTables[0]}</FlexH>
                            </FlexV>
                            <Divider borderColor="black" mx={4} orientation="vertical"/>
                            <FlexV p={4} gap={4}>
                                <FlexH flexGrow={0}>{materialTables[1]}</FlexH>
                                <FlexH flexGrow={0}>{specificationTables[1]}</FlexH>
                            </FlexV>
                        </FlexH>
                    </FlexV>
                </FlexV>
            </FlexH>
            <Footer/>
        </>
    );
}

import {Flex, Table, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";

const FlexH = ({children, ...rest}: any) => {
    return (
        <Flex flexGrow={1} direction="row" {...rest}>{children}</Flex>
    );
}

const FlexV = ({children, ...rest}: any) => {
    return (
        <Flex flexGrow={1} direction="column" {...rest}>{children}</Flex>
    );
}

const EasyTable = ({table, ...rest}: any) => {
    const tableHeaders = () => {
        return Object.keys(table).map((key) =>
            <Th {...rest} key={"th-" + key}>{key}</Th>
        )
    }

    const tableBody = () => {
        const keys = Object.keys(table);
        const length = (table[keys[0] as keyof typeof table] as string[]).length;

        const rows = [];
        for(let i = 0; i < length; i++) {
            rows.push(
                <Tr>
                    {
                        keys.map((key) => {
                            const fields = table[key as keyof typeof table] as string[];
                            return (
                                <Td bg={(i % 2 == 0) ? "white" : "gray.100"}
                                    {...rest}
                                    key={key+ "-" + fields[i]}
                                >
                                    {fields[i]}
                                </Td>
                            )
                        })
                    }
                </Tr>
            );
        }

        return rows;
    }

    return (
        <TableContainer>
            <Table>
                <Thead>
                    <Tr>
                        {tableHeaders()}
                    </Tr>
                </Thead>
                <Tbody>
                    {tableBody()}
                </Tbody>
            </Table>
        </TableContainer>
    );
}

export {
    FlexH,
    FlexV,
    EasyTable
}
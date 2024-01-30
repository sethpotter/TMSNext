import {Button, Menu, MenuButton, MenuItem, MenuList, useDisclosure} from "@chakra-ui/react";
import {ArrowDownIcon, ArrowUpIcon} from "@chakra-ui/icons";
import React from "react";

interface Props {
    name: string,
    items: string[],
    onClick?: (item: string) => void
    buttonBuilder?: (props: any) => React.JSX.Element,
    itemBuilder?: (props: any) => React.JSX.Element,
    useIcon?: boolean
    openIcon?: React.JSX.Element
    closeIcon?: React.JSX.Element
}

export const DropdownButton = (props: Props) => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const {
        name,
        items,
        onClick,
        buttonBuilder = ({children, ...rest}: any) =>
            <MenuButton as={Button} {...rest}>{children}</MenuButton>,
        itemBuilder = ({children, ...rest}: any) =>
            <MenuItem {...rest}>{children}</MenuItem>,
        useIcon = true,
        openIcon = <ArrowUpIcon/>,
        closeIcon = <ArrowDownIcon/>
    } = props;

    let timeout: NodeJS.Timeout;
    const MenuButtonInternal = buttonBuilder
    const MenuItemInternal = itemBuilder

    const openMenu = () => {
        onOpen();
        clearTimeout(timeout);
    }

    const closeMenu = () => {
        timeout = setTimeout(() => {
            onClose()
        }, 200)
    }

    const onClickButton = (clicked: string) => {
        if(onClick)
            onClick(clicked);
    }

    return (
        <Menu isOpen={isOpen}>
            <MenuButtonInternal onClick={() => onClickButton(name)} onMouseEnter={openMenu} onMouseLeave={closeMenu}>
                {name} {useIcon ? (isOpen ? openIcon : closeIcon) : ""}
            </MenuButtonInternal>
            <MenuList p={0} onMouseEnter={openMenu} onMouseLeave={closeMenu}>
                {items.map((item, index) =>
                    <MenuItemInternal onClick={() => onClickButton(item)}
                              key={item + "-" + index}
                    >{item}</MenuItemInternal>
                )}
            </MenuList>
        </Menu>
    )
}
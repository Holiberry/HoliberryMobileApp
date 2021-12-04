// packages
import React from "react";
import {Menu, MenuOptions, MenuOption, MenuTrigger,} from 'react-native-popup-menu';
import {FlatList} from "react-native";

export const ContextMenu = ({contextMenuOptions, opened, openHandler}) => {
    return (
        <Menu
            opened={opened}
            onBackdropPress={()=>openHandler(false)}
            onSelect={()=>openHandler(false)}
        >
            <MenuTrigger text={""} />
            <MenuOptions>
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={contextMenuOptions}
                    renderItem={({item})=><MenuOption onSelect={item.handler} text={item.label} />}
                />
            </MenuOptions>
        </Menu>
    )
}
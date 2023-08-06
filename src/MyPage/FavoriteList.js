import React from 'react';
import { ActionBarClose } from '../Component/ActionBarClose';
import { Item_width } from '../Component/Item_width';


const actionBarName = "찜 목록";
const FavoriteList = () => {


    return (
        <>
        <ActionBarClose actionBarName={actionBarName} />
        

        <Item_width />
        </>
      );
}

export default FavoriteList;
import React from 'react';
import { ActionBarClose } from '../Component/ActionBarClose';

const actionBarName = "찜 목록";
const FavoriteList = () => {


    return (
        <>
        <ActionBarClose actionBarName={actionBarName} />
        </>
      );
}

export default FavoriteList;
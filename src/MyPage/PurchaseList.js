import React from 'react';
import { ActionBarClose } from '../Component/ActionBarClose';
import { Item_width } from '../Component/Item_width';

const actionBarName = "구매 & 참여 목록";
const PurchaseList = () => {
  return (
    <>
    <ActionBarClose actionBarName={actionBarName} />
    <Item_width />
    <Item_width />
    </>
  );
}

export default PurchaseList;
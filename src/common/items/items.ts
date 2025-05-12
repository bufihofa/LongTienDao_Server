
export enum ItemType{
    WEAPON = 'WEAPON',
    ARMOR = 'ARMOR',
    
}
export enum Item{
    SWORDTEST = 19999,
    HELMETTEST = 19998,

}

const ItemDetails = {

    [Item.SWORDTEST]: {
        id: Item.SWORDTEST,
        name: 'Kiếm',
        description: 'Một thanh kiếm sắc bén, thích hợp cho việc chiến đấu.',
        type: ItemType.WEAPON,
        image: 'sword_0',
        stack: false,
    },

    [Item.HELMETTEST]: {
        id: Item.HELMETTEST,
        name: 'Mũ',
        description: 'Mũ dày, giúp người mặc có khả năng chống đỡ tốt.',
        type: ItemType.ARMOR,
        image: 'armor_0',
        stack: false,
    },

};

const itemObject22 = ItemDetails[Item.SWORDTEST]; 
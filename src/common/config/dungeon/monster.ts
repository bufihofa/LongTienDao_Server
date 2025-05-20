
export enum MonsterType{
    Ho = 1010, // Hổ
    Soi = 1020, // Sói
    Lon = 1030, // Lợn
    Tho = 1040, // Thỏ
}
export const MonsterDetails = {
    [MonsterType.Ho]: {
        id: MonsterType.Ho,
        name: 'Hổ',
        image: 'ho',
        maxLevel: 3,
        stats: {
            hp: 100,
            mp: 100,
            physicalAttack: 5,
            magicalAttack: 5,
            physicalEnergy: 100,
            magicalEnergy: 100,
        },
    },
    [MonsterType.Soi]: {
        id: MonsterType.Soi,
        name: 'Sói',
        image: 'soi',
        maxLevel: 3,
        stats: {
            hp: 100,
            mp: 100,
            physicalAttack: 5,
            magicalAttack: 5,
            physicalEnergy: 100,
            magicalEnergy: 100,
        },
    },
    [MonsterType.Lon]: {
        id: MonsterType.Lon,
        name: 'Lợn',
        image: 'lon',
        maxLevel: 3,
        stats: {
            hp: 100,
            mp: 100,
            physicalAttack: 5,
            magicalAttack: 5,
            physicalEnergy: 100,
            magicalEnergy: 100,
        },
    },
    [MonsterType.Tho]: {
        id: MonsterType.Tho,
        name: 'Thỏ',
        image: 'tho',
        maxLevel: 3,
        stats: {
            hp: 100,
            mp: 100,
            physicalAttack: 5,
            magicalAttack: 5,
            physicalEnergy: 100,
            magicalEnergy: 100,
        },
    },
};
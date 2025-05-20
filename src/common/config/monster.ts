
export enum Monster{
    Ho = 1010, // Hổ
    Soi = 1020, // Sói
    Lon = 1030, // Lợn
    Tho = 1040, // Thỏ
}
export const MonsterType = {
    [Monster.Ho]: {
        id: Monster.Ho,
        name: 'Hổ',
        image: 'ho',
        stats: {
            hp: 100,
            mp: 100,
            physicalAttack: 5,
            magicalAttack: 5,
            physicalEnergy: 100,
            magicalEnergy: 100,
        },
    },
    [Monster.Soi]: {
        id: Monster.Soi,
        name: 'Sói',
        image: 'soi',
        stats: {
            hp: 100,
            mp: 100,
            physicalAttack: 5,
            magicalAttack: 5,
            physicalEnergy: 100,
            magicalEnergy: 100,
        },
    },
    [Monster.Lon]: {
        id: Monster.Lon,
        name: 'Lợn',
        image: 'lon',
        stats: {
            hp: 100,
            mp: 100,
            physicalAttack: 5,
            magicalAttack: 5,
            physicalEnergy: 100,
            magicalEnergy: 100,
        },
    },
    [Monster.Tho]: {
        id: Monster.Tho,
        name: 'Thỏ',
        image: 'tho',
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
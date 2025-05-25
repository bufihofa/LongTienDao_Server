import { 
    MonsterHoConfig, 
    MonsterSoiConfig, 
    
} from "./monsters/monster_basic";

import { MonsterType } from "./monsterType";

export const MonsterDetails = {
    [MonsterType.Ho]: MonsterHoConfig,
    [MonsterType.Soi]: MonsterSoiConfig
};
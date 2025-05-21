import { Item } from "../inventory/items";
import { MonsterType } from "./monster";

export enum DungeonType {
    RungUMinh = 'RungUMinh', // Rừng U Minh
    RungCucPhuong = 'RungCucPhuong', // Rừng Cúc Phương
    MaThienLanh = 'MaThienLanh', // Ma Thiên Lãnh 
    NamCatTien = 'NamCatTien', // Rừng Nam Cát Tiên

    DongPhongNha = 'DongPhongNha', // Động Phong Nha
    TamCocBichDong = 'TamCocBichDong', // Tam Cốc Bích Động
    DongHuongTich = 'DongHuongTich', // Động Hương Tích
    DongThienCung = 'DongThienCung', // Động Thiên Cung

    NguHanhSon = 'NguHanhSon', // Ngũ Hành Sơn
    CaoNguyenMocChau = 'CaoNguyenMocChau', // Cao Nguyên Mộc Châu
    NuiTanVien = 'NuiTanVien', // Núi Tản Viên
    NuiHamRong = 'NuiHamRong', // Núi Hàm Rồng

    ThanhDiaMySon = 'ThanhDiaMySon', // Thánh Địa Mỹ Sơn
    ThanhCoLoa = 'ThanhCoLoa', // Thành Cổ Loa
    VanMieu = 'VanMieu', // Văn Miếu

    DamDaTrach = 'DamDaTrach', // Đầm Dạ Trạch
    HoTaVong = 'HoTaVong', // Hồ Tả Vọng

    DongHaiLongCung = 'DongHaiLongCung', // Đông Hải Long Cung
}
export const DungeonDetails = {
    [DungeonType.RungUMinh]: {
        id: DungeonType.RungUMinh,
        name: 'Rừng U Minh',
        image: 'rung_u_minh',
        monsters: {
            [MonsterType.Ho]: 1,
            [MonsterType.Soi]: 2,
            [MonsterType.Lon]: 3,
            [MonsterType.Tho]: 10,
        },
        items: [
            {
                type: Item.DotPha_BichHaiLongLien,
                weight: 500,

                minQuantity: 1,
                maxQuantity: 3,

                minQuality: 0,
                maxQuality: 1,

                data: [
                    ['hp', 100, 300],
                    ['thanthuc', 1, 3]
                ]
            },
            
        ],
    },
}
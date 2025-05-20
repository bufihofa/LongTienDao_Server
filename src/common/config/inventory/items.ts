export enum ItemType{
    ThienPhuThach = 'ThienPhuThach',
    DotPha = 'DotPha',

    VuKhi = 'VuKhi',
    YPhuc = 'YPhuc',
    TrangSuc = 'TrangSuc',

    CongPhap = 'CongPhap',

    ThaoDuoc = 'ThaoDuoc',
    DanDuoc = 'DanDuoc',
    DanPhuong = 'DanPhuong',

    NguyenLieu = 'NguyenLieu',
    BanVe = 'BanVe',
    
}
export enum Item{

    ThienPhuThach = 'ThienPhuThach', 

    DotPha_CuuUyenLongChau = 'DotPha_CuuUyenLongChau',
    DotPha_LamDuongThach = 'DotPha_LamDuongThach',
    DotPha_BichHaiLongLien = 'DotPha_BichHaiLongLien',
    DotPha_LamNgocTuy = 'DotPha_LamNgocTuy',
    DotPha_CoMocNgungSuong = 'DotPha_CoMocNgungSuong',
    DotPha_LoiDinhCoMoc = 'DotPha_LoiDinhCoMoc',
    DotPha_ThaiDuongLinhQua = 'DotPha_ThaiDuongLinhQua',
    DotPha_ThienHoaLinhThach = 'DotPha_ThienHoaLinhThach',

}

export const ItemDetails = {
    [Item.ThienPhuThach]: {
        id: Item.ThienPhuThach,
        name: 'Thiên Phú Thạch',
        description: 'Đá cổ kích hoạt Huyết mạch trong cơ thể phàm nhân. Phẩm chất đá càng cao, hiệu quả kích hoạt càng cao.',
        type: ItemType.ThienPhuThach,
        image: 'ThienPhuThach',
        stack: true,
    },
    [Item.DotPha_CuuUyenLongChau]: {
        id: Item.DotPha_CuuUyenLongChau,
        name: 'Cửu Uyên Long Châu',
        description: 'Viên ngọc kết tinh từ long khí nơi chín vực biển sâu.',
        type: ItemType.DotPha,
        image: 'item_1',
        stack: true,
    },
    [Item.DotPha_LamDuongThach]: {
        id: Item.DotPha_LamDuongThach,
        name: 'Lam Dương Thạch',
        description: 'Khối ngọc thô màu xanh dương đậm, bề mặt có những vết nứt tự nhiên ánh lên sắc cầu vồng mờ ảo.',
        type: ItemType.DotPha,
        image: 'item_2',
        stack: true,
    },
    [Item.DotPha_BichHaiLongLien]: {
        id: Item.DotPha_BichHaiLongLien,
        name: 'Bích Hải Long Liên',
        description: 'Bông sen mang màu xanh biếc của đại dương sâu thẳm, phần nhụy lại có màu lam ngọc phát quang.',
        type: ItemType.DotPha,
        image: 'item_3',
        stack: true,
    },
    [Item.DotPha_LamNgocTuy]: {
        id: Item.DotPha_LamNgocTuy,
        name: 'Lam Ngọc Tủy',
        description: 'Khối ngọc thạch được kết tinh từ linh khí tinh túy nhất của biển cả mênh mông.',
        type: ItemType.DotPha,
        image: 'item_4',
        stack: true,
    },
    [Item.DotPha_CoMocNgungSuong]: {
        id: Item.DotPha_CoMocNgungSuong,
        name: 'Cổ Mộc Ngưng Sương',
        description: 'Gốc dị thảo màu xanh ngọc bích, hình dáng tựa san hô cổ đại. ',
        type: ItemType.DotPha,
        image: 'item_6',
        stack: true,
    },
    [Item.DotPha_LoiDinhCoMoc]: {
        id: Item.DotPha_LoiDinhCoMoc,
        name: 'Lôi Đình Cổ Mộc',
        description: 'Thân gỗ đen sét đánh, bên trong ẩn chứa những tia sét màu xanh lam.',
        type: ItemType.DotPha,
        image: 'item_8',
        stack: true,
    },
    [Item.DotPha_ThaiDuongLinhQua]: {
        id: Item.DotPha_ThaiDuongLinhQua,
        name: 'Thái Dương Linh Quả',
        description: 'Một loại quả màu vàng rực rỡ, tỏa ra luồng sáng vàng kim tinh khiết, tựa như một thánh vật.',
        type: ItemType.DotPha,
        image: 'item_10',
        stack: true,
    },
    [Item.DotPha_ThienHoaLinhThach]: {
        id: Item.DotPha_ThienHoaLinhThach,
        name: 'Thiên Hỏa Linh Thạch',
        description: 'Mảnh vỡ của một thiên thạch, tỏa ra linh khí dồi dào.',
        type: ItemType.DotPha,
        image: 'item_11',
        stack: true,
    },
};

//const itemObject22 = ItemDetails[Item.SWORDTEST]; 
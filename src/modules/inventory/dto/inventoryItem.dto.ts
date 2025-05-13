import { ApiProperty } from "@nestjs/swagger";

export class InventoryItem {
    id: number;        // ID của item trong kho
    @ApiProperty({ example: 1 })
    type: number;      // Tham chiếu đến ItemDetails (ví dụ: Item.SWORDTEST)
    @ApiProperty({ example: 5 })
    quantity: number;    // Số lượng của item này

    
    @ApiProperty({ example: { damage: 5, defense: 2 } })
    data: Record<string,number>;  // Cho phép các stats động khác
}
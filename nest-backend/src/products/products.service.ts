import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './create-product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateProductDto) {
    const supplier = await this.prisma.supplier.findUnique({
      where: { id: dto.supplierId },
    });
    if (!supplier) {
      throw new NotFoundException('Fornecedor não encontrado.');
    }

    const unit = await this.prisma.storeUnit.findUnique({
      where: { id: dto.unitId },
    });
    if (!unit) {
      throw new NotFoundException('Unidade (loja) não encontrada.');
    }

    const product = await this.prisma.product.create({
      data: {
        name: dto.name,
        cost_price: dto.cost_price,
        category: dto.category,
        brand: dto.brand,
        allergens: dto.allergens ?? [],
        stock_quantity: dto.stock_quantity,
        unit_of_measure: dto.unit_of_measure,
        current_stock: dto.current_stock,
        min_stock: dto.min_stock,
        manufacture_date: new Date(dto.manufacture_date),
        expiration_date: new Date(dto.expiration_date),
        available: dto.available ?? true,
        supplierId: dto.supplierId,
        unitId: dto.unitId,
      },
    });

    return {
      message: 'Produto cadastrado com sucesso!',
      product,
    };
  }

  async findAll() {
    return this.prisma.product.findMany({
      include: { supplier: true },
    });
  }
}
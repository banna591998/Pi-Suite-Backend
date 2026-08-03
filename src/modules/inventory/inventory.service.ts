import {
  Injectable,
  NotFoundException,
  BadRequestException,
  Inject,
} from '@nestjs/common';
import { InventoryRepository } from './inventory.repository';
import { CreateInventoryDto, UpdateInventoryDto } from './dto/inventory.dto';

@Injectable()
export class InventoryService {
  constructor(
    @Inject(InventoryRepository)
    private readonly inventoryRepo: InventoryRepository,
  ) {}

  async createItem(tenantId: string, dto: CreateInventoryDto) {
    // Business logic validation for FEFO/Serial mapping
    return this.inventoryRepo.create(tenantId, dto);
  }

  // কন্ট্রোলারের কল অনুযায়ী findAllItems মেথড যোগ করা হলো
  async findAllItems(tenantId: string, page = 1, limit = 50) {
    const skip = (page - 1) * limit;
    return this.inventoryRepo.findAll(tenantId, skip, limit);
  }

  // আগের মেথড ব্যাকআপের জন্য রাখা হলো
  async getInventoryList(tenantId: string, page = 1, limit = 50) {
    return this.findAllItems(tenantId, page, limit);
  }

  async getItemById(tenantId: string, id: string) {
    const item = await this.inventoryRepo.findById(tenantId, id);
    if (!item) {
      throw new NotFoundException(`Inventory item with ID ${id} not found.`);
    }
    return item;
  }

  async updateItem(tenantId: string, id: string, dto: UpdateInventoryDto) {
    await this.getItemById(tenantId, id);
    return this.inventoryRepo.update(tenantId, id, dto);
  }

  // কন্ট্রোলারের কল অনুযায়ী removeItem মেথড যোগ করা হলো
  async removeItem(tenantId: string, id: string) {
    await this.getItemById(tenantId, id);
    return this.inventoryRepo.remove(tenantId, id);
  }

  // আগের মেথড ব্যাকআপের জন্য রাখা হলো
  async deleteItem(tenantId: string, id: string) {
    return this.removeItem(tenantId, id);
  }

  async getReorderAlerts(tenantId: string) {
    return this.inventoryRepo.checkLowStock(tenantId);
  }
}

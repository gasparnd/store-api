import { Injectable, NotFoundException } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrderDto, UpdateOrderDto } from '../dtos/order.dto';
import { Order } from '../entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}

  async findAll() {
    return await this.orderModel.find().exec();
  }

  async findOne(id: string) {
    const customer = await this.orderModel.findById(id).exec();
    if (!customer) {
      throw new NotFoundException(`Customer ${id} not found`);
    }
    return customer;
  }

  create(data: CreateOrderDto) {
    const newCustomer = new this.orderModel(data);
    return newCustomer.save();
  }

  async update(id: string, changes: UpdateOrderDto) {
    const customer = await this.orderModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
    if (!customer) {
      throw new NotFoundException(`Customer ${id} not found`);
    }
    return customer;
  }

  async remove(id: string) {
    const customer = await this.orderModel.findByIdAndDelete(id).exec();
    if (!customer) {
      throw new NotFoundException(`Customer ${id} not found`);
    }
    return customer;
  }
}

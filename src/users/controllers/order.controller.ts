import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

import { MongoIdPipe } from 'src/common/mongo-id.pipe';
import { CreateOrderDto, UpdateOrderDto } from '../dtos/order.dto';
import { OrdersService } from '../services/orders.service';

@Controller('users')
export class OrderController {
  constructor(private ordersService: OrdersService) {}

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  get(@Param('id', MongoIdPipe) id: string) {
    return this.ordersService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateOrderDto) {
    return this.ordersService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', MongoIdPipe) id: string,
    @Body() payload: UpdateOrderDto,
  ) {
    return this.ordersService.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id', MongoIdPipe) id: string) {
    return this.ordersService.remove(id);
  }
}

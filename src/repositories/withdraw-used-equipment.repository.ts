import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {WithdrawUsedEquipment, WithdrawUsedEquipmentRelations} from '../models';

export class WithdrawUsedEquipmentRepository extends DefaultCrudRepository<
  WithdrawUsedEquipment,
  typeof WithdrawUsedEquipment.prototype.id,
  WithdrawUsedEquipmentRelations
> {
  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource,
  ) {
    super(WithdrawUsedEquipment, dataSource);
  }
}

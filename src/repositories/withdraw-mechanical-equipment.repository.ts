import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {WithdrawMechanicalEquipment, WithdrawMechanicalEquipmentRelations} from '../models';

export class WithdrawMechanicalEquipmentRepository extends DefaultCrudRepository<
  WithdrawMechanicalEquipment,
  typeof WithdrawMechanicalEquipment.prototype.id,
  WithdrawMechanicalEquipmentRelations
> {
  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource,
  ) {
    super(WithdrawMechanicalEquipment, dataSource);
  }
}

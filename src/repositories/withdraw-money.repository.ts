import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {WithdrawMoney, WithdrawMoneyRelations} from '../models';

export class WithdrawMoneyRepository extends DefaultCrudRepository<
  WithdrawMoney,
  typeof WithdrawMoney.prototype.order_id,
  WithdrawMoneyRelations
> {
  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource,
  ) {
    super(WithdrawMoney, dataSource);
  }
}

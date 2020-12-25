import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {SetupFcu, SetupFcuRelations} from '../models';

export class SetupFcuRepository extends DefaultCrudRepository<
  SetupFcu,
  typeof SetupFcu.prototype.id,
  SetupFcuRelations
> {
  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource,
  ) {
    super(SetupFcu, dataSource);
  }
}

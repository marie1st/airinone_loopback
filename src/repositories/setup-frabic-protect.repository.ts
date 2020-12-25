import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {SetupFrabicProtect, SetupFrabicProtectRelations} from '../models';

export class SetupFrabicProtectRepository extends DefaultCrudRepository<
  SetupFrabicProtect,
  typeof SetupFrabicProtect.prototype.id,
  SetupFrabicProtectRelations
> {
  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource,
  ) {
    super(SetupFrabicProtect, dataSource);
  }
}

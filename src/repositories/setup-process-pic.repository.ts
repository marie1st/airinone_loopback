import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {SetupProcessPic, SetupProcessPicRelations} from '../models';

export class SetupProcessPicRepository extends DefaultCrudRepository<
  SetupProcessPic,
  typeof SetupProcessPic.prototype.id,
  SetupProcessPicRelations
> {
  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource,
  ) {
    super(SetupProcessPic, dataSource);
  }
}

import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {SetupPipe, SetupPipeRelations} from '../models';

export class SetupPipeRepository extends DefaultCrudRepository<
  SetupPipe,
  typeof SetupPipe.prototype.id,
  SetupPipeRelations
> {
  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource,
  ) {
    super(SetupPipe, dataSource);
  }
}

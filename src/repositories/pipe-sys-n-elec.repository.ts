import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {PipeSysNElec, PipeSysNElecRelations} from '../models';

export class PipeSysNElecRepository extends DefaultCrudRepository<
  PipeSysNElec,
  typeof PipeSysNElec.prototype.id,
  PipeSysNElecRelations
> {
  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource,
  ) {
    super(PipeSysNElec, dataSource);
  }
}

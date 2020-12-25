import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {VacummTest, VacummTestRelations} from '../models';

export class VacummTestRepository extends DefaultCrudRepository<
  VacummTest,
  typeof VacummTest.prototype.id,
  VacummTestRelations
> {
  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource,
  ) {
    super(VacummTest, dataSource);
  }
}

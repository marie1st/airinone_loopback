import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {EmergencyContact, EmergencyContactRelations} from '../models';

export class EmergencyContactRepository extends DefaultCrudRepository<
  EmergencyContact,
  typeof EmergencyContact.prototype.employee_id,
  EmergencyContactRelations
> {
  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource,
  ) {
    super(EmergencyContact, dataSource);
  }
}

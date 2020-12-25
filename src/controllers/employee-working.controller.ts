import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {EmployeeWorking} from '../models';
import {EmployeeWorkingRepository} from '../repositories';

export class EmployeeWorkingController {
  constructor(
    @repository(EmployeeWorkingRepository)
    public employeeWorkingRepository : EmployeeWorkingRepository,
  ) {}

  @post('/employee-workings', {
    responses: {
      '200': {
        description: 'EmployeeWorking model instance',
        content: {'application/json': {schema: getModelSchemaRef(EmployeeWorking)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EmployeeWorking, {
            title: 'NewEmployeeWorking',
            
          }),
        },
      },
    })
    employeeWorking: EmployeeWorking,
  ): Promise<EmployeeWorking> {
    return this.employeeWorkingRepository.create(employeeWorking);
  }

  @get('/employee-workings/count', {
    responses: {
      '200': {
        description: 'EmployeeWorking model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(EmployeeWorking) where?: Where<EmployeeWorking>,
  ): Promise<Count> {
    return this.employeeWorkingRepository.count(where);
  }

  @get('/employee-workings', {
    responses: {
      '200': {
        description: 'Array of EmployeeWorking model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(EmployeeWorking, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(EmployeeWorking) filter?: Filter<EmployeeWorking>,
  ): Promise<EmployeeWorking[]> {
    return this.employeeWorkingRepository.find(filter);
  }

  @patch('/employee-workings', {
    responses: {
      '200': {
        description: 'EmployeeWorking PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EmployeeWorking, {partial: true}),
        },
      },
    })
    employeeWorking: EmployeeWorking,
    @param.where(EmployeeWorking) where?: Where<EmployeeWorking>,
  ): Promise<Count> {
    return this.employeeWorkingRepository.updateAll(employeeWorking, where);
  }

  @get('/employee-workings/{id}', {
    responses: {
      '200': {
        description: 'EmployeeWorking model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(EmployeeWorking, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(EmployeeWorking, {exclude: 'where'}) filter?: FilterExcludingWhere<EmployeeWorking>
  ): Promise<EmployeeWorking> {
    return this.employeeWorkingRepository.findById(id, filter);
  }

  @patch('/employee-workings/{id}', {
    responses: {
      '204': {
        description: 'EmployeeWorking PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EmployeeWorking, {partial: true}),
        },
      },
    })
    employeeWorking: EmployeeWorking,
  ): Promise<void> {
    await this.employeeWorkingRepository.updateById(id, employeeWorking);
  }

  @put('/employee-workings/{id}', {
    responses: {
      '204': {
        description: 'EmployeeWorking PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() employeeWorking: EmployeeWorking,
  ): Promise<void> {
    await this.employeeWorkingRepository.replaceById(id, employeeWorking);
  }

  @del('/employee-workings/{id}', {
    responses: {
      '204': {
        description: 'EmployeeWorking DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.employeeWorkingRepository.deleteById(id);
  }
}

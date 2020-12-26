import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
<<<<<<< HEAD
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param,


  patch, post,




  put,

  requestBody
=======
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
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe
} from '@loopback/rest';
import {Warehouse} from '../models';
import {WarehouseRepository} from '../repositories';

export class WarehouseController {
  constructor(
    @repository(WarehouseRepository)
    public warehouseRepository : WarehouseRepository,
  ) {}

  @post('/warehouses', {
    responses: {
      '200': {
        description: 'Warehouse model instance',
        content: {'application/json': {schema: getModelSchemaRef(Warehouse)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Warehouse, {
            title: 'NewWarehouse',
<<<<<<< HEAD

=======
            
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe
          }),
        },
      },
    })
    warehouse: Warehouse,
  ): Promise<Warehouse> {
    return this.warehouseRepository.create(warehouse);
  }

  @get('/warehouses/count', {
    responses: {
      '200': {
        description: 'Warehouse model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Warehouse) where?: Where<Warehouse>,
  ): Promise<Count> {
    return this.warehouseRepository.count(where);
  }

  @get('/warehouses', {
    responses: {
      '200': {
        description: 'Array of Warehouse model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Warehouse, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Warehouse) filter?: Filter<Warehouse>,
  ): Promise<Warehouse[]> {
    return this.warehouseRepository.find(filter);
  }

  @patch('/warehouses', {
    responses: {
      '200': {
        description: 'Warehouse PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Warehouse, {partial: true}),
        },
      },
    })
    warehouse: Warehouse,
    @param.where(Warehouse) where?: Where<Warehouse>,
  ): Promise<Count> {
    return this.warehouseRepository.updateAll(warehouse, where);
  }

  @get('/warehouses/{id}', {
    responses: {
      '200': {
        description: 'Warehouse model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Warehouse, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
<<<<<<< HEAD
    @param.path.string('id') id: number,
=======
    @param.path.string('id') id: string,
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe
    @param.filter(Warehouse, {exclude: 'where'}) filter?: FilterExcludingWhere<Warehouse>
  ): Promise<Warehouse> {
    return this.warehouseRepository.findById(id, filter);
  }

  @patch('/warehouses/{id}', {
    responses: {
      '204': {
        description: 'Warehouse PATCH success',
      },
    },
  })
  async updateById(
<<<<<<< HEAD
    @param.path.string('id') id: number,
=======
    @param.path.string('id') id: string,
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Warehouse, {partial: true}),
        },
      },
    })
    warehouse: Warehouse,
  ): Promise<void> {
    await this.warehouseRepository.updateById(id, warehouse);
  }

  @put('/warehouses/{id}', {
    responses: {
      '204': {
        description: 'Warehouse PUT success',
      },
    },
  })
  async replaceById(
<<<<<<< HEAD
    @param.path.string('id') id: number,
=======
    @param.path.string('id') id: string,
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe
    @requestBody() warehouse: Warehouse,
  ): Promise<void> {
    await this.warehouseRepository.replaceById(id, warehouse);
  }

  @del('/warehouses/{id}', {
    responses: {
      '204': {
        description: 'Warehouse DELETE success',
      },
    },
  })
<<<<<<< HEAD
  async deleteById(@param.path.string('id') id: number): Promise<void> {
=======
  async deleteById(@param.path.string('id') id: string): Promise<void> {
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe
    await this.warehouseRepository.deleteById(id);
  }
}

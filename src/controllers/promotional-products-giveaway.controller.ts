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
import {PromotionalProductsGiveaway} from '../models';
import {PromotionalProductsGiveawayRepository} from '../repositories';

export class PromotionalProductsGiveawayController {
  constructor(
    @repository(PromotionalProductsGiveawayRepository)
    public promotionalProductsGiveawayRepository : PromotionalProductsGiveawayRepository,
  ) {}

  @post('/promotional-products-giveaways', {
    responses: {
      '200': {
        description: 'PromotionalProductsGiveaway model instance',
        content: {'application/json': {schema: getModelSchemaRef(PromotionalProductsGiveaway)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PromotionalProductsGiveaway, {
            title: 'NewPromotionalProductsGiveaway',
<<<<<<< HEAD

=======
            
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe
          }),
        },
      },
    })
    promotionalProductsGiveaway: PromotionalProductsGiveaway,
  ): Promise<PromotionalProductsGiveaway> {
    return this.promotionalProductsGiveawayRepository.create(promotionalProductsGiveaway);
  }

  @get('/promotional-products-giveaways/count', {
    responses: {
      '200': {
        description: 'PromotionalProductsGiveaway model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(PromotionalProductsGiveaway) where?: Where<PromotionalProductsGiveaway>,
  ): Promise<Count> {
    return this.promotionalProductsGiveawayRepository.count(where);
  }

  @get('/promotional-products-giveaways', {
    responses: {
      '200': {
        description: 'Array of PromotionalProductsGiveaway model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(PromotionalProductsGiveaway, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(PromotionalProductsGiveaway) filter?: Filter<PromotionalProductsGiveaway>,
  ): Promise<PromotionalProductsGiveaway[]> {
    return this.promotionalProductsGiveawayRepository.find(filter);
  }

  @patch('/promotional-products-giveaways', {
    responses: {
      '200': {
        description: 'PromotionalProductsGiveaway PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PromotionalProductsGiveaway, {partial: true}),
        },
      },
    })
    promotionalProductsGiveaway: PromotionalProductsGiveaway,
    @param.where(PromotionalProductsGiveaway) where?: Where<PromotionalProductsGiveaway>,
  ): Promise<Count> {
    return this.promotionalProductsGiveawayRepository.updateAll(promotionalProductsGiveaway, where);
  }

  @get('/promotional-products-giveaways/{id}', {
    responses: {
      '200': {
        description: 'PromotionalProductsGiveaway model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(PromotionalProductsGiveaway, {includeRelations: true}),
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
    @param.filter(PromotionalProductsGiveaway, {exclude: 'where'}) filter?: FilterExcludingWhere<PromotionalProductsGiveaway>
  ): Promise<PromotionalProductsGiveaway> {
    return this.promotionalProductsGiveawayRepository.findById(id, filter);
  }

  @patch('/promotional-products-giveaways/{id}', {
    responses: {
      '204': {
        description: 'PromotionalProductsGiveaway PATCH success',
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
          schema: getModelSchemaRef(PromotionalProductsGiveaway, {partial: true}),
        },
      },
    })
    promotionalProductsGiveaway: PromotionalProductsGiveaway,
  ): Promise<void> {
    await this.promotionalProductsGiveawayRepository.updateById(id, promotionalProductsGiveaway);
  }

  @put('/promotional-products-giveaways/{id}', {
    responses: {
      '204': {
        description: 'PromotionalProductsGiveaway PUT success',
      },
    },
  })
  async replaceById(
<<<<<<< HEAD
    @param.path.string('id') id: number,
=======
    @param.path.string('id') id: string,
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe
    @requestBody() promotionalProductsGiveaway: PromotionalProductsGiveaway,
  ): Promise<void> {
    await this.promotionalProductsGiveawayRepository.replaceById(id, promotionalProductsGiveaway);
  }

  @del('/promotional-products-giveaways/{id}', {
    responses: {
      '204': {
        description: 'PromotionalProductsGiveaway DELETE success',
      },
    },
  })
<<<<<<< HEAD
  async deleteById(@param.path.string('id') id: number): Promise<void> {
=======
  async deleteById(@param.path.string('id') id: string): Promise<void> {
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe
    await this.promotionalProductsGiveawayRepository.deleteById(id);
  }
}

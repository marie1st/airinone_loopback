<<<<<<< HEAD
import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {Wage, WageRelations, ProductNPrice} from '../models';
import {ProductNPriceRepository} from './product-n-price.repository';
=======
import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {Wage, WageRelations} from '../models';
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe

export class WageRepository extends DefaultCrudRepository<
  Wage,
  typeof Wage.prototype.id,
  WageRelations
> {
<<<<<<< HEAD

  public readonly productNPrice: HasOneRepositoryFactory<ProductNPrice, typeof Wage.prototype.id>;

  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource, @repository.getter('ProductNPriceRepository') protected productNPriceRepositoryGetter: Getter<ProductNPriceRepository>,
  ) {
    super(Wage, dataSource);
    this.productNPrice = this.createHasOneRepositoryFactoryFor('productNPrice', productNPriceRepositoryGetter);
    this.registerInclusionResolver('productNPrice', this.productNPrice.inclusionResolver);
=======
  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource,
  ) {
    super(Wage, dataSource);
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe
  }
}

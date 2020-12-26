<<<<<<< HEAD
import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {PremiumSetupCost, PremiumSetupCostRelations, ProductNPrice} from '../models';
import {ProductNPriceRepository} from './product-n-price.repository';
=======
import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {PremiumSetupCost, PremiumSetupCostRelations} from '../models';
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe

export class PremiumSetupCostRepository extends DefaultCrudRepository<
  PremiumSetupCost,
  typeof PremiumSetupCost.prototype.id,
  PremiumSetupCostRelations
> {
<<<<<<< HEAD

  public readonly productNPrice: HasOneRepositoryFactory<ProductNPrice, typeof PremiumSetupCost.prototype.id>;

  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource, @repository.getter('ProductNPriceRepository') protected productNPriceRepositoryGetter: Getter<ProductNPriceRepository>,
  ) {
    super(PremiumSetupCost, dataSource);
    this.productNPrice = this.createHasOneRepositoryFactoryFor('productNPrice', productNPriceRepositoryGetter);
    this.registerInclusionResolver('productNPrice', this.productNPrice.inclusionResolver);
=======
  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource,
  ) {
    super(PremiumSetupCost, dataSource);
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe
  }
}

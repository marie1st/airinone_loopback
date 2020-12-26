<<<<<<< HEAD
import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {SetupProcessPic, SetupProcessPicRelations, OrderProduct, SetupProcess} from '../models';
import {OrderProductRepository} from './order-product.repository';
import {SetupProcessRepository} from './setup-process.repository';
=======
import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {SetupProcessPic, SetupProcessPicRelations} from '../models';
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe

export class SetupProcessPicRepository extends DefaultCrudRepository<
  SetupProcessPic,
  typeof SetupProcessPic.prototype.id,
  SetupProcessPicRelations
> {
<<<<<<< HEAD

  public readonly OrderProduct: BelongsToAccessor<OrderProduct, typeof SetupProcessPic.prototype.id>;

  public readonly SetupProcess: BelongsToAccessor<SetupProcess, typeof SetupProcessPic.prototype.id>;

  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource, @repository.getter('OrderProductRepository') protected orderProductRepositoryGetter: Getter<OrderProductRepository>, @repository.getter('SetupProcessRepository') protected setupProcessRepositoryGetter: Getter<SetupProcessRepository>,
  ) {
    super(SetupProcessPic, dataSource);
    this.SetupProcess = this.createBelongsToAccessorFor('SetupProcess', setupProcessRepositoryGetter,);
    this.registerInclusionResolver('SetupProcess', this.SetupProcess.inclusionResolver);
    this.OrderProduct = this.createBelongsToAccessorFor('OrderProduct', orderProductRepositoryGetter,);
    this.registerInclusionResolver('OrderProduct', this.OrderProduct.inclusionResolver);
=======
  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource,
  ) {
    super(SetupProcessPic, dataSource);
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe
  }
}

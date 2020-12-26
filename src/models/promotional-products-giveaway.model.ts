import {Entity, model, property} from '@loopback/repository';

@model()
export class PromotionalProductsGiveaway extends Entity {
  @property({
<<<<<<< HEAD
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;
=======
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe

  @property({
    type: 'string',
    required: true,
  })
  category: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    required: true,
  })
  price: number;

  @property({
    type: 'string',
  })
  description?: string;


  constructor(data?: Partial<PromotionalProductsGiveaway>) {
    super(data);
  }
}

export interface PromotionalProductsGiveawayRelations {
  // describe navigational properties here
}

export type PromotionalProductsGiveawayWithRelations = PromotionalProductsGiveaway & PromotionalProductsGiveawayRelations;

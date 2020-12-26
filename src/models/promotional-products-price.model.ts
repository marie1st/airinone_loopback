import {Entity, model, property} from '@loopback/repository';

@model()
export class PromotionalProductsPrice extends Entity {
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
  btu: string;

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


  constructor(data?: Partial<PromotionalProductsPrice>) {
    super(data);
  }
}

export interface PromotionalProductsPriceRelations {
  // describe navigational properties here
}

export type PromotionalProductsPriceWithRelations = PromotionalProductsPrice & PromotionalProductsPriceRelations;

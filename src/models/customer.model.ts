<<<<<<< HEAD
import {Entity, hasMany, model, property} from '@loopback/repository';
import {OrderProduct} from './order-product.model';
=======
import {Entity, model, property} from '@loopback/repository';
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe

@model()
export class Customer extends Entity {
  @property({
    type: 'string',
    id: true,
<<<<<<< HEAD
    generated: false,
    required: true,
  })
  id: string;
=======
    generated: true,
  })
  id?: string;
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe

  @property({
    type: 'string',
    required: true,
  })
  first_name: string;

  @property({
    type: 'string',
    required: true,
  })
  last_name: string;

  @property({
    type: 'string',
    required: true,
  })
  phone_number: string;

  @property({
    type: 'string',
  })
  id_line?: string;

  @property({
    type: 'string',
  })
  occupation?: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
  })
  facebook?: string;

  @property({
    type: 'string',
  })
  profile_pic?: string;

  @property({
    type: 'string',
<<<<<<< HEAD
    required: true,
  })
  id_card_pic: string;
=======
  })
  id_card_pic?: string;
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe

  @property({
    type: 'string',
    required: true,
  })
  address: string;

  @property({
    type: 'string',
    required: true,
  })
  country: string;

  @property({
    type: 'string',
    required: true,
  })
  province: string;

  @property({
    type: 'string',
    required: true,
  })
  subdistrict: string;

  @property({
    type: 'string',
    required: true,
  })
  district: string;

  @property({
    type: 'string',
    required: true,
  })
  postcode: string;

  @property({
    type: 'date',
  })
  created_at?: string;

<<<<<<< HEAD
  @hasMany(() => OrderProduct, {keyTo: 'order_by'})
  orderProducts: OrderProduct[];
=======
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe

  constructor(data?: Partial<Customer>) {
    super(data);
  }
}

export interface CustomerRelations {
  // describe navigational properties here
}

export type CustomerWithRelations = Customer & CustomerRelations;

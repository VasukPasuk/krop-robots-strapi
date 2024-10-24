/**
 * order controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::order.order', ({ strapi }) => ({
  async create(ctx) {
    const { items, ...rest } = ctx.request.body.data;
    console.log(items)
    try {
      let order;
      await strapi.db.transaction(async (trx) => {
        order = await strapi.entityService.create('api::order.order', {data: rest});

        const createdItems = await Promise.all(
          items.map(async (itemData) => {
            const item = await strapi.entityService.create('api::order-item.order-item', {data: itemData});
            return item;
          })
        );

        // @ts-ignore
        await strapi.entityService.update('api::order.order', order.id, {data: {items: createdItems.map(item => item.documentId)}});
      });

      return this.transformResponse(order);
    } catch (error) {
      // В случае ошибки транзакция будет автоматически отменена
      console.error('Error creating order:', error);
      throw error;
    }
  }
}));

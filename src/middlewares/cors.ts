/**
 * `cors` middleware
 */

import type { Core } from '@strapi/strapi';

export default (config: any, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In cors middleware.');
    console.log(ctx)
    await next();
  };
};

import { z } from 'zod';

import { createTRPCRouter, publicProcedure, protectedProcedure } from '~/server/api/trpc';
import strapi from '~/utils/strapi';

export const carouselRouter = createTRPCRouter({
  get: publicProcedure.query(async () => {
    const carouselData = await strapi.find('carousels');
    return {
      data: carouselData.data,
    };
  }),
});

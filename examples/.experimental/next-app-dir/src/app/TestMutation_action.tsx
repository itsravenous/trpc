'use server';

import { z } from 'zod';
import { createPost } from '~/server/routers/_app';
import { createAction, publicProcedure } from '~/server/trpc';

/**
 * Either inline procedures using trpc's flexible
 * builder api, with input parsers and middleware
 * Wrap the procedure in a `createAction` call to
 * make it server-action friendly
 */
export const testInlinedMutation = createAction(
  publicProcedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .mutation(async (opts) => {
      console.log('testMutation', opts);
      return '...... we did stuff!';
    }),
);

/**
 * You can also reuse procedures from your router API
 */
export const testRouterProcedure = createAction(createPost);

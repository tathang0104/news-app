"use strict";

/**
 * like controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::like.like", ({ strapi }) => ({
  async unlike(ctx) {
    const { state, request } = ctx;
    if (!state.user) {
      return ctx.send(
        {
          data: null,
          error: "No permission",
        },
        401
      );
    }

    const like = await strapi.entityService.findMany("api::like.like", {
      filters: {
        user_id: state.user.id,
        new: {
          id: request.body.data.new.id,
        },
      },
    });

    if (like.length > 0) {
      await strapi.entityService.delete("api::like.like", like[0].id);
      return {
        data: {
          userId: state.user.id,
          newId: request.body.data.new.id,
        },
      };
    }
    else {
        return ctx.send({
            data: null,
            error: "Something went wrong"
        }, 500)
    }
  },
  async like(ctx) {
    const { state, request } = ctx;
    const { user } = state;
    if (!user) {
      return ctx.send({
        data: null,
        error: "No permission"
      }, 401)
    }

    ctx.request.body.data = {
      ...request.body.data,
      user_id: user.id,
    }
    const {data, meta} = await super.create(ctx)
    return {data, meta}
  }
}));

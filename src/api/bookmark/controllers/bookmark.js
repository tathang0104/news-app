"use strict";

/**
 * bookmark controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::bookmark.bookmark", ({ strapi }) => ({
  async unbookmark(ctx) {
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

    const bookmark = await strapi.entityService.findMany("api::bookmark.bookmark", {
      filters: {
        user_id: state.user.id,
        new: {
          id: request.body.data.new.id,
        },
      },
    });

    if (bookmark.length > 0) {
      await strapi.entityService.delete("api::bookmark.bookmark", bookmark[0].id);
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
  async bookmark(ctx) {
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

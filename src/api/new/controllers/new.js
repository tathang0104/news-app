"use strict";

/**
 * new controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::new.new", ({ strapi }) => ({
  async find(ctx) {
    const { user } = ctx.state;
    const { data, meta } = await super.find(ctx);
    await Promise.all(
      data.map(async (item, idx) => {
        const likes = await strapi.entityService.findMany("api::like.like", {
          filters: {
            new: {
              id: item.id,
            },
          },
        });
        data[idx].attributes.like = {}
        data[idx].attributes.like.count = likes.length;
        const userLikes = await strapi.entityService.findMany(
          "api::like.like",
          {
            filters: {
              new: {
                id: item.id,
              },
              user_id: user?.id || 0,
            },
          }
        );
        data[idx].attributes.like.isLiked = userLikes.length > 0;
        const bookmarks = await strapi.entityService.findMany("api::bookmark.bookmark", {
          filters: {
            new: {
              id: item.id,
            },
          },
        });
        data[idx].attributes.bookmark = {}
        data[idx].attributes.bookmark.count = bookmarks.length;
        const userBookmarks = await strapi.entityService.findMany(
          "api::bookmark.bookmark",
          {
            filters: {
              new: {
                id: item.id,
              },
              user_id: user?.id || 0,
            },
          }
        );
        data[idx].attributes.bookmark.isBookmarked = userBookmarks.length > 0;
      })
    );
    return {data, meta}
  },
}));

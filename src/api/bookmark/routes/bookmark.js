"use strict";

/**
 * bookmark router
 */

// const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('api::bookmark.bookmark');

/**
 * bookmark-custom router
 */
const routes = [
  {
    method: "POST",
    path: "/bookmarks/bookmark",
    handler: "bookmark.bookmark",
    config: {
      policies: [],
    },
  },
  {
    method: "POST",
    path: "/bookmarks/unbookmark",
    handler: "bookmark.unbookmark",
    config: {
      policies: [],
    },
  },
  {
    method: "GET",
    path: "/bookmarks",
    handler: "bookmark.find",
    config: {
      policies: [],
    },
  },
  {
    method: "GET",
    path: "/bookmarks/:id",
    handler: "bookmark.findOne",
    config: {
      policies: [],
    },
  },
  {
    method: "POST",
    path: "/bookmarks",
    handler: "bookmark.create",
    config: {
      policies: [],
    },
  },
  {
    method: "PUT",
    path: "/bookmarks/:id",
    handler: "bookmark.update",
    config: {
      policies: [],
    },
  },
  {
    method: "DELETE",
    path: "/bookmarks/:id",
    handler: "bookmark.delete",
    config: {
      policies: [],
    },
  },
];

module.exports = {
  routes,
};
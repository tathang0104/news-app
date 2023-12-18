"use strict";

/**
 * like router
 */

// const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('api::like.like');

/**
 * like-custom router
 */
const routes = [
  {
    method: "POST",
    path: "/likes/like",
    handler: "like.like",
    config: {
      policies: [],
    },
  },
  {
    method: "POST",
    path: "/likes/unlike",
    handler: "like.unlike",
    config: {
      policies: [],
    },
  },
  {
    method: "GET",
    path: "/likes",
    handler: "like.find",
    config: {
      policies: [],
    },
  },
  {
    method: "GET",
    path: "/likes/:id",
    handler: "like.findOne",
    config: {
      policies: [],
    },
  },
  {
    method: "POST",
    path: "/likes",
    handler: "like.create",
    config: {
      policies: [],
    },
  },
  {
    method: "PUT",
    path: "/likes/:id",
    handler: "like.update",
    config: {
      policies: [],
    },
  },
  {
    method: "DELETE",
    path: "/likes/:id",
    handler: "like.delete",
    config: {
      policies: [],
    },
  },
];

module.exports = {
  routes,
};
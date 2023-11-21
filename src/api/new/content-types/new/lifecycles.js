module.exports = {
   async beforeCreate (event) {
    const { data } = event.params;
    const author = await strapi.entityService.findMany("api::author.author", {
        filters: {
            adminUser: {
                id: data.createdBy
            }
        }
    })
    data.author.connect = [author[0].id]
  },
};

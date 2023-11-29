/**
 * This file was automatically generated by Strapi.
 * Any modifications made will be discarded.
 */
import ckeditor from "@ckeditor/strapi-plugin-ckeditor/strapi-admin";
import strapiCloud from "@strapi/plugin-cloud/strapi-admin";
import i18N from "@strapi/plugin-i18n/strapi-admin";
import usersPermissions from "@strapi/plugin-users-permissions/strapi-admin";
import comments from "strapi-plugin-comments/strapi-admin";
import importExportEntries from "strapi-plugin-import-export-entries/strapi-admin";
import navigation from "strapi-plugin-navigation/strapi-admin";
import publisher from "strapi-plugin-publisher/strapi-admin";
import { renderAdmin } from "@strapi/strapi/admin";

renderAdmin(document.getElementById("strapi"), {
  plugins: {
    ckeditor: ckeditor,
    "strapi-cloud": strapiCloud,
    i18n: i18N,
    "users-permissions": usersPermissions,
    comments: comments,
    "import-export-entries": importExportEntries,
    navigation: navigation,
    publisher: publisher,
  },
});

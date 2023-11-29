module.exports = {
  navigation: {
    enabled: true,
    config: {
      additionalFields: [
        { name: "desc", type: "string", label: "Desc" },
      ],
      contentTypes: [
        "api::new.new",
        "api::author.author",
        "api::category.category",
      ],
      contentTypesNameFields: {
        "api::new.new": ["title"],
        "api::author.author": ["title"],
        "api::category.category": ["title"],
      },
      pathDefaultFields: {
        "api::new.new": ["slug"],
        "api::author.author": ["slug"],
        "api::category.category": ["slug"],
      },
      allowedLevels: 3,
    },
  },
  comments: {
    enabled: true,
    config: {
      badWords: false,
      moderatorRoles: ["Authenticated"],
      approvalFlow: ["api::new.new"],
      entryLabel: {
        "*": ["Title", "title", "Name", "name", "Subject", "subject"],
        "api::new.new": ["title"],
      },
      blockedAuthorProps: ["name", "email"],
      reportReasons: {
        MY_CUSTOM_REASON: "MY_CUSTOM_REASON",
      },
    },
  },
};

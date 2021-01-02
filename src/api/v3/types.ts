export type platform = "web";
export type uuidv4 = string;
export type userId = uuidv4;
export type blockId = uuidv4;
export type collectionId = uuidv4;
export type role = "editor" | "read_and_write";
export type roleNone = "none";
export type permission = {
  role: role;
  type: "user_permission" | "public_permission";
  user_id: userId;
} | {
  role: role;
  type: "space_permission";
};
export type locale = "en-US";
export type spaceViewId = uuidv4;
export type spaceId = uuidv4;
export type parentTable = "user_root" | "space" | "block";
export type templateId = uuidv4;
export type persona = "programmer";
export type useCase = "personal_notes_to_dos";
export type userCase = "personal_notes_to_dos";
export type timeZone = "Asia/Tokyo";
export type unixMillSec = number;
export type planType = "personal" | "team";
export type dayOfWeek = number;
export type preferredLocaleOrigin = "legacy";
export type pageId = uuidv4;
export type table = "notion_user";
export type pageType = "page" | "collection_view_page" | "collection_view";
export type contentId = uuidv4;
export type deviceId = uuidv4;

export type notionUser = {
  [userId: string]: {
    role: role;
    value: {
      id: userId;
      version: number;
      email: string;
      given_name: string;
      family_name: string;
      profile_photo: string;
      onboarding_completed: boolean;
      mobile_onboarding_completed: boolean
    }
  }
};

export type userRoot = {
  [userId: string]: {
    role: role;
    value: {
      id: userId;
      version: number;
      space_views: spaceViewId[]
    }
  }
};

export type userSettings = {
  [userId: string]: {
    role: role;
    value: {
      id: userId;
      version: number;
      settings: {
        locale: locale;
        persona?: persona;
        use_case?: useCase;
        time_zone: timeZone;
        user_case?: userCase;
        signup_time: unixMillSec;
        used_mac_app?: boolean;
        preferred_locale: locale;
        used_android_app: boolean;
        start_day_of_week?: dayOfWeek;
        used_mobile_web_app: boolean;
        used_desktop_web_app: boolean;
        preferred_locale_origin: preferredLocaleOrigin
      }
    }
  }
};

export type spaceView = {
  [spaceViewId: string]: {
    role: role;
    value: {
      id: spaceViewId;
      version: number;
      space_id: spaceId;
      bookmarked_pages: blockId[];
      parent_id: userId;
      parent_table: parentTable;
      alive: boolean;
      notify_mobile: boolean;
      notify_desktop: boolean;
      notify_email: boolean;
      visited_templates?: templateId[];
      created_getting_started: boolean;
      joined: boolean
    }
  };
};

export type space = {
  [spaceId: string]: {
    role: role;
    value: {
      id: spaceId;
      version: number;
      name: string;
      domain: string;
      permissions: permission[];
      email_domains: string[];
      icon: string;
      beta_enabled: boolean;
      pages: pageId[];
      disable_public_access: boolean;
      disable_guests: boolean;
      disable_move_to_space: boolean;
      disable_export: boolean;
      created_by?: userId;
      created_time: unixMillSec;
      last_edited_by?: userId;
      last_edited_time: unixMillSec;
      created_by_table: table;
      created_by_id: userId;
      last_edited_by_table: table;
      last_edited_by_id: userId;
      shard_id: number;
      plan_type: planType;
      invite_link_code: string;
      invite_link_enabled: boolean
    }
  } | {
    role: roleNone;
  };
};

export type block = {
  [pageId: string]: {
    role: role;
    value: {
      id: pageId;
      version: number;
      type: pageType;
      properties?: {
        title: [[string]];
      };
      content?: contentId[];
      format?: { page_icon: string; pave_cover?: string; page_cover_position?: number; page_full_width?: boolean; block_locked?: boolean; block_locked_by?: userId };
      permissions?: permission[];
      created_by?: userId;
      created_time: unixMillSec;
      last_edited_by?: userId;
      last_edited_time: unixMillSec;
      parent_id: spaceId;
      parent_table: parentTable;
      alive: boolean;
      copied_from?: uuidv4;
      file_ids?: uuidv4[];
      created_by_table: table;
      created_by_id: userId;
      last_edited_by_table: table;
      last_edited_by_id: userId;
      shard_id: number;
      space_id: spaceId;
    }
  };
};

export type experiment = {
  experimentId: "saml",
  experimentVersion: number;
  group: "control"
} | {
  experimentId: "student",
  experimentVersion: number;
  group: "preview"
} | {
  experimentId: "student-marketing",
  experimentVersion: number;
  group: "preview"
} | {
  experimentId: "startup-landing",
  experimentVersion: number;
  group: "has_startup_landing"
} | {
  experimentId: "password",
  experimentVersion: number;
  group: "control"
} | {
  experimentId: "auth-redirect",
  experimentVersion: number;
  group: "browser"
} | {
  experimentId: "inline-emojis",
  experimentVersion: number;
  group: "on"
} | {
  experimentId: "case-studies",
  experimentVersion: number;
  group: "has_case_studies"
} | {
  experimentId: "remote-landing",
  experimentVersion: number;
  group: "has_remote_landing"
} | {
  experimentId: "better-mobile",
  experimentVersion: number;
  group: "has_better_mobile"
} | {
  experimentId: "inline-equations",
  experimentVersion: number;
  group: "on"
} | {
  experimentId: "always-send-email",
  experimentVersion: number;
  group: "control"
} | {
  experimentId: "content-classification-block",
  experimentVersion: number;
  group: "has-content-classification-block"
} | {
  experimentId: "better-notification-triage",
  experimentVersion: number;
  group: "on"
} | {
  experimentId: "personal-onboarding",
  experimentVersion: number;
  group: "control"
} | {
  experimentId: "pistachio",
  experimentVersion: number;
  group: "control"
} | {
  experimentId: "save-transactions-indexdb",
  experimentVersion: number;
  group: "use_save_api"
} | {
  experimentId: "save-transactions-legacy",
  experimentVersion: number;
  group: "use_save_api"
} | {
  experimentId: "save-transactions-memory",
  experimentVersion: number;
  group: "use_save_api"
} | {
  experimentId: "macadamia-nut",
  experimentVersion: number;
  group: "on"
} | {
  experimentId: "nested-db-filters",
  experimentVersion: number;
  group: "on"
} | {
  experimentId: "twitter-emoji-sprites",
  experimentVersion: number;
  group: "on"
} | {
  experimentId: "google-emoji-sprites",
  experimentVersion: number;
  group: "on"
} | {
  experimentId: "move-api",
  experimentVersion: number;
  group: "control"
} | {
  experimentId: "product-page-length",
  experimentVersion: number;
  group: "short-scroll"
} | {
  experimentId: "iterative-duplicate-block",
  experimentVersion: number;
  group: "on"
} | {
  experimentId: "rename-work-nav-item",
  experimentVersion: number;
  group: "on"
} | {
  experimentId: "desktop-team-create-page",
  experimentVersion: number;
  group: "control"
} | {
  experimentId: "product-h1",
  experimentVersion: number;
  group: "control"
} | {
  experimentId: "hazelnut",
  experimentVersion: number;
  group: "control"
} | {
  experimentId: "sign-in-with-apple",
  experimentVersion: number;
  group: "on"
} | {
  experimentId: "tiger-tamer",
  experimentVersion: number;
  group: "on"
} | {
  experimentId: "lion-tamer",
  experimentVersion: number;
  group: "on"
} | {
  experimentId: "multi-account",
  experimentVersion: 19,
  group: "has_multi_account"
} | {
  experimentId: "disable-enterprise-monthly-billing",
  experimentVersion: number;
  group: "treatment"
} | {
  experimentId: "login-signup-code-strings",
  experimentVersion: number;
  group: "on"
} | {
  experimentId: "login-signup-code-strings-v2",
  experimentVersion: number;
  group: "on"
} | {
  experimentId: "better-upsells",
  experimentVersion: number;
  group: "control"
} | {
  experimentId: "user-data-consent",
  experimentVersion: number;
  group: "control"
} | {
  experimentId: "sharing-show-ancestors",
  experimentVersion: number;
  group: "control"
} | {
  experimentId: "new-upsell-modal",
  experimentVersion: number;
  group: "control"
} | {
  experimentId: "notion-learn",
  experimentVersion: number;
  group: "on"
} | {
  experimentId: "front-events",
  experimentVersion: number;
  group: "on"
} | {
  experimentId: "product-redirect-login",
  experimentVersion: number;
  group: "control"
} | {
  experimentId: "alpha-api",
  experimentVersion: number,
  group: "control"
} | {
  experimentId: "inline-page-creation",
  experimentVersion: number,
  group: "on"
} | {
  experimentId: "link-hover-preview",
  experimentVersion: number,
  group: "on"
} | {
  experimentId: "backlinks",
  experimentVersion: number,
  group: "on"
} | {
  experimentId: "definitely-not-timeline",
  experimentVersion: number,
  group: "on"
} | {
  experimentId: "collect-use-case",
  experimentVersion: number,
  group: "control"
} | {
  experimentId: "enterprise-contact-us-form",
  experimentVersion: number,
  group: "on"
} | {
  experimentId: "apple-silicon",
  experimentVersion: number,
  group: "control"
} | {
  experimentId: "csat",
  experimentVersion: number,
  group: "control"
} | {
  experimentId: "collect-use-case-new-step",
  experimentVersion: number,
  group: "control"
} | {
  experimentId: "supernatural-perfect",
  experimentVersion: number,
  group: "on"
} | {
  experimentId: "visitors",
  experimentVersion: number,
  group: "on"
} | {
  experimentId: "confluence-import",
  experimentVersion: number,
  group: "on"
} | {
  experimentId: "page-customization",
  experimentVersion: number,
  group: "on"
};

export type schemaType = "date";
export type color = "pink" | "purple" | "orange" | "blue" | "red" | "green" | "yellow" | "default";
export type collectionPageProperty = {
  visible: boolean;
  property: string;
};

export type collection = {
  [collectionId: string]: {
    role: role;
    value: {
      id: collectionId;
      version: number;
      name: [[string]];
      description?: ([string] | [string, [[string]]])[];
      schema: {
        [t: string]: {
          name: string;
          type: "select" | "multi_select";
          options: { id: uuidv4; color: color; value: string; }[];
        } | {
          name: string;
          type: "date";
          date_format?: "YYYY/MM/DD";
          options?: { id: uuidv4; color: color; value: string; }[];
        } | {
          name: string;
          type: "person" | "title";
        } | {
          name: string;
          type: "text";
          options?: { id: uuidv4; color: color; value: string; }[];
        };
      };
      icon?: string;
      format: {
        collection_page_properties: collectionPageProperty[];
        [keyNumber: string]: collectionPageProperty | collectionPageProperty[];
      };
      parent_id: blockId;
      parent_table: parentTable;
      alive: boolean;
      copy_from?: uuidv4;
      template_pages?: uuidv4[];
      migrated: boolean;
    };
  };
};

import * as types from "./types";

export const path = "/api/v3/getUserExperiments";

export const method = "POST";

export type Request = {
  deviceId: types.deviceId;
};

export type Response = {
  experiments:
    | {
        experimentId: "saml";
        experimentVersion: number;
        group: "control";
      }
    | {
        experimentId: "student";
        experimentVersion: number;
        group: "preview";
      }
    | {
        experimentId: "student-marketing";
        experimentVersion: number;
        group: "preview";
      }
    | {
        experimentId: "startup-landing";
        experimentVersion: number;
        group: "has_startup_landing";
      }
    | {
        experimentId: "password";
        experimentVersion: number;
        group: "control";
      }
    | {
        experimentId: "auth-redirect";
        experimentVersion: number;
        group: "browser";
      }
    | {
        experimentId: "inline-emojis";
        experimentVersion: number;
        group: "on";
      }
    | {
        experimentId: "case-studies";
        experimentVersion: number;
        group: "has_case_studies";
      }
    | {
        experimentId: "remote-landing";
        experimentVersion: number;
        group: "has_remote_landing";
      }
    | {
        experimentId: "better-mobile";
        experimentVersion: number;
        group: "has_better_mobile";
      }
    | {
        experimentId: "inline-equations";
        experimentVersion: number;
        group: "on";
      }
    | {
        experimentId: "always-send-email";
        experimentVersion: number;
        group: "control";
      }
    | {
        experimentId: "content-classification-block";
        experimentVersion: number;
        group: "has-content-classification-block";
      }
    | {
        experimentId: "better-notification-triage";
        experimentVersion: number;
        group: "on";
      }
    | {
        experimentId: "personal-onboarding";
        experimentVersion: number;
        group: "control";
      }
    | {
        experimentId: "pistachio";
        experimentVersion: number;
        group: "control";
      }
    | {
        experimentId: "save-transactions-indexdb";
        experimentVersion: number;
        group: "use_save_api";
      }
    | {
        experimentId: "save-transactions-legacy";
        experimentVersion: number;
        group: "use_save_api";
      }
    | {
        experimentId: "save-transactions-memory";
        experimentVersion: number;
        group: "use_save_api";
      }
    | {
        experimentId: "macadamia-nut";
        experimentVersion: number;
        group: "on";
      }
    | {
        experimentId: "nested-db-filters";
        experimentVersion: number;
        group: "on";
      }
    | {
        experimentId: "twitter-emoji-sprites";
        experimentVersion: number;
        group: "on";
      }
    | {
        experimentId: "google-emoji-sprites";
        experimentVersion: number;
        group: "on";
      }
    | {
        experimentId: "move-api";
        experimentVersion: number;
        group: "control";
      }
    | {
        experimentId: "product-page-length";
        experimentVersion: number;
        group: "short-scroll";
      }
    | {
        experimentId: "iterative-duplicate-block";
        experimentVersion: number;
        group: "on";
      }
    | {
        experimentId: "rename-work-nav-item";
        experimentVersion: number;
        group: "on";
      }
    | {
        experimentId: "desktop-team-create-page";
        experimentVersion: number;
        group: "control";
      }
    | {
        experimentId: "product-h1";
        experimentVersion: number;
        group: "control";
      }
    | {
        experimentId: "hazelnut";
        experimentVersion: number;
        group: "control";
      }
    | {
        experimentId: "sign-in-with-apple";
        experimentVersion: number;
        group: "on";
      }
    | {
        experimentId: "tiger-tamer";
        experimentVersion: number;
        group: "on";
      }
    | {
        experimentId: "lion-tamer";
        experimentVersion: number;
        group: "on";
      }
    | {
        experimentId: "multi-account";
        experimentVersion: 19;
        group: "has_multi_account";
      }
    | {
        experimentId: "disable-enterprise-monthly-billing";
        experimentVersion: number;
        group: "treatment";
      }
    | {
        experimentId: "login-signup-code-strings";
        experimentVersion: number;
        group: "on";
      }
    | {
        experimentId: "login-signup-code-strings-v2";
        experimentVersion: number;
        group: "on";
      }
    | {
        experimentId: "better-upsells";
        experimentVersion: number;
        group: "control";
      }
    | {
        experimentId: "user-data-consent";
        experimentVersion: number;
        group: "control";
      }
    | {
        experimentId: "sharing-show-ancestors";
        experimentVersion: number;
        group: "control";
      }
    | {
        experimentId: "new-upsell-modal";
        experimentVersion: number;
        group: "control";
      }
    | {
        experimentId: "notion-learn";
        experimentVersion: number;
        group: "on";
      }
    | {
        experimentId: "front-events";
        experimentVersion: number;
        group: "on";
      }
    | {
        experimentId: "product-redirect-login";
        experimentVersion: number;
        group: "control";
      }
    | {
        experimentId: "alpha-api";
        experimentVersion: number;
        group: "control";
      }
    | {
        experimentId: "inline-page-creation";
        experimentVersion: number;
        group: "on";
      }
    | {
        experimentId: "link-hover-preview";
        experimentVersion: number;
        group: "on";
      }
    | {
        experimentId: "backlinks";
        experimentVersion: number;
        group: "on";
      }
    | {
        experimentId: "definitely-not-timeline";
        experimentVersion: number;
        group: "on";
      }
    | {
        experimentId: "collect-use-case";
        experimentVersion: number;
        group: "control";
      }
    | {
        experimentId: "enterprise-contact-us-form";
        experimentVersion: number;
        group: "on";
      }
    | {
        experimentId: "apple-silicon";
        experimentVersion: number;
        group: "control";
      }
    | {
        experimentId: "csat";
        experimentVersion: number;
        group: "control";
      }
    | {
        experimentId: "collect-use-case-new-step";
        experimentVersion: number;
        group: "control";
      }
    | {
        experimentId: "supernatural-perfect";
        experimentVersion: number;
        group: "on";
      }
    | {
        experimentId: "visitors";
        experimentVersion: number;
        group: "on";
      }
    | {
        experimentId: "confluence-import";
        experimentVersion: number;
        group: "on";
      }
    | {
        experimentId: "page-customization";
        experimentVersion: number;
        group: "on";
      }[];
  isLoaded: boolean;
  userId: types.userId;
  deviceId: types.deviceId;
  test: boolean;
};

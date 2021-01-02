import * as types from "./v3/types";

export * as getCsatMilestones from "./v3/getCsatMilestones";
export * as getPublicPageData from "./v3/getPublicPageData";
export * as getSpaces from "./v3/getSpaces";
export * as getUserAnalyticsSettings from "./v3/getUserAnalyticsSettings";
export * as getUserExperiments from "./v3/getUserExperiments";
export * as getUserNotifications from "./v3/getUserNotifications";
export * as getUserSharedPages from "./v3/getUserSharedPages";
export * as loadUserContent from "./v3/loadUserContent";

export type error = {
  errorId: types.uuidv4;
  name: string;
  message: string;
};

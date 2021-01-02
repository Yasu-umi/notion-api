import * as types from "./types";

export const path = "/api/v3/getUserAnalyticsSettings";

export const method = "POST";

export type Request = {
  platform: types.platform;
}

export type Response = {
  intercomAppId: string;
  intercomUserHash: string
  isIntercomEnabled: boolean;
  isLoaded: boolean;
  isSegmentEnabled: boolean;
  noIntercomUserId: boolean;
  user_email: string;
  user_id: types.userId;
}

import { spaceId } from "./types";

export const path = "/api/v3/getUserNotifications";

export const method = "POST";

export type Request = {
  size: number;
};

export type Response = {
  recordMap: {};
  results: {
    spaceId: spaceId;
    unread: {
      following: number;
      mentions: number;
      nonMentions: number;
    };
    unreceived: {
      notificationIds: never[];
    };
  }[];
};

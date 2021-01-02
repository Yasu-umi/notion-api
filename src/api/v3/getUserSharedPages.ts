import * as types from "./types";

export const path = "/api/v3/getUserSharedPages";

export const method = "POST";

export type Request = {
  includeDeleted: boolean;
};

export type Response = {
  pages: {
    id: types.pageId;
    spaceId: types.spaceId;
  }[];
  recordMap: {
    block: types.block;
    space: types.space;
  };
};

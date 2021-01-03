import * as types from "./types";

export const path = "/api/v3/loadPageChunk";

export const method = "POST";

export type Request = {
  chunkNumber: number;
  cursor: {
    stack: [
      [
        {
          id: types.uuidv4;
          index: number;
          table: "block";
        }
      ]
    ];
  };
  limit: number;
  pageId: types.pageId;
  verticalColumns: boolean;
};

export type Response = {
  recordMap: {
    notion_user: types.notionUser;
    user_root: types.userRoot;
    user_settings: types.userSettings;
    space_view: types.spaceView;
    space: types.space;
    block: types.block;
    collection: types.collection;
  };
};

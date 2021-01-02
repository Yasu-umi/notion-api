import * as types from "./types";

export const path = "/api/v3/loadUserContent";

export const method = "POST";

export type Request = {
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

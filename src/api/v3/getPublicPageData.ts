import * as types from "./types";

export const path = "/api/v3/getPublicPageData";

export const method = "POST";

export type Request = {
  blockId: types.blockId
  collectionViewId?: types.uuidv4;
  name: "page"
  spaceDomain?: string;
  saveParent: boolean;
  showMoveTo: boolean;
  type: "block-space"
} | {
  name: "space"
  spaceDomain?: string;
  type: "block-space"
};

export type Response = {
  betaEnabled: boolean;
  canJoinSpace: boolean;
  canRequestAccess: boolean;
  hasPublicAccess: boolean;
  icon: string;
  spaceDomain: string;
  spaceId: types.spaceId;
  spaceName: string;
  userHasExplicitAccess: boolean;
};

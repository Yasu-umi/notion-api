import { assertType } from "typescript-is";
import * as api from "../api";
import * as clientConstParams from "./clientConstParams.json";
import * as getPublicPageDataReq from "./getPublicPageData.req.json";

const createClient = () => new api.v3.Client(clientConstParams);

describe("api", () => {
  test(api.v3.getCsatMilestones.path, async () => {
    const client = createClient();
    const getCsatMilestonesReq = {};
    assertType<api.v3.getCsatMilestones.Request>(getCsatMilestonesReq);
    const res = await client.getCsatMilestones(getCsatMilestonesReq);
    assertType<api.v3.getCsatMilestones.Response>(res);
  });

  test(api.v3.getPublicPageData.path, async () => {
    const client = createClient();
    assertType<api.v3.getPublicPageData.Request>(getPublicPageDataReq);
    const res = await client.getPublicPageData(
      getPublicPageDataReq as api.v3.getPublicPageData.Request
    );
    assertType<api.v3.getPublicPageData.Response>(res);
  });

  test(api.v3.getSpaces.path, async () => {
    const client = createClient();
    const getSpacesReq = {};
    assertType<api.v3.getSpaces.Request>(getSpacesReq);
    const res = await client.getSpaces(getSpacesReq);
    assertType<api.v3.getSpaces.Response>(res);
  });

  test(api.v3.getUserAnalyticsSettings.path, async () => {
    const client = createClient();
    const getUserAnalyticsSettingsReq = { platform: "web" };
    assertType<api.v3.getUserAnalyticsSettings.Request>(
      getUserAnalyticsSettingsReq
    );
    const res = await client.getUserAnalyticsSettings(
      getUserAnalyticsSettingsReq as api.v3.getUserAnalyticsSettings.Request
    );
    assertType<api.v3.getUserAnalyticsSettings.Response>(res);
  });

  test(api.v3.getUserNotifications.path, async () => {
    const client = createClient();
    const getUserNotificationsReq = { size: 1 };
    assertType<api.v3.getUserNotifications.Request>(getUserNotificationsReq);
    const res = await client.getUserNotifications(getUserNotificationsReq);
    assertType<api.v3.getUserNotifications.Response>(res);
  });

  test(api.v3.getUserSharedPages.path, async () => {
    const client = createClient();
    const getUserSharedPagesReq = {
      includeDeleted: true,
    };
    assertType<api.v3.getUserSharedPages.Request>(getUserSharedPagesReq);
    const res = await client.getUserSharedPages(getUserSharedPagesReq);
    assertType<api.v3.getUserSharedPages.Response>(res);
  });

  test(api.v3.loadUserContent.path, async () => {
    const client = createClient();
    const loadUserContentReq = {};
    assertType<api.v3.loadUserContent.Request>(loadUserContentReq);
    const res = await client.loadUserContent(loadUserContentReq);
    assertType<api.v3.loadUserContent.Response>(res);
  });
});

import fetch from "node-fetch";
import * as getCsatMilestones from "./getCsatMilestones";
import * as getPublicPageData from "./getPublicPageData";
import * as getSpaces from "./getSpaces";
import * as getUserAnalyticsSettings from "./getUserAnalyticsSettings";
import * as getUserExperiments from "./getUserExperiments";
import * as getUserNotifications from "./getUserNotifications";
import * as getUserSharedPages from "./getUserSharedPages";
import * as loadUserContent from "./loadUserContent";

import { error } from "./types";

export class Client {
  private readonly tokenV2: string;
  private readonly notionActiveUserHeader: string;

  constructor({
    tokenV2,
    notionActiveUserHeader,
  }: {
    tokenV2: string;
    notionActiveUserHeader: string;
  }) {
    this.tokenV2 = tokenV2;
    this.notionActiveUserHeader = notionActiveUserHeader;
  }

  private async post<T>({
    path,
    method,
    body,
  }: {
    path: string;
    method: string;
    body?: unknown;
  }): Promise<T | error> {
    const res = await fetch(`https://www.notion.so${path}`, {
      method,
      headers: {
        "content-type": "application/json",
        cookie: `notion_user_id=${this.notionActiveUserHeader}; token_v2=${this.tokenV2}`,
        "x-notion-active-user-header": this.notionActiveUserHeader,
      },
      body: JSON.stringify(body),
    });
    return (await res.json()) as T | error;
  }

  public getCsatMilestones(req: getCsatMilestones.Request) {
    return this.post<getCsatMilestones.Response>({
      path: getCsatMilestones.path,
      method: getCsatMilestones.method,
      body: req,
    });
  }

  public getPublicPageData(req: getPublicPageData.Request) {
    return this.post<getPublicPageData.Response>({
      path: getPublicPageData.path,
      method: getPublicPageData.method,
      body: req,
    });
  }

  public getSpaces(req: getSpaces.Request) {
    return this.post<getSpaces.Response>({
      path: getSpaces.path,
      method: getSpaces.method,
      body: req,
    });
  }

  public getUserAnalyticsSettings(req: getUserAnalyticsSettings.Request) {
    return this.post<getUserAnalyticsSettings.Response>({
      path: getUserAnalyticsSettings.path,
      method: getUserAnalyticsSettings.method,
      body: req,
    });
  }

  public getUserNotifications(req: getUserNotifications.Request) {
    return this.post<getUserNotifications.Response>({
      path: getUserNotifications.path,
      method: getUserNotifications.method,
      body: req,
    });
  }

  public getUserExperiments(req: getUserExperiments.Request) {
    return this.post<getUserExperiments.Response>({
      path: getUserExperiments.path,
      method: getUserExperiments.method,
      body: req,
    });
  }

  public getUserSharedPages(req: getUserSharedPages.Request) {
    return this.post<getUserSharedPages.Response>({
      path: getUserSharedPages.path,
      method: getUserSharedPages.method,
      body: req,
    });
  }

  public loadUserContent(req: loadUserContent.Request) {
    return this.post<loadUserContent.Response>({
      path: loadUserContent.path,
      method: loadUserContent.method,
      body: req,
    });
  }
}

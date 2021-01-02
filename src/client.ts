import fetch from "node-fetch";
import * as api from "./api";


export class Client {
  private readonly tokenV2: string;
  private readonly notionActiveUserHeader: string;

  constructor({ tokenV2, notionActiveUserHeader }: { tokenV2: string; notionActiveUserHeader: string }) {
    this.tokenV2 = tokenV2;
    this.notionActiveUserHeader = notionActiveUserHeader;
  }

  public async post<T>({ path, method, body }: { path: string, method: string, body?: any; }): Promise<T | api.v3.error> {
    const res = await fetch(`https://www.notion.so${path}`, {
      method,
      headers: {
        "content-type": "application/json",
        cookie: `notion_user_id=${this.notionActiveUserHeader}; token_v2=${this.tokenV2}`,
        "x-notion-active-user-header": this.notionActiveUserHeader,
      },
      body: JSON.stringify(body),
    });
    return await res.json() as T;
  }
}

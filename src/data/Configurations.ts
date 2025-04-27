import { Resource } from "./Resource";

export class Configurations {
  apiName: string;
  gitHubRepository: string;
  gitHubUser: string;
  gitHubPersonalAccessToken: string;
  resources: Resource[];

  constructor(data: Partial<Configurations>) {
    if (data.apiName == null) throw new Error("Missing name");
    if (data.gitHubRepository == null) throw new Error("Missing repository");
    if (data.gitHubUser == null) throw new Error("Missing user");
    if (data.gitHubPersonalAccessToken == null)
      throw new Error("Missing personal access token");
    if (data.resources == null) throw new Error("Missing resources");
    this.apiName = data.apiName;
    this.gitHubRepository = data.gitHubRepository;
    this.gitHubUser = data.gitHubUser;
    this.gitHubPersonalAccessToken = data.gitHubPersonalAccessToken;
    this.resources = Resource.arrayFromJSON(data.resources);
  }

  static fromJSON(json: string | object): Configurations {
    const obj = typeof json === "string" ? JSON.parse(json) : json;
    return new Configurations(obj);
  }
}

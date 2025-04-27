import { Property } from "./Property";

export class Resource {
  name: string;
  properties: Property[];

  constructor(data: Partial<Resource>) {
    if (data.name == null) throw new Error("Missing name");
    if (data.properties == null) throw new Error("Missing properties");
    this.name = data.name;
    this.properties = Property.arrayFromJSON(data.properties);
  }

  static arrayFromJSON(jsonArray: [] | any): Resource[] {
    const resources: Resource[] = [];
    for (const resource of jsonArray) {
      const newResource = new Resource(resource);
      resources.push(newResource);
    }
    return resources;
  }
}

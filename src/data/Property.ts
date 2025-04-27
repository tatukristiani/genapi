export class Property {
  type: string;
  name: string;
  nullable: boolean | string = true;
  primaryKey: boolean | string = false;
  foreignKey: boolean | string = false;
  foreignKeyReference: string | null = null;
  maxLength: number | string | null = null;
  decimalIntegerPart: number | null = null;
  decimalFractionPart: number | null = null;

  constructor(data: Partial<Property>) {
    if (data.type == null) throw new Error("Missing type");
    if (data.name == null) throw new Error("Missing type");
    this.type = data.type;
    this.name = data.name;
    this.nullable =
      data.nullable == "on" || data.nullable === true ? true : false;
    this.primaryKey =
      data.primaryKey == "on" || data.primaryKey === true ? true : false;
    this.foreignKey =
      data.foreignKey == "on" || data.foreignKey === true ? true : false;
    this.foreignKeyReference = data.foreignKeyReference ?? null;
    this.maxLength = Number.isNaN(parseInt(data.maxLength?.toString() ?? ""))
      ? null
      : parseInt(data.maxLength?.toString() ?? "");
    this.decimalIntegerPart = Number.isNaN(
      parseInt(data.decimalIntegerPart?.toString() ?? "")
    )
      ? null
      : parseInt(data.decimalIntegerPart?.toString() ?? "");
    this.decimalFractionPart = Number.isNaN(
      parseInt(data.decimalFractionPart?.toString() ?? "")
    )
      ? null
      : parseInt(data.decimalFractionPart?.toString() ?? "");
  }
  static arrayFromJSON(jsonArray: [] | any): Property[] {
    const properties: Property[] = [];
    for (const prop of jsonArray) {
      const newProp = new Property(prop);
      properties.push(newProp);
    }
    return properties;
  }
}

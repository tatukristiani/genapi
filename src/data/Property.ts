export class Property {
  type: string;
  name: string;
  nullable: boolean = true;
  primaryKey: boolean = false;
  foreignKey: boolean = false;
  foreignKeyReference: string | null = null;
  maxLength: number | null = null;
  decimalIntegerPart: number | null = null;
  decimalFractionPart: number | null = null;

  constructor(data: Partial<Property>) {
    if (data.type == null) throw new Error("Missing type");
    if (data.name == null) throw new Error("Missing type");
    this.type = data.type;
    this.name = data.name;
    this.nullable = data.nullable ?? true;
    this.primaryKey = data.primaryKey ?? false;
    this.foreignKey = data.foreignKey ?? false;
    this.foreignKeyReference = data.foreignKeyReference ?? null;
    this.maxLength = data.maxLength ?? null;
    this.decimalIntegerPart = data.decimalIntegerPart ?? null;
    this.decimalFractionPart = data.decimalFractionPart ?? null;
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

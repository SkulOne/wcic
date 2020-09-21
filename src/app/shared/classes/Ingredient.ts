export class Ingredient {
  private readonly _id: number;
  private readonly _name: string;
  private readonly _amount: string;
  private readonly _unit: {
    unitLong: string,
    unitShort: string
  };

  constructor(object) {
    this._id = object.id;
    this._name = object.name;
    this._amount = object.measures.metric.amount;
    this._unit = {
       unitLong: object.measures.metric.unitLong,
        unitShort: object.measures.metric.unitShort,
    };
  }


  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get amount(): string {
    return this._amount;
  }

  get unit(): { unitLong: string; unitShort: string } {
    return this._unit;
  }
}

export class Produkt {
  constructor(
    public bezeichnung: string,
    public beschreibung: string,
    public preis: number,
    public thumbnailUrl?: string
  ) {}
}


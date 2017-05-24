export class Product {
  id: number;
  name: string;
  avatar: string;
  price: string;
  description: string;

  constructor()
  constructor(id: number, name: string, avatar: string, price: string, description: string)
  constructor(id?: number, name?: string, avatar?: string, price?: string, description?: string) {
    this.id = id;
    this.name = name;
    this.avatar = avatar;
    this.price = price;
    this.description = description;
  }

}

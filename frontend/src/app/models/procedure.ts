export class Procedure {
  id: number;
  name: string;
  avatar: string;
  price: string;
  description: string;
  duration: string;

  constructor()
  constructor(id: number, name: string, avatar: string, price: string, description: string, duration: string)
  constructor(id?: number, name?: string, avatar?: string, price?: string, description?: string, duration?: string) {
    this.id = id;
    this.name = name;
    this.avatar = avatar;
    this.price = price;
    this.description = description;
    this.duration = duration;
  }

}

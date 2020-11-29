import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root",
})
export class AdditemserviceService {
  counter: number = 4;
  Items = [
    {
      id: 1,
      price: 122,
      name: "Copper Soup",
      description: "Panni wala Copper",
    },
    {
      id: 2,
      price: 200,
      name: "Silver Soup",
      description: "Panni wala Silver",
    },
    {
      id: 3,
      price: 500,
      name: "Gold Soup",
      description: "Panni wala Gold",
    },
    {
      id: 4,
      price: 430,
      name: "Diamond Soup",
      description: "Panni wala Diamond",
    },
  ];

  constructor() {}
}

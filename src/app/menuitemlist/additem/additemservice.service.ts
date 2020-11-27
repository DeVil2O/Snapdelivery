import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root",
})
export class AdditemserviceService {
  counter: number = 4;
  Items = [
    {
      id: 1,
      price: 12,
      name: "Tomato Soup",
      description: "Panni wala tamatar",
    },
    {
      id: 2,
      price: 12,
      name: "Tomato Soup",
      description: "Panni wala tamatar",
    },
    {
      id: 3,
      price: 12,
      name: "Tomato Soup",
      description: "Panni wala tamatar",
    },
    {
      id: 4,
      price: 12,
      name: "Tomato Soup",
      description: "Panni wala tamatar",
    },
  ];

  constructor() {}
}

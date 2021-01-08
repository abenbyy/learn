import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {
  name;

  items = [
    {
      name: "Raket",
      price: 200000,
    },
    {
      name: "Mouse",
      price: 150000
    },
    {
      name: "Keyboard",
      price: 150000
    },
    {
      name: "Headset",
      price: 150000
    },
    {
      name: "Mic",
      price: 150000
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}

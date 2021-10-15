import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {

  public list = [
    {name:'Promoção'},
    {name:'Cervejas'},
    {name:'Pingas'},
    {name:'Whiskys'},
    {name:'Combos'},
    {name:'Águas'},
    {name:'Energéticos'},
    {name:'Cooler'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public receiverClick(event: any): void {
    console.log("Event ->", event);
    
  }

}


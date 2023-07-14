import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-home',
  templateUrl: './slider-home.component.html',
  styleUrls: ['./slider-home.component.scss']
})
export class SliderHomeComponent implements OnInit {
  @Input()
  titleSlider: string = "";
  @Input()
  descriptionSlider: string = "";
  @Input()
  objToView: "colleghi" | "ristoranti" | "" = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}

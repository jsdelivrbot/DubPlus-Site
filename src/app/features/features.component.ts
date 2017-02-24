import { Component, OnInit } from '@angular/core';
import { Feature } from './feature';
import { FeaturesService } from './features.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  features: Feature[] = [];

  constructor(private _featuresService: FeaturesService) { }

  ngOnInit() {
    this.features = this._featuresService.getFeatures();
  }

}

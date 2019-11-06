import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import * as fromComponents from './components';
import { SearchVideosRoutingFeatureModule }  from './search-videos-feature.routing.module';

@NgModule({
  declarations: [fromComponents.components],
  imports: [
    CommonModule,
    SharedModule,
    SearchVideosRoutingFeatureModule
  ]
})
export class SearchVideosFeatureModule { }

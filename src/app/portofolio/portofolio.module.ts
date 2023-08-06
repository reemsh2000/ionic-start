import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortofolioPageRoutingModule } from './portofolio-routing.module';

import { PortofolioPage } from './portofolio.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortofolioPageRoutingModule,
    ExploreContainerComponentModule,

  ],
  declarations: [PortofolioPage]
})
export class PortofolioPageModule {}

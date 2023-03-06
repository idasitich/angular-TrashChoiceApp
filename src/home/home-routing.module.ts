import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { ManComponent } from '../man/man.component';
import { LayoutComponent } from '../layout/layout.component';

const routes: Routes = [
  { path: 'aboutus', component: AboutusComponent },
  { path: 'man', component: ManComponent },
  { path: 'home', component: LayoutComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  declarations: [AboutusComponent, ManComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

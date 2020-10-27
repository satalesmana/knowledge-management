import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberComponent } from './pages/member/member.component';
import { KmformComponent } from './pages/kmform/kmform.component'
import { KmpublishComponent} from './pages/kmpublish/kmpublish.component'
import {KmunpublishComponent} from './pages/kmunpublish/kmunpublish.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path:'member', component:MemberComponent},
  { path:'kmform', component:KmformComponent},
  {path:'kmpublish', component:KmpublishComponent},
  {path:'kmunpublish', component:KmunpublishComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

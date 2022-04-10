import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { ContentListComponent } from './content-list/content-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes: Routes = [
  {
    path: "",
    component: ContentListComponent,
  },
  { path: "list/:id" , component: ContentDetailComponent },
  {
    path: "list",
    component: ContentListComponent
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

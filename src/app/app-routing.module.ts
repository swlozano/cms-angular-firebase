import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostCreateComponent } from './components/post-create/post-create.component';
import { PostComponent } from './components/post/post.component';
import { PostResolver } from './components/post/post.resolver';

const routes: Routes = [

  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: PostListComponent },
  { path: 'create', component: PostCreateComponent },
  { path: ':categoria/:key', component: PostComponent, resolve:{data : PostResolver} },
  {path: '**', redirectTo: 'list'},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

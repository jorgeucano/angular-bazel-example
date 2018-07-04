
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {StoreModule} from '@ngrx/store';

import {AppComponent} from './app.component';
import {todoReducer} from './reducers/reducers';

export const appRoutes: Routes = [
  {path: '', pathMatch: 'full', loadChildren: './hello-world/hello-world.module#HelloWorldModule'},
  {path: 'todos', pathMatch: 'full', loadChildren: './todos/todos.module#TodosModule'},
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), StoreModule.forRoot({todoReducer})],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
}

import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
        return import('./pages/home/home.component').then((m)=> m.HomeComponent);
    },
}];

// Notice it is returning a array of objects, similar to JSON. This is the format that Angular uses to define routes.

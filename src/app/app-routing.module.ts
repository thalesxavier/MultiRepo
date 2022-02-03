import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const URLGlb = 'http://localhost:8051/globais/remoteEntry.js';
const URLEdu = 'http://localhost:5013/remoteEntry.js';
const URLErlao = 'http://bhn050103121:8051/poc-po-ui/remoteEntry.js';


export const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'globais',
    loadChildren: () => loadRemoteModule({
      type: 'module', remoteEntry: URLGlb, exposedModule: './Module'
    }).then(m => m.InteropModule)
  },
  {
    path: 'educacional',
    loadChildren: () => loadRemoteModule({
      type: 'module', remoteEntry: URLEdu, exposedModule: './Module'
    }).then(m => m.InteropModule)
  },
  {
    path: 'erlao',
    loadChildren: () => loadRemoteModule({
      type: 'module', remoteEntry: URLErlao, exposedModule: './Module'
    }).then(m => m.InteropModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
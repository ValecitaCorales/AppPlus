import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { UnauthGuard } from './guards/unauth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./Pages/login/login.module').then( m => m.LoginPageModule),
    canActivate:[UnauthGuard]
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./Pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule),
    
  }, 
  {
    path: 'tabs',
    loadChildren: () => import('./Pages/tabs/tabs.module').then(m => m.TabsPageModule),
    
  },
  {
    path: '**',
    loadChildren: () => import('./Pages/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

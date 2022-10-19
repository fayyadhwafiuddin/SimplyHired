import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'post-jobs',
    loadChildren: () => import('./post-jobs/post-jobs.module').then( m => m.PostJobsPageModule)
  },
  {
    path: 'find-jobs',
    loadChildren: () => import('./find-jobs/find-jobs.module').then( m => m.FindJobsPageModule)
  },
  {
    path: 'models',
    loadChildren: () => import('./models/models.module').then( m => m.ModelsPageModule)
  },
  {
    path: 'approval-page',
    loadChildren: () => import('./approval-page/approval-page.module').then( m => m.ApprovalPagePageModule)
  },
  {
    path: 'admin-homepage',
    loadChildren: () => import('./admin-homepage/admin-homepage.module').then( m => m.AdminHomepagePageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'dashboard-e',
    loadChildren: () => import('./dashboard-e/dashboard-e.module').then( m => m.DashboardEPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
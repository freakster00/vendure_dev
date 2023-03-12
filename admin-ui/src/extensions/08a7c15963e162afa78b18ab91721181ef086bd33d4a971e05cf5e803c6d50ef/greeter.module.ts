import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule,addNavMenuSection } from '@vendure/admin-ui/core';
import { GreeterComponent } from './greeter.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{
      path: '',
      pathMatch: 'full',
      component: GreeterComponent,
      data: { breadcrumb: 'Greeter' },
    }]),
  ],
  declarations: [GreeterComponent],
  providers: [
    addNavMenuSection({
      id: 'greeter',
      label: 'My Extensions',
      items: [{
        id: 'greeter',
        label: 'Greeter',
        routerLink: ['/extensions/greet'],
        // Icon can be any of https://clarity.design/icons
        icon: 'cursor-hand-open',
      }],
    },
    // Add this section before the "settings" section
    'settings'),
  ]
})
export class GreeterModule {}
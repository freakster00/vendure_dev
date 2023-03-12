import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@vendure/admin-ui/core';
import { QuoteComponent } from './customerQuote.component';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{
      path: '',
      pathMatch: 'full',
      component: QuoteComponent,
      data: { breadcrumb: 'Quote' },
    }]),
  ],
  declarations: [QuoteComponent],
})
export class QuoteModule {}
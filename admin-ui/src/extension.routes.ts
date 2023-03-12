export const extensionRoutes = [  {
    path: 'extensions/feedback',
    loadChildren: () => import('./extensions/08a7c15963e162afa78b18ab91721181ef086bd33d4a971e05cf5e803c6d50ef/customerQuoteForm').then(m => m.QuoteModule),
  }];

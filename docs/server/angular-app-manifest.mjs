
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/angular-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/C:/Program Files/Git/angular-app"
  },
  {
    "renderMode": 2,
    "route": "/C:/Program Files/Git/angular-app/main"
  },
  {
    "renderMode": 2,
    "route": "/C:/Program Files/Git/angular-app/about"
  },
  {
    "renderMode": 2,
    "route": "/C:/Program Files/Git/angular-app/sendEmail"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5283, hash: '3aa6a012bdf4cfe9cf1359b54f19fa2a235ccdf77b660baf7ba1fb630e38eba0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1050, hash: '7ea488008e92631e78f9de32ead48a0b85d1fca51fd0218075fd246f60f3eb65', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'main/index.html': {size: 13675, hash: '6081e6ca2bba53a8919d7b92bde3339eea602c8b902ab43d0d89e85423f689fa', text: () => import('./assets-chunks/main_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 13675, hash: '6081e6ca2bba53a8919d7b92bde3339eea602c8b902ab43d0d89e85423f689fa', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 13675, hash: '6081e6ca2bba53a8919d7b92bde3339eea602c8b902ab43d0d89e85423f689fa', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'sendEmail/index.html': {size: 13675, hash: '6081e6ca2bba53a8919d7b92bde3339eea602c8b902ab43d0d89e85423f689fa', text: () => import('./assets-chunks/sendEmail_index_html.mjs').then(m => m.default)},
    'styles-R37GORVW.css': {size: 226826, hash: 'd0uUHn5AnKw', text: () => import('./assets-chunks/styles-R37GORVW_css.mjs').then(m => m.default)}
  },
};

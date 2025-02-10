
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
    'index.csr.html': {size: 5283, hash: '1e68aee880741b207a5874058eb96d6995705c8dbb0bca82a9a73e2ec926e04d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1050, hash: '5af2a065af1025514de1019221f078d8e4107263a3030d443ebf5bee4be7b153', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'main/index.html': {size: 13675, hash: '6af83776fe940355a2471ae853f8ef4e318679ea3957e2711686bbb24cf28df0', text: () => import('./assets-chunks/main_index_html.mjs').then(m => m.default)},
    'index.html': {size: 13675, hash: '6af83776fe940355a2471ae853f8ef4e318679ea3957e2711686bbb24cf28df0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 13675, hash: '6af83776fe940355a2471ae853f8ef4e318679ea3957e2711686bbb24cf28df0', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'sendEmail/index.html': {size: 13675, hash: '6af83776fe940355a2471ae853f8ef4e318679ea3957e2711686bbb24cf28df0', text: () => import('./assets-chunks/sendEmail_index_html.mjs').then(m => m.default)},
    'styles-R37GORVW.css': {size: 226826, hash: 'd0uUHn5AnKw', text: () => import('./assets-chunks/styles-R37GORVW_css.mjs').then(m => m.default)}
  },
};

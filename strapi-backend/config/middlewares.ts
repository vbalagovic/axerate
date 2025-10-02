export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'cdn.ckeditor.com',
            'strapi.io',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'cdn.ckeditor.com',
          ],
          'script-src': [
            "'self'",
            "'unsafe-inline'",
            'cdn.ckeditor.com',
          ],
          'style-src': [
            "'self'",
            "'unsafe-inline'",
            'cdn.ckeditor.com',
          ],
          'font-src': [
            "'self'",
            'cdn.ckeditor.com',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

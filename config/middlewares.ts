module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::poweredBy',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: ['http://localhost:3000'], // Your frontend URL
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      headers: [
        'Content-Type',
        'Authorization',
        'Origin',
        'Accept',
        'X-Requested-With',
        'Access-Control-Allow-Headers',
        'Access-Control-Request-Method',
        'Access-Control-Request-Headers'
      ],
      exposedHeaders: ['Content-Range', 'X-Content-Range'],
      credentials: true,
      maxAge: 86400
    }
  },
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
]


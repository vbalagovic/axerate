module.exports = {
  apps: [
    {
      name: 'strapi',
      cwd: '/var/www/html/strapi-backend',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        HOST: '0.0.0.0',
        PORT: 1337
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      error_file: '/var/www/html/logs/strapi-error.log',
      out_file: '/var/www/html/logs/strapi-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },
    {
      name: 'nextjs',
      cwd: '/var/www/html/axerate-nextjs',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      error_file: '/var/www/html/logs/nextjs-error.log',
      out_file: '/var/www/html/logs/nextjs-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    }
  ]
};

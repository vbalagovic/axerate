const fs = require('fs');
const path = require('path');

// Define all content types that need API files
const contentTypes = [
  'hero-section',
  'about-section',
  'service-plan',
  'why-work-feature',
  'pitch-coaching',
  'faq',
  'founder-section',
  'testimonial',
  'blog-post',
  'career-post'
];

// Template for routes file
const routeTemplate = (apiName) => `'use strict';

/**
 * ${apiName} router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::${apiName}.${apiName}');
`;

// Template for controller file
const controllerTemplate = (apiName) => `'use strict';

/**
 * ${apiName} controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::${apiName}.${apiName}');
`;

// Template for service file
const serviceTemplate = (apiName) => `'use strict';

/**
 * ${apiName} service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::${apiName}.${apiName}');
`;

// Function to ensure directory exists
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Function to create file if it doesn't exist
function createFileIfNotExists(filePath, content) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Created: ${filePath}`);
  } else {
    console.log(`⏭️  Exists: ${filePath}`);
  }
}

// Generate API files for each content type
contentTypes.forEach(contentType => {
  const apiDir = path.join(__dirname, '..', 'src', 'api', contentType);

  // Create directories
  ensureDirectoryExists(path.join(apiDir, 'routes'));
  ensureDirectoryExists(path.join(apiDir, 'controllers'));
  ensureDirectoryExists(path.join(apiDir, 'services'));

  // Create files
  createFileIfNotExists(
    path.join(apiDir, 'routes', `${contentType}.js`),
    routeTemplate(contentType)
  );

  createFileIfNotExists(
    path.join(apiDir, 'controllers', `${contentType}.js`),
    controllerTemplate(contentType)
  );

  createFileIfNotExists(
    path.join(apiDir, 'services', `${contentType}.js`),
    serviceTemplate(contentType)
  );
});

console.log('\n🎉 All API files generated successfully!');
console.log('📝 Next steps:');
console.log('1. Restart Strapi: npm run develop');
console.log('2. Go to Settings → Roles & Permissions → Public');
console.log('3. Enable "find" permission for all content types');

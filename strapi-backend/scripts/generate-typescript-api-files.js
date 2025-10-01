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

// Template for routes file (TypeScript)
const routeTemplate = (apiName) => `/**
 * ${apiName} router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::${apiName}.${apiName}');
`;

// Template for controller file (TypeScript)
const controllerTemplate = (apiName) => `/**
 * ${apiName} controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::${apiName}.${apiName}');
`;

// Template for service file (TypeScript)
const serviceTemplate = (apiName) => `/**
 * ${apiName} service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::${apiName}.${apiName}');
`;

// Function to ensure directory exists
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Function to create/overwrite file
function createFile(filePath, content) {
  fs.writeFileSync(filePath, content);
  console.log(`✅ Created/Updated: ${filePath}`);
}

// Function to remove old JS files if they exist
function removeOldJSFile(basePath, filename) {
  const jsFilePath = path.join(basePath, filename + '.js');
  if (fs.existsSync(jsFilePath)) {
    fs.unlinkSync(jsFilePath);
    console.log(`🗑️  Removed old: ${jsFilePath}`);
  }
}

console.log('🔧 Generating TypeScript API files...\n');

// Generate API files for each content type
contentTypes.forEach(contentType => {
  const apiDir = path.join(__dirname, '..', 'src', 'api', contentType);

  // Create directories
  const routesDir = path.join(apiDir, 'routes');
  const controllersDir = path.join(apiDir, 'controllers');
  const servicesDir = path.join(apiDir, 'services');

  ensureDirectoryExists(routesDir);
  ensureDirectoryExists(controllersDir);
  ensureDirectoryExists(servicesDir);

  // Remove old JS files and create new TS files
  removeOldJSFile(routesDir, contentType);
  createFile(
    path.join(routesDir, `${contentType}.ts`),
    routeTemplate(contentType)
  );

  removeOldJSFile(controllersDir, contentType);
  createFile(
    path.join(controllersDir, `${contentType}.ts`),
    controllerTemplate(contentType)
  );

  removeOldJSFile(servicesDir, contentType);
  createFile(
    path.join(servicesDir, `${contentType}.ts`),
    serviceTemplate(contentType)
  );
});

console.log('\n🎉 All TypeScript API files generated successfully!');
console.log('📝 Next steps:');
console.log('1. Restart Strapi: npm run develop');
console.log('2. Go to Settings → Users-permissions → Roles → Public');
console.log('3. Enable "find" permission for all content types');

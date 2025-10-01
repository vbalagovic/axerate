const { seedData } = require('./seed');

module.exports = async ({ strapi }) => {
  try {
    // Check if data already exists to avoid duplicates
    const existingHeroSection = await strapi.db.query('api::hero-section.hero-section').findOne();

    if (!existingHeroSection) {
      console.log('🌱 No existing data found, running seed script...');
      await seedData({ strapi });
      console.log('🎉 Initial data seeding complete!');
    } else {
      console.log('✅ Data already exists, skipping seed');
    }

    // Set public permissions for all content types
    const publicRole = await strapi.query('plugin::users-permissions.role').findOne({
      where: { type: 'public' }
    });

    if (publicRole) {
      const contentTypes = [
        'api::hero-section.hero-section',
        'api::about-section.about-section',
        'api::service-plan.service-plan',
        'api::why-work-feature.why-work-feature',
        'api::pitch-coaching.pitch-coaching',
        'api::faq.faq',
        'api::founder-section.founder-section',
        'api::testimonial.testimonial',
        'api::blog-post.blog-post',
        'api::career-post.career-post'
      ];

      const permissions = {};

      contentTypes.forEach(contentType => {
        permissions[contentType] = {
          find: true,
          findOne: true
        };
      });

      await strapi.query('plugin::users-permissions.permission').updateMany({
        where: { role: publicRole.id },
        data: { enabled: true }
      });

      console.log('🔓 Public API permissions configured');
    }

  } catch (error) {
    console.error('❌ Bootstrap error:', error);
  }
};

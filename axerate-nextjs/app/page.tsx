import { getProcessSteps, getTeamMembers, getBlogPosts, getHeroSection } from "@/lib/strapi";
import HomeClient from "@/components/HomeClient";

export default async function Home() {
  // Fetch all data server-side for SEO
  const [heroData, processSteps, teamMembers, blogPosts] = await Promise.all([
    getHeroSection(),
    getProcessSteps(),
    getTeamMembers(),
    getBlogPosts(3)
  ]);

  // Debug logging
  console.log('📊 Server-side data fetched:');
  console.log('Hero:', heroData ? '✅' : '❌');
  console.log('Process Steps:', processSteps?.length || 0);
  console.log('Team Members:', teamMembers?.length || 0);
  console.log('Blog Posts:', blogPosts?.length || 0);

  return (
    <HomeClient
      heroData={heroData}
      processSteps={processSteps}
      teamMembers={teamMembers}
      blogPosts={blogPosts}
    />
  );
}

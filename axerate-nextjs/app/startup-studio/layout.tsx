import { getFooterConfig } from "@/lib/strapi";
import LayoutClient from "@/components/LayoutClient";

export default async function StartupStudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetch footer config for startup-studio page
  const footerConfig = await getFooterConfig("startup-studio");

  return <LayoutClient footerConfig={footerConfig}>{children}</LayoutClient>;
}

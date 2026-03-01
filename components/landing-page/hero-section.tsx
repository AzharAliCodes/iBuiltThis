import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"

export const HeroSection = () => {
  return (
    <div>
      <Badge>
        <span>Join thousands of creators sharing their work</span>
      </Badge>
     
      <h1>Share What You&apos;ve Built, Discover What&apos;s Launching</h1>

      <p>A community platform for creators to showcase their apps, AI tools,
            SaaS products, and creative projects. Authentic launches, real
            builders, genuine feedback.</p>
      
      <Button>Share Your Project</Button>
      <Button>Explore projects</Button>
    </div>
  );
}
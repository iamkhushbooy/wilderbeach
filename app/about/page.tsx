import type { Metadata } from "next"
import AboutHero from "@/components/about/about-hero"
import StorySection from "@/components/about/story-section"
import TeamSection from "@/components/about/team-section"
import ValuesSection from "@/components/about/values-section"
import AwardsSection from "@/components/about/awards-section"
export const metadata: Metadata = {
  title: "About Us - WilderBeach Resort",
  description:
    "Discover the story behind WilderBeach Resort, our commitment to excellence, and the passionate team that makes your stay unforgettable.",
}
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      {/* <StorySection /> */}
      <ValuesSection />
      <TeamSection />
      <AwardsSection />
    </>
  )
}

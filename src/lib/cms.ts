import { solutions, Solution } from "../data/solutions";
import { industries, Industry } from "../data/industries";
import { caseStudies, CaseStudy } from "../data/caseStudies";
import { insights, Article } from "../data/insights";

// Phase 2: swap import data modules for CMS client SDK fetches
// e.g. import { client } from './sanityClient';

export async function getSolutions(): Promise<Solution[]> {
  // Simulate network latency if desired
  return solutions;
}

export async function getSolutionBySlug(slug: string): Promise<Solution | undefined> {
  const allSolutions = await getSolutions();
  return allSolutions.find(s => s.slug === slug);
}

export async function getIndustries(): Promise<Industry[]> {
  return industries;
}

export async function getIndustryBySlug(slug: string): Promise<Industry | undefined> {
  const allIndustries = await getIndustries();
  return allIndustries.find(i => i.slug === slug);
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  return caseStudies;
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | undefined> {
  const allCaseStudies = await getCaseStudies();
  return allCaseStudies.find(c => c.slug === slug);
}

export async function getInsights(): Promise<Article[]> {
  return insights;
}

export async function getInsightBySlug(slug: string): Promise<Article | undefined> {
  const allInsights = await getInsights();
  return allInsights.find(article => article.slug === slug);
}

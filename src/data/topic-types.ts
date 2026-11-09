import type { TopicGroup, Priority, SourceKey } from './topic-slugs';

export interface TopicSection {
  h2: string;
  paragraphs: string[];
  bullets?: string[];
  note?: string;
}

export interface TopicFaq {
  q: string;
  a: string;
}

export interface TopicContent {
  slug: string;
  group: TopicGroup;
  priority: Priority;
  /** Short label used in the homepage cluster and related-link cards. */
  navTitle: string;
  /** One-sentence summary shown in the cluster. */
  card: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  sections: TopicSection[];
  faqs: TopicFaq[];
  /** Slugs of other published topics; must exist in TOPIC_SLUGS. */
  related: string[];
  sources: SourceKey[];
  /** Named places mentioned by the article, used in Article JSON-LD. */
  mentions?: string[];
  /** Optional Google Maps search query for the page's map link. */
  mapsQuery?: string;
  /** Optional hero image; only set where a real, honestly-captioned photo exists. */
  heroImage?: { src: string; alt: string; caption: string };
  /** Optional Place schema for a specific landmark the page describes. */
  placeName?: string;
  placeDesc?: string;
}

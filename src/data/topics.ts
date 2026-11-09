import type { TopicContent } from './topic-types';
import { TOPIC_GROUP_ORDER, type TopicGroup } from './topic-slugs';
import { practicoTopics } from './topics/practico';
import { transporteTopics } from './topics/transporte';
import { historiaTopics } from './topics/historia';
import { cercaTopics } from './topics/cerca';
import { comerTopics } from './topics/comer';
import { rutasTopics } from './topics/rutas';

/** All 36 published Spanish guide pages, ordered by editorial group. */
export const TOPICS: TopicContent[] = [
  ...practicoTopics,
  ...transporteTopics,
  ...historiaTopics,
  ...cercaTopics,
  ...comerTopics,
  ...rutasTopics
];

const topicMap = new Map(TOPICS.map((topic) => [topic.slug, topic]));

export function getTopic(slug: string): TopicContent | undefined {
  return topicMap.get(slug);
}

export function topicsByGroup(group: TopicGroup): TopicContent[] {
  return TOPICS.filter((topic) => topic.group === group);
}

export function groupedTopics(): { group: TopicGroup; topics: TopicContent[] }[] {
  return TOPIC_GROUP_ORDER.map((group) => ({ group, topics: topicsByGroup(group) }));
}

/** Related links are resolved against the published registry, so a stale slug never becomes a dead link. */
export function relatedTopics(topic: TopicContent): TopicContent[] {
  return topic.related
    .map((slug) => topicMap.get(slug))
    .filter((item): item is TopicContent => Boolean(item));
}

export {
  TOPIC_SLUGS,
  TOPIC_GROUP_ORDER,
  TOPIC_GROUP_LABELS,
  GROUP_HUB_LINKS,
  SOURCE_LINKS,
  CHECK_DATE,
  topicPath,
  isTopicPath
} from './topic-slugs';
export type { TopicGroup, Priority, SourceKey } from './topic-slugs';
export type { TopicContent, TopicSection, TopicFaq } from './topic-types';

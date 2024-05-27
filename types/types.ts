type ShortService = {
  name: string;
  picture: string;
  slug: string;
};

type ShortProject = ShortService & {
  timeline: string;
};

type ShortPerson = {
  firstName: string;
  lastName: string;
  mainRole: string;
  picture: string;
  slug: string;
};

type MenuLinks = Array<{
  path: string;
  name: string;
  submenu?: Array<{ path: string; name: string }>;
  showSubmenu?: boolean;
}>;

type TimelineEvent = {
  date: string;
  eventInfo: string;
  projectId: string;
  timelineEventId: string;
};

type Message = {
  id: number;
  role: string;
  content: string;
};

export type {
  ShortService,
  ShortProject,
  MenuLinks,
  Message,
  ShortPerson,
  TimelineEvent,
};

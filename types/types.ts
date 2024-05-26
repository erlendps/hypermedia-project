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

export type {
  ShortService,
  Service,
  ShortProject,
  MenuLinks,
  ShortPerson,
  TimelineEvent,
};

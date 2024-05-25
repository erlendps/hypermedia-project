type ShortService = {
  name: string;
  picture: string;
  slug: string;
};

type Service = ShortService & {
  description: string;
  availability: string;
  duration: string;
  otherInformation: string;
  personId: string;
};

type MenuLinks = Array<{
  path: string;
  name: string;
  submenu?: Array<{ path: string; name: string }>;
  showSubmenu?: boolean;
}>;

export type { ShortService, Service, MenuLinks };

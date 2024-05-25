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

export type { ShortService, Service };

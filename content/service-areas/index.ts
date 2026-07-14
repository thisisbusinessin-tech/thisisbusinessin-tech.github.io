export type ServiceAreaStatus = "active" | "coming-soon" | "not-listed";

export interface ServiceArea {
  city: string;
  state: string;
  status: ServiceAreaStatus;
  indexable: boolean;
  publicDescription?: string;
}

export const serviceAreas: ServiceArea[] = [];

export const serviceAreaMessage =
  "ApneTailor is expanding to more cities across India. Specific service availability will be listed here once publicly approved.";

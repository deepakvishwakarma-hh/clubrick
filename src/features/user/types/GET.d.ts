export interface Main {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: Date;
  updatedAt: Date;
  birthday: Date;
  country: string;
  gdpr: boolean;
  firstname: string;
  lastname: string;
  bio: string;
  image: string;
  professional_qualifications: ProfessionalQualifications;
  alchoholic_interests: AlchoholicInterests;
  banner: string;
  work: Work;
  education: Education;
}

export interface AlchoholicInterests {
  beer: Beer;
  sake: Sake;
  wine: Wine;
  spirit: Spirit;
  toggles: Toggles;
}

export interface Beer {
  body: string;
  foam: string;
  type: string;
  aromas: string;
  finish: string;
  countries: string;
  bitterness: string;
  effervescence: string;
  noseIntensity: string;
  flavorIntensity: string;
}

export interface Sake {
  body: string;
  type: string;
  umami: string;
  aromas: string;
  finish: string;
  acidity: string;
  alcohol: string;
  softness: string;
  countries: string;
  sweetness: string;
  noseIntensity: string;
  flavorIntensity: string;
}

export interface Spirit {
  type: string;
  aromas: string;
  finish: string;
  countries: string;
  sweetness: string;
  noseIntensity: string;
  flavorIntensity: string;
}

export interface Toggles {
  beer: boolean;
  sake: boolean;
  wine: boolean;
  spirit: boolean;
}

export interface Wine {
  body: string;
  type: string[];
  aromas: string;
  finish: string;
  acidity: string;
  alcohol: string;
  regions: string;
  tannins: string;
  sapidity: string;
  softness: string;
  countries: string;
  sweetness: string;
  effervescence: string;
  noseIntensity: string;
  flavourIntensity: string;
}

export interface Education {
  id: number;
  school: string;
  year: number;
}

export interface ProfessionalQualifications {}

export interface Work {
  id: number;
  job_title: string;
  company_name: string;
  start_date: Date;
}

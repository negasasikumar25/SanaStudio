export interface Topic {
  name: string;
  image: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  duration: string;
  price: number;
  discountPrice?: number;
  image: string;
  icon: string;
  topics: Topic[];
  benefits: string[];
  schedule: string;
  batchSize: string;
  level: string;
  certificateIncluded: boolean;
  materialsIncluded: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  specialization: string;
}

export interface Step {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  number: string;
  label: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  course: string;
  review: string;
  rating: number;
  image: string;
}

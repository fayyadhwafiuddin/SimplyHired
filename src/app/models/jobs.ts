export interface Jobs {
  img: string;
  company_name: string;
  job_position: string;
  location: string;
  category: string,
  qualification: string;
  salary_from: number;
  salary_to: number;
  requirement: string;
  candidate_types : string;
  district: string;
  post_duration_from: Date;
  post_duration_to: Date;
}

export interface Job {
  img: string;
  company_name: string;
  job_position: string;
  location: string;
  category: string,
  qualification: string;
  salary_from: number;
  salary_to: number;
  requirement: string;
  candidate_types : string;
  district: string;
  post_duration_from: Date;
  post_duration_to: Date;
}

export interface userprofile {
  email: string;
  user: string;
  phone: string;
  password: string;
  role: string,
}
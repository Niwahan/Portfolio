
export interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  watchers_count: number;
  language: string | null;
  fork: boolean;
  created_at: string;
  updated_at: string;
  topics: string[];
}

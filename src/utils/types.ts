export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
}

export interface LoginResponse {
  user: User;
  token: string;
}

export interface RegisterResponse {
  status: string;
  message?: string;
  error?: string;
}

export interface YoutubeSharingItem {
  id: number;
  title: string;
  url: string;
  description: string;
  image_url: string;
  created_at: string;
  updated_at: string;
}

export interface PageMeta {
  current_page: number;
  total_pages: number;
  total_count: number;
}

export interface YoutubeSharingResponse {
  data: YoutubeSharingItem[];
  meta: PageMeta;
}

export interface Main {
  data: Datum[];
  meta: Meta;
}

export interface POST_API_INTERFACE {
  id: number;
  attributes: DatumAttributes;
}
    
export interface DatumAttributes {
  caption: string;
  content: [{
    type:"video" | "image",
    data: string | string[]
  }];
  shares: null;
  boosted_post: boolean;
  mentions: string[];
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  activity_feeling: ActivityFeeling;
  hashtags: Hashtag[];
  likes: any[];
  user: User;
  views: any[];
  createdAtPost: string;
  audience: string
}

export interface ActivityFeeling {
  id: number;
  content: string;
  type: string;
}

export interface Hashtag {
  id: number;
  hashtag: string;
}

export interface User {
  data: Data;
}

export interface Data {
  id: number;
  attributes: DataAttributes;
}

export interface DataAttributes {
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
  firstname: null;
  lastname: null;
  bio: null;
  image: null;
  professional_qualifications: null;
  alchoholic_interests: null;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

// Update Likes Interface

export interface LIKE_API_INTERFACE {
  likes: LIKE_INTERFACE[];
  postId: number;
}

export interface LIKE_INTERFACE {
  type: string;
  user_id: number;
}

export interface AUDIENCE_INTERFACE {
  postId: number;
  audience: string;
}

export interface VIEWS_API_INTERFACE {
  views: {
    user_id: number;
  }[];
  postId: number;
}

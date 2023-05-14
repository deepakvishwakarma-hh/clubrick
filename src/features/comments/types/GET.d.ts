export interface Main {
  data: Datum[];
  meta: Meta;
}

export interface Datum {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  createdAt: Date;
  content: string;
  updatedAt: Date;
  publishedAt: Date;
  blocked: null;
  author: Author;
  likes: Like[];
}

export interface Author {
  id: number;
  username: string;
  user_id: number;
  avatar: string;
  email: string;
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
export interface Like {
  id: number;
  user_id: number;
}

/** @format */
export interface CreateCommentType {
  author: Author;
  content: string;
  post: number;
}

export interface AuthorType {
  id: string;
  name: string;
  email: string;
}

export interface CreateSubCommentType {
  author: Author;
  content: string;
  threadOf: number;
}

export interface Main {
  id: number;
  content: string;
  blocked: boolean;
  blockedThread: boolean;
  blockReason: null;
  isAdminComment: null;
  removed: null;
  approvalStatus: string;
  createdAt: Date;
  updatedAt: Date;
  gotThread: boolean;
  author: Author;
  children: any[];
}

export interface Author {
  user_id: string | number;
  username: string;
  email: string;
  avatar?: null | string;
}

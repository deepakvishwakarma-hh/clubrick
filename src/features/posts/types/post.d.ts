/** @format */

export type POST_UPDATE = {
  caption?: string | undefined;
  content?: string[] | undefined;
  mentions?:
    | {
        image?: string | undefined;
        video?: string | undefined;
      }
    | undefined;
  shares?: string | undefined;
  audience?: string | undefined;
  hashtags?: {}[] | undefined;
  likes?: ({} | undefined)[] | undefined;
  activity_feeling?: {}[] | undefined;
};

export type CREATE_POST = {
  user: number;
  boosted_post: boolean;
  caption?: string | undefined;
  content?: any;
  mentions?: any;
  hashtags?:
    | {
        hashtag: string;
      }[]
    | undefined;
  activity_feeling?:
    | {
        type: string;
        content?: string | undefined;
      }
    | undefined;
  audience?: string;
  createdAtPost: string;
  category:string
};

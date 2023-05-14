/** @format */

import { createFormContext } from "@mantine/form";

interface PostFormValues {
  caption: string;
  file: File[];
  audience: "public" | "private" | "friends";
  // category: "Wines"| "Beers"| "Spirits"| "Sake"| "News & Events"| "Misc"
  category: string;
}

// You can give context variables any name
export const [PostFormProvider, usePostFormContext, usePostForm] =
  createFormContext<PostFormValues>();

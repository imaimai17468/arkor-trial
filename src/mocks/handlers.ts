import { GET, POST } from "@app/api/notes/route";
import { http } from "msw";

const notesUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/notes`;

export const handlers = [
  http.get(notesUrl, () => GET()),
  http.post(notesUrl, ({ request }) => POST(request)),
];

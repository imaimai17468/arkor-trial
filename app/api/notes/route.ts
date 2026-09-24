import { noteDraftSchema } from "@app/_note/api/note";
import { addNote, listNotes } from "./store";

export const dynamic = "force-dynamic";

export const GET = (): Response => Response.json(listNotes());

export const POST = async (request: Request): Promise<Response> => {
  const draft = noteDraftSchema.safeParse(await request.json());
  if (!draft.success) {
    return Response.json({ message: draft.error.message }, { status: 422 });
  }
  return Response.json(addNote(draft.data), { status: 201 });
};

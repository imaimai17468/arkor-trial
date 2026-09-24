import { noteListSchema, noteSchema } from "@app/_note/api/note";
import { describe, expect, it } from "vitest";
import { GET, POST } from "./route";

const postJson = (body: unknown): Request =>
  new Request("http://localhost/api/notes", {
    method: "POST",
    body: JSON.stringify(body),
  });

const rowWithoutTimestamp = noteSchema.omit({ createdAt: true });

describe("GET /api/notes", () => {
  it("answers 200 with the seeded rows", async () => {
    const response = GET();

    expect({
      status: response.status,
      body: noteListSchema.parse(await response.json()),
    }).toStrictEqual({
      status: 200,
      body: [
        {
          id: "note-1",
          title: "スタック選定の前提",
          body: "MCP もプラグインも無い環境で回ることを条件にする。",
          createdAt: "2026-01-06T09:00:00.000Z",
        },
      ],
    });
  });
});

describe("POST /api/notes", () => {
  it("answers 201 with the stored row where the draft is valid", async () => {
    const response = await POST(postJson({ title: "計測", body: "" }));

    expect({
      status: response.status,
      body: rowWithoutTimestamp.parse(await response.json()),
    }).toStrictEqual({
      status: 201,
      body: { id: "note-2", title: "計測", body: "" },
    });
  });

  it("answers 422 where the title is empty", async () => {
    const response = await POST(postJson({ title: "", body: "" }));

    expect(response.status).toBe(422);
  });
});

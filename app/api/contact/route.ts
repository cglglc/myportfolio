import { prisma } from "../../../src/lib/prisma";

export async function POST(req: Request) {
  try {
    const { name, email, content } = await req.json();

    if (!name || !email || !content) {
      return Response.json({ error: "Missing fields" }, { status: 400 });
    }

    await prisma.message.create({
      data: {
        name,
        email,
        content,
      },
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact API error:", error);

    return Response.json(
      { error: "Contact request failed" },
      { status: 500 }
    );
  }
}

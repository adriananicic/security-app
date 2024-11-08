import prisma from "@/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { content } = await request.json();

  try {
    const createdConmment = await prisma.comment.create({
      data: { content },
    });
    if (createdConmment) return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: (error as Error).message,
    });
  }
}

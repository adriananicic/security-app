import prisma from "@/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { content } = await request.json();

  try {
    const createdComment = await prisma.comment.create({
      data: { content },
    });

    if (createdComment) {
      return NextResponse.json(
        { success: true, comment: createdComment },
        { status: 201, headers: { "Cache-Control": "no-store" } } // Prevent caching
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: (error as Error).message || "Failed to create comment",
      },
      { status: 500, headers: { "Cache-Control": "no-store" } } // Prevent caching
    );
  }
}

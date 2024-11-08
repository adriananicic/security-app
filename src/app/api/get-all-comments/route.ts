import prisma from "@/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const comments = await prisma.comment.findMany();
    return NextResponse.json({ success: true, comments });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: (error as Error).message,
    });
  }
}

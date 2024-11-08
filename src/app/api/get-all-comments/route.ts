import prisma from "@/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const comments = await prisma.comment.findMany();

    return NextResponse.json(
      { success: true, comments },
      {
        status: 200,
        headers: {
          "Cache-Control":
            "no-store, no-cache, must-revalidate, proxy-revalidate",
          Pragma: "no-cache",
          Expires: "0",
          "Surrogate-Control": "no-store",
          "x-vercel-cache": "MISS",
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: (error as Error).message,
      },
      {
        status: 500,
        headers: {
          "Cache-Control":
            "no-store, no-cache, must-revalidate, proxy-revalidate",
          Pragma: "no-cache",
          Expires: "0",
          "Surrogate-Control": "no-store",
          "x-vercel-cache": "MISS",
        },
      }
    );
  }
}

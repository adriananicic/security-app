import prisma from "@/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  const { username, password, isSensitiveDataExposed } = await request.json();

  try {
    let storedPassword;

    if (isSensitiveDataExposed) {
      storedPassword = password;
    } else {
      storedPassword = await bcrypt.hash(password, 10);
    }

    const createdConmment = await prisma.user.create({
      data: { password: storedPassword, username },
    });
    if (createdConmment) return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: (error as Error).message,
    });
  }
}

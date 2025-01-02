import { NextResponse } from "next/server";
import connectToDatabase from "../../../../utils/db";
import User from "../../../../models/User";

export const GET = async (req) => {
  await connectToDatabase();

  try {
    const searchParams = req.nextUrl.searchParams;
    const username=searchParams.get("username");
    const user = await User.findOne({ username });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return NextResponse.json(
      { message: "Failed to fetch profile" },
      { status: 500 }
    );
  }
};
import { NextResponse } from 'next/server';
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { desc, eq } from "drizzle-orm";

export async function GET() {
    try {
        const user = await currentUser();

        if (!user?.primaryEmailAddress?.emailAddress) {
            return NextResponse.json({ error: 'User not authenticated' }, { status: 401 });
        }

        const historyData = await db.select().from(AIOutput)
            .where(eq(AIOutput.createdBy, user.primaryEmailAddress.emailAddress))
            .orderBy(desc(AIOutput.id));


        return NextResponse.json(historyData);
    } catch (error) {
        console.error('Error fetching history:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
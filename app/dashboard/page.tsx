/**
    * @description      : 
    * @author           : rrome
    * @group            : 
    * @created          : 17/02/2025 - 09:00:22
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 17/02/2025
    * - Author          : rrome
    * - Modification    : 
**/
// app/(app)/dashboard/page.tsx
import { Navbar } from "@/components/navigation/Navbar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function DashboardPage() {
    const userId = auth();

    if (!userId) {
        redirect("/sign-in");
    }

    return (
        <div>
            <Navbar />
            <main className="p-4">
                <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
                <p>Welcome to your dashboard!</p>
            </main>
        </div>
    );
}
/**
    * @description      : 
    * @author           : rrome
    * @group            : 
    * @created          : 17/02/2025 - 07:17:54
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 17/02/2025
    * - Author          : rrome
    * - Modification    : 
**/
// app/(app)/admin/layout.tsx
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const user = await currentUser();
    if (user?.publicMetadata?.role !== "admin") {
        redirect("/dashboard");
    }
    return <>{children}</>;
}
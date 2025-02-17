/**
    * @description      : 
    * @author           : rrome
    * @group            : 
    * @created          : 17/02/2025 - 07:07:16
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 17/02/2025
    * - Author          : rrome
    * - Modification    : 
**/
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";
import authConfig from "./convex/auth.config";

const isProtectedRoute = createRouteMatcher(["/server"]);

export default clerkMiddleware(async (auth, req) => {
  const PUBLIC_ROUTES = ["/", "/api/public"];
  if (auth: { protect: () => any; userId: any; user: { publicMetadata: { role: string; }; }; }, req: NextRequest, evt: any) {
    // Check user role and redirect if necessary
    if (isProtectedRoute(req)) {
      await auth.protect();
    }
    if (auth.userId && auth.user?.publicMetadata?.role) {
      const role = auth.user.publicMetadata.role as string;
      if (req.nextUrl.pathname.startsWith("/admin") && role !== "admin") {
        return new Response("Unauthorized", { status: 403 });
      }
    }
  }
}

const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
export { config }
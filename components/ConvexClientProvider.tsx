/**
    * @description      : 
    * @author           : rrome
    * @group            : 
    * @created          : 17/02/2025 - 09:58:58
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 17/02/2025
    * - Author          : rrome
    * - Modification    : 
**/
/**
 * Provides a context for Convex client with authentication support.
 * It wraps the children components with ConvexProviderWithClerk.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components to be rendered.
 * @returns {JSX.Element} The rendered ConvexProviderWithClerk component.
 * @throws {Error} Throws an error if ConvexProviderWithClerk fails to initialize.
 */

"use client";
import React from "react";
import { ReactNode } from "react";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { useAuth } from "@clerk/nextjs";
const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export default function ConvexClientProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      {children}
    </ConvexProviderWithClerk>
  );
}

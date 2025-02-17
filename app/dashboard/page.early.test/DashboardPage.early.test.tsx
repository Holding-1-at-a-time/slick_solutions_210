// Unit tests for: DashboardPage

import React from "react";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import DashboardPage from "../page";

// app/(app)/dashboard/__tests__/page.test.tsx
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

// app/(app)/dashboard/__tests__/page.test.tsx
// Mock the Navbar component
jest.mock("@/components/navigation/Navbar", () => ({
  Navbar: () => <div>Mocked Navbar</div>,
}));

// Mock the auth function
jest.mock("@clerk/nextjs/server", () => ({
  auth: jest.fn(),
}));

// Mock the redirect function
jest.mock("next/navigation", () => ({
  redirect: jest.fn(),
}));

describe("DashboardPage() DashboardPage method", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Happy Path Tests
  describe("Happy Paths", () => {
    it("should render the DashboardPage with Navbar and welcome message when user is authenticated", () => {
      // Arrange: Mock the auth function to return a user ID
      (auth as jest.Mock).mockReturnValue("user-id");

      // Act: Render the DashboardPage component
      const { getByText } = render(<DashboardPage />);

      // Assert: Check if the Navbar and welcome message are rendered
      expect(getByText("Mocked Navbar")).toBeInTheDocument();
      expect(getByText("Dashboard")).toBeInTheDocument();
      expect(getByText("Welcome to your dashboard!")).toBeInTheDocument();
    });
  });

  // Edge Case Tests
  describe("Edge Cases", () => {
    it("should redirect to /sign-in when user is not authenticated", () => {
      // Arrange: Mock the auth function to return null (unauthenticated)
      (auth as jest.Mock).mockReturnValue(null);

      // Act: Render the DashboardPage component
      render(<DashboardPage />);

      // Assert: Check if the redirect function is called with the correct path
      expect(redirect).toHaveBeenCalledWith("/sign-in");
    });
  });
});

// End of unit tests for: DashboardPage

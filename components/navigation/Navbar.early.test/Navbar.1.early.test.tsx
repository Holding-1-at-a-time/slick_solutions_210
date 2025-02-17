// Unit tests for: Navbar

import { Navbar } from "../Navbar";
import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

// Mocking the SignOutButton and Link components
jest.mock("@clerk/nextjs", () => ({
  SignOutButton: () => <button>Sign Out</button>,
}));

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => <a href={href}>{children}</a>,
}));

describe("Navbar() Navbar method", () => {
  // Happy Path Tests
  describe("Happy Paths", () => {
    it("should render the Navbar with the correct title", () => {
      // Test to ensure the Navbar renders with the correct title
      render(<Navbar />);
      const titleElement = screen.getByText("Slick Solutions");
      expect(titleElement).toBeInTheDocument();
    });

    it("should render the SignOutButton", () => {
      // Test to ensure the SignOutButton is rendered
      render(<Navbar />);
      const signOutButton = screen.getByText("Sign Out");
      expect(signOutButton).toBeInTheDocument();
    });

    it("should have a link to the dashboard", () => {
      // Test to ensure the link to the dashboard is present
      render(<Navbar />);
      const linkElement = screen.getByText("Slick Solutions").closest("a");
      expect(linkElement).toHaveAttribute("href", "/dashboard");
    });
  });

  // Edge Case Tests
  describe("Edge Cases", () => {
    it("should render without crashing", () => {
      // Test to ensure the Navbar renders without crashing
      const { container } = render(<Navbar />);
      expect(container).toBeInTheDocument();
    });

    // Additional edge cases can be added here as needed
  });
});

// End of unit tests for: Navbar

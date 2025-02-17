// Unit tests for: Navbar

import { Navbar } from "../Navbar";

// Navbar.test.tsx
import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

// Navbar.test.tsx
// Mock the SignOutButton and Link components
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
    it("should render the Navbar with the correct structure", () => {
      // Test to ensure the Navbar renders with the expected elements
      render(<Navbar />);
      expect(screen.getByText("Slick Solutions")).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: /sign out/i }),
      ).toBeInTheDocument();
    });

    it("should have a link to the dashboard", () => {
      // Test to ensure the link to the dashboard is present and correct
      render(<Navbar />);
      const linkElement = screen.getByText("Slick Solutions").closest("a");
      expect(linkElement).toHaveAttribute("href", "/dashboard");
    });
  });

  // Edge Case Tests
  describe("Edge Cases", () => {
    it("should render without crashing when no props are passed", () => {
      // Test to ensure the Navbar renders without any props
      render(<Navbar />);
      expect(screen.getByText("Slick Solutions")).toBeInTheDocument();
    });

    it("should handle unexpected children gracefully", () => {
      // Test to ensure the Navbar can handle unexpected children
      const UnexpectedChild = () => <div>Unexpected Child</div>;
      render(
        <nav>
          <Navbar />
          <UnexpectedChild />
        </nav>,
      );
      expect(screen.getByText("Unexpected Child")).toBeInTheDocument();
    });
  });
});

// End of unit tests for: Navbar

// Unit tests for: ConvexClientProvider

import "@testing-library/jest-dom";
import ConvexClientProvider from "../ConvexClientProvider";

import { render } from "@testing-library/react";
import React from "react";

// Mocking dependencies
jest.mock("convex/react", () => ({
  ConvexReactClient: jest.fn(),
}));

jest.mock("convex/react-clerk", () => ({
  ConvexProviderWithClerk: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

jest.mock("@clerk/nextjs", () => ({
  useAuth: jest.fn(),
}));

// MockReactNode type definition
type MockReactNode =
  | string
  | number
  | boolean
  | null
  | undefined
  | MockReactNode[];

// Test suite for ConvexClientProvider
describe("ConvexClientProvider() ConvexClientProvider method", () => {
  let mockChildren: MockReactNode;

  beforeEach(() => {
    mockChildren = "Test Child" as any;
  });

  describe("Happy paths", () => {
    it("should render children within ConvexProviderWithClerk", () => {
      // Arrange

      // Act
      const { getByText } = render(
        <ConvexClientProvider>{mockChildren}</ConvexClientProvider>,
      );

      // Assert
      expect(getByText("Test Child")).toBeInTheDocument();
    });
  });

  describe("Edge cases", () => {
    it("should handle null children gracefully", () => {
      // Arrange
      mockChildren = null as any;

      // Act
      const { container } = render(
        <ConvexClientProvider>{mockChildren}</ConvexClientProvider>,
      );

      // Assert
      expect(container.firstChild).toBeEmptyDOMElement();
    });

    it("should handle undefined children gracefully", () => {
      // Arrange
      mockChildren = undefined as any;

      // Act
      const { container } = render(
        <ConvexClientProvider>{mockChildren}</ConvexClientProvider>,
      );

      // Assert
      expect(container.firstChild).toBeEmptyDOMElement();
    });
  });
});

// End of unit tests for: ConvexClientProvider

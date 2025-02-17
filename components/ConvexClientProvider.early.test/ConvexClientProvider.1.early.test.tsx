// Unit tests for: ConvexClientProvider

import React from "react";
import { ConvexReactClient } from "convex/react";
import ConvexClientProvider from "../ConvexClientProvider";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

// Mocking dependencies
jest.mock("convex/react", () => ({
  ConvexReactClient: jest.fn(),
}));

jest.mock("convex/react-clerk", () => ({
  ConvexProviderWithClerk: jest.fn(({ children }) => <div>{children}</div>),
}));

jest.mock("@clerk/nextjs", () => ({
  useAuth: jest.fn(),
}));

// MockReactNode type to simulate ReactNode behavior
type MockReactNode = {
  type: string;
  props: Record<string, any>;
  children: MockReactNode[];
};

// Helper function to create a mock ReactNode
const createMockReactNode = (
  type: string,
  props: Record<string, any> = {},
  children: MockReactNode[] = [],
): MockReactNode => ({
  type,
  props,
  children,
});

describe("ConvexClientProvider() ConvexClientProvider method", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Happy Path Tests
  it("should render children within ConvexProviderWithClerk", () => {
    // Test description: Ensure that the ConvexClientProvider renders its children correctly within the ConvexProviderWithClerk component.
    const mockChildren = createMockReactNode(
      "div",
      { className: "child" },
      [],
    ) as any;
    const { container } = render(
      <ConvexClientProvider>{mockChildren}</ConvexClientProvider>,
    );

    expect(container.querySelector(".child")).toBeInTheDocument();
  });

  it("should initialize ConvexReactClient with the correct URL", () => {
    // Test description: Verify that ConvexReactClient is initialized with the correct environment URL.
    const mockChildren = createMockReactNode("div") as any;
    render(<ConvexClientProvider>{mockChildren}</ConvexClientProvider>);

    expect(ConvexReactClient).toHaveBeenCalledWith(
      process.env.NEXT_PUBLIC_CONVEX_URL,
    );
  });

  // Edge Case Tests
  it("should handle missing children gracefully", () => {
    // Test description: Ensure that the ConvexClientProvider can handle cases where no children are provided.
    const { container } = render(
      <ConvexClientProvider>{null as any}</ConvexClientProvider>,
    );

    expect(container.firstChild).toBeNull();
  });

  it("should handle undefined NEXT_PUBLIC_CONVEX_URL gracefully", () => {
    // Test description: Verify that the ConvexClientProvider handles cases where NEXT_PUBLIC_CONVEX_URL is undefined.
    const originalEnv = process.env.NEXT_PUBLIC_CONVEX_URL;
    delete process.env.NEXT_PUBLIC_CONVEX_URL;

    const mockChildren = createMockReactNode("div") as any;
    expect(() =>
      render(<ConvexClientProvider>{mockChildren}</ConvexClientProvider>),
    ).not.toThrow();

    process.env.NEXT_PUBLIC_CONVEX_URL = originalEnv;
  });
});

// End of unit tests for: ConvexClientProvider

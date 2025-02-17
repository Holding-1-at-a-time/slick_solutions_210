// Unit tests for: cn

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { cn } from "../utils";

// Import necessary modules and functions

// Import necessary modules and functions
// Mock the clsx and twMerge functions
jest.mock("clsx", () => ({
  clsx: jest.fn(),
}));

jest.mock("tailwind-merge", () => ({
  twMerge: jest.fn(),
}));

// Define the MockClassValue type to simulate ClassValue
type MockClassValue =
  | string
  | number
  | bigint
  | null
  | boolean
  | undefined
  | MockClassArray
  | MockClassDictionary;

type MockClassArray = MockClassValue[];
type MockClassDictionary = { [key: string]: boolean };

// Initialize mock functions
const mockedClsx = jest.mocked(clsx);
const mockedTwMerge = jest.mocked(twMerge);

describe("cn() cn method", () => {
  beforeEach(() => {
    // Reset mocks before each test
    mockedClsx.mockReset();
    mockedTwMerge.mockReset();
  });

  // Happy path tests
  it("should merge class names correctly for string inputs", () => {
    // Arrange
    const input: MockClassValue[] = ["class1", "class2"] as any;
    mockedClsx.mockReturnValue("class1 class2" as any);
    mockedTwMerge.mockReturnValue("class1 class2" as any);

    // Act
    const result = cn(...input);

    // Assert
    expect(mockedClsx).toHaveBeenCalledWith(input);
    expect(mockedTwMerge).toHaveBeenCalledWith("class1 class2");
    expect(result).toBe("class1 class2");
  });

  it("should handle mixed types of inputs", () => {
    // Arrange
    const input: MockClassValue[] = ["class1", 0, null, "class2", false] as any;
    mockedClsx.mockReturnValue("class1 class2" as any);
    mockedTwMerge.mockReturnValue("class1 class2" as any);

    // Act
    const result = cn(...input);

    // Assert
    expect(mockedClsx).toHaveBeenCalledWith(input);
    expect(mockedTwMerge).toHaveBeenCalledWith("class1 class2");
    expect(result).toBe("class1 class2");
  });

  // Edge case tests
  it("should return an empty string for no inputs", () => {
    // Arrange
    const input: MockClassValue[] = [] as any;
    mockedClsx.mockReturnValue("" as any);
    mockedTwMerge.mockReturnValue("" as any);

    // Act
    const result = cn(...input);

    // Assert
    expect(mockedClsx).toHaveBeenCalledWith(input);
    expect(mockedTwMerge).toHaveBeenCalledWith("");
    expect(result).toBe("");
  });

  it("should handle undefined and null inputs gracefully", () => {
    // Arrange
    const input: MockClassValue[] = [undefined, null] as any;
    mockedClsx.mockReturnValue("" as any);
    mockedTwMerge.mockReturnValue("" as any);

    // Act
    const result = cn(...input);

    // Assert
    expect(mockedClsx).toHaveBeenCalledWith(input);
    expect(mockedTwMerge).toHaveBeenCalledWith("");
    expect(result).toBe("");
  });

  it("should handle complex nested arrays and objects", () => {
    // Arrange
    const input: MockClassValue[] = [
      "class1",
      ["class2", { class3: true, class4: false }],
      { class5: true },
    ] as any;
    mockedClsx.mockReturnValue("class1 class2 class3 class5" as any);
    mockedTwMerge.mockReturnValue("class1 class2 class3 class5" as any);

    // Act
    const result = cn(...input);

    // Assert
    expect(mockedClsx).toHaveBeenCalledWith(input);
    expect(mockedTwMerge).toHaveBeenCalledWith("class1 class2 class3 class5");
    expect(result).toBe("class1 class2 class3 class5");
  });
});

// End of unit tests for: cn

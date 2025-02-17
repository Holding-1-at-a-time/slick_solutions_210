/**
    * @description      : 
    * @author           : rrome
    * @group            : 
    * @created          : 17/02/2025 - 09:40:24
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 17/02/2025
    * - Author          : rrome
    * - Modification    : 
**/
// Unit tests for: cn

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { cn } from "../utils";

// Import necessary modules

// Import necessary modules
// Mock ClassValue type
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

// Mock implementations
jest.mock("clsx", () => ({
  clsx: jest.fn(),
}));

jest.mock("tailwind-merge", () => ({
  twMerge: jest.fn(),
}));

describe("cn() cn method", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Happy path tests
  it("should merge class names correctly for string inputs", () => {
    // Arrange
    const mockInputs: MockClassValue[] = ["class1", "class2"];
    jest.mocked(clsx).mockReturnValue("class1 class2" as any);
    jest.mocked(twMerge).mockReturnValue("class1 class2" as any);

    // Act
    const result = cn(...(mockInputs as any));

    // Assert
    expect(clsx).toHaveBeenCalledWith(mockInputs as any);
    expect(twMerge).toHaveBeenCalledWith("class1 class2" as any);
    expect(result).toBe("class1 class2");
  });

  it("should handle numeric inputs correctly", () => {
    // Arrange
    const mockInputs: MockClassValue[] = [1, 2];
    jest.mocked(clsx).mockReturnValue("1 2" as any);
    jest.mocked(twMerge).mockReturnValue("1 2" as any);

    // Act
    const result = cn(...(mockInputs as any));

    // Assert
    expect(clsx).toHaveBeenCalledWith(mockInputs as any);
    expect(twMerge).toHaveBeenCalledWith("1 2" as any);
    expect(result).toBe("1 2");
  });

  // Edge case tests
  it("should return an empty string for null and undefined inputs", () => {
    // Arrange
    const mockInputs: MockClassValue[] = [null, undefined];
    jest.mocked(clsx).mockReturnValue("" as any);
    jest.mocked(twMerge).mockReturnValue("" as any);

    // Act
    const result = cn(...(mockInputs as any));

    // Assert
    expect(clsx).toHaveBeenCalledWith(mockInputs as any);
    expect(twMerge).toHaveBeenCalledWith("" as any);
    expect(result).toBe("");
  });

  it("should handle boolean inputs correctly", () => {
    // Arrange
    const mockInputs: MockClassValue[] = [true, false];
    jest.mocked(clsx).mockReturnValue("true false" as any);
    jest.mocked(twMerge).mockReturnValue("true false" as any);

    // Act
    const result = cn(...(mockInputs as any));

    // Assert
    expect(clsx).toHaveBeenCalledWith(mockInputs as any);
    expect(twMerge).toHaveBeenCalledWith("true false" as any);
    expect(result).toBe("true false");
  });

  it("should handle mixed inputs correctly", () => {
    // Arrange
    const mockInputs: MockClassValue[] = ["class1", 2, null, true];
    jest.mocked(clsx).mockReturnValue("class1 2 true" as any);
    jest.mocked(twMerge).mockReturnValue("class1 2 true" as any);

    // Act
    const result = cn(...(mockInputs as any));

    // Assert
    expect(clsx).toHaveBeenCalledWith(mockInputs as any);
    expect(twMerge).toHaveBeenCalledWith("class1 2 true" as any);
    expect(result).toBe("class1 2 true");
  });
});

// End of unit tests for: cn

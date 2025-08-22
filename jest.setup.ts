import "@testing-library/jest-dom";
import { ReactNode } from "react";

jest.mock("next/navigation", () => {
  const push = jest.fn();
  const back = jest.fn();
  const replace = jest.fn();
  const forward = jest.fn();

  return {
    useRouter: () => ({ push, replace, back, forward, prefetch: jest.fn() }),
    redirect: jest.fn(),
  };
});

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ children }: { children: ReactNode }) => children,
}));

jest.mock("next/image", () => ({
  __esModule: true,
  default: () => null,
}));

afterEach(() => {
  jest.clearAllMocks();
});

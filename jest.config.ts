import type { Config } from "jest";
import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig: Config = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$":
      "<rootDir>/__mocks__/fileMock.js",
  },
  testMatch: ["**/?(*.)+(spec|test).(ts|tsx)"],
};

export default createJestConfig(customJestConfig);

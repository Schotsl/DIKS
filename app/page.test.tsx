import React from "react";
import Login from "@/app/page";

import userEvent from "@testing-library/user-event";

import { render, screen } from "@testing-library/react";

import * as nextNavigation from "next/navigation";

describe("Login page", () => {
  it("renders the form with inputs and button", () => {
    render(<Login />);

    expect(
      screen.getByRole("heading", { level: 2, name: /login/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /login with your account\./i,
      })
    ).toBeInTheDocument();

    expect(screen.getByPlaceholderText("john@doe.com")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("********")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  it("validates and shows errors on invalid submit", async () => {
    render(<Login />);

    await userEvent.click(screen.getByRole("button", { name: /login/i }));

    expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
    expect(
      await screen.findByText(/password must be at least 8 characters/i)
    ).toBeInTheDocument();
  });

  it("redirects on valid submit (throws redirect error)", async () => {
    render(<Login />);

    await userEvent.type(
      screen.getByPlaceholderText("john@doe.com"),
      "john@doe.com"
    );

    await userEvent.type(
      screen.getByPlaceholderText("********"),
      "supersecret"
    );

    await userEvent.click(screen.getByRole("button", { name: /login/i }));

    expect(nextNavigation.redirect).toHaveBeenCalledWith("/dashboard");
  });
});

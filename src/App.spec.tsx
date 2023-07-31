import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Test", () => {
	it("should render", () => {
		render(<App />);

		expect(screen.getByText("App")).toBeInTheDocument();
	});
});

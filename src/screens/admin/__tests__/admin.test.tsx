import { render, screen } from "@testing-library/react"
import AdminScreen from '../index';

describe("admin screen", () => {
    it("should render admin screen with default component", () => {
        render(<AdminScreen/>)

        expect(screen.getByTestId("admin-screen")).toBeInTheDocument();
    })
})
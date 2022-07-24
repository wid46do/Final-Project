import React from "react";
import { render, screen } from "@testing-library/react";
import Loginuser from "../components/Loginuser"

let getByTestId;

beforeEach(() => {
    const view = render(<Loginuser/>)

    getByTestId = view.getByTestId;
})

describe("UI Test", ()=>{
    test('Form login render with correct test', () => {
        const LoginEl = screen.getByTestId('header')
        expect(LoginEl.textContent).toBe('Masuk')
    })
})
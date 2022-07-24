import React from "react";
import { render, screen } from "@testing-library/react";
import Registeruser from "../components/Registeruser"

let getByTestId;

beforeEach(() => {
    const view = render(<Registeruser/>)

    getByTestId = view.getByTestId;
})

describe("UI Test", ()=>{
    test('Form register render with correct test', () => {
        const RegisEl = screen.getByTestId('header')
        expect(RegisEl.textContent).toBe('Daftar')
    })
})
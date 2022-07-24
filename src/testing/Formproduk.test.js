import React from "react";
import { render, screen } from "@testing-library/react";
import Formproduk from "../components/Formproduk"
import Login from "../pages/Login";

let getByTestId;

beforeEach(() => {
    const view = render(<Formproduk/>)

    getByTestId = view.getByTestId;
})

describe("UI Test", ()=>{
    test('Form label render with correct test', () => {
        const FormEl = screen.getByTestId('formLabel')
        expect(FormEl.textContent).toBe('Nama Produk')
    })
})

test("render page", ()=>{
    render(<Login/>)
})
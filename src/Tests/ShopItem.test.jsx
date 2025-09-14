import { vi,it,describe } from "vitest";
import { render, screen } from '@testing-library/react';
import { expect } from "vitest";
import { ShopItem } from "../components/Item";
import userEvent from "@testing-library/user-event";

describe("ShopItem component",()=>{
    const defaultProps = {
    img: "test-image.jpg",
    title: "Test Product",
    price: 10,
    handleAddToCart: vi.fn(),
  };
  it("handleAddToCart run when the Add To Cart Button is clicked",async()=>{
    render(<ShopItem {...defaultProps}/>)
    const user = userEvent.setup();
    const addToCartBtn=screen.getByText("Add To Cart")
    await user.click(addToCartBtn);
    expect(defaultProps.handleAddToCart).toHaveBeenCalled();  
  })
  it("increase input quantity when click + button",async()=>{
    render(<ShopItem {...defaultProps}/>)
    const user = userEvent.setup();
    const input=screen.getByRole("spinbutton");
    const incrementBtn = screen.getByText("+");
    await user.click(incrementBtn)
    expect(input.value).toBe("2")

  })
   it("decrease input quantity when click - button",async()=>{
    render(<ShopItem {...defaultProps}/>)
    const user = userEvent.setup();
    const input=screen.getByRole("spinbutton");
    const incrementBtn = screen.getByText("+");
    await user.click(incrementBtn)
    expect(input.value).toBe("2");
    const decrementBtn = screen.getByText("-");
    await user.click(decrementBtn)
    expect(input.value).toBe("1")

  })
})

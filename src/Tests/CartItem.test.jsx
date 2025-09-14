import { vi,it,describe } from "vitest";
import { render, screen } from '@testing-library/react';
import { expect } from "vitest";
import { CartItem } from "../components/Item";
import userEvent from "@testing-library/user-event";


describe("CartItem component",()=>{
    const defaultProps = {
    img: "test-image.jpg",
    title: "Test Product",
    price: 10,
    quantity: 2,
    handleRemove: vi.fn(),
    handleIncreaseQuantityInCart: vi.fn(),
    handleDecreaseQuantityInCart: vi.fn(),
    id: 1,
  };
  it("render item correctly",()=>{
    render(<CartItem {...defaultProps} />);
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
  })
  it("decrease quantity when click - button",async()=>{
    render(<CartItem {...defaultProps} />);
    const user = userEvent.setup();
    const decreaseBtn = screen.getByText("-");
    await user.click(decreaseBtn);
    expect(defaultProps.handleDecreaseQuantityInCart).toHaveBeenCalled();  
     
  })
  it("increase quantity when click + button",async ()=>{
    render(<CartItem {...defaultProps}/>);
    const user=userEvent.setup()
    const increaseBtn=screen.getByRole("button", {name: "+"});
    await user.click(increaseBtn);
    expect(defaultProps.handleIncreaseQuantityInCart).toHaveBeenCalled();
  })
  it("remove item",async()=>{
    render(<CartItem {...defaultProps}/>);
    const user=userEvent.setup()
    const removeImg = screen.getByAltText("remove-item");
    await user.click(removeImg);
     expect(defaultProps.handleRemove).toHaveBeenCalled();
  })
}) 
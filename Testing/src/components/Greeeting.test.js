import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Gretting";

describe("Greeting component", () => {
  test("renders 'Hello World' as a text", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //... nothing

    //Assert
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });
  test("renders 'It's good to see you' as text",()=>{
    //Arrange
    render(<Greeting/>)

    //Act 
    //... nothing

    //Assert
    const goodToSeeElement = screen.getByText("It's good to see you")
    expect(goodToSeeElement).toBeInTheDocument();
  })
  test("renders 'Changed!' as text",()=>{
    //Arrange
    render(<Greeting/>)

    //Act 
    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)

    //Assert
    const goodToSeeElement = screen.getByText("Changed",{exact: false})
    expect(goodToSeeElement).toBeInTheDocument();
  })
  test("not renders 'It's good to see you' as text",()=>{
    //Arrange
    render(<Greeting/>)

    //Act 
    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)

    //Assert
    const goodToSeeElement = screen.queryByText("It's good to see you")
    expect(goodToSeeElement).toBeNull();
  })
});

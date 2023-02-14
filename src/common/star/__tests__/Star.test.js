import renderer from "react-test-renderer";
import Star from "../Star";

it("should render selected star", () => {
  const component = renderer.create(<Star selected />);
  expect(component.toJSON()).toMatchSnapshot();
});

it("should render unselected star", () => {
  const component = renderer.create(<Star />);
  expect(component.toJSON()).toMatchSnapshot();
});

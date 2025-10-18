import image from "../../assets/images/image-omelette.jpeg";
import {
  Heading,
  Image,
  Imagecontainer,
  Innercontainer,
  Maincontainer,
  ProductDescription,
  ProductName,
  Textcontainer,
  Line,
} from "./styles";
import Preparation from "./Preparation";
import Ingredients from "./Ingredients";
import Instruction from "./Instruction";
import Nutrition from "./Nutrition";
const Main = () => {
  return (
    <Maincontainer>
      <Innercontainer>
        <Imagecontainer>
          <Image src={image} />
        </Imagecontainer>
        <Textcontainer>
          <Heading>
            <ProductName>Simple Omelette Recipe</ProductName>
            <ProductDescription>
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled with your choice of cheese, vegetables, or meats.
            </ProductDescription>
          </Heading>
          <Preparation />
          <Ingredients />
          <Line />
          <Instruction />
          <Line />
          <Nutrition />
        </Textcontainer>
      </Innercontainer>
    </Maincontainer>
  );
};

export default Main;

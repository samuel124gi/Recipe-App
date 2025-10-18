import image from "../../assets/images/image-omelette.jpeg";
import {
  Heading,
  Image,
  ImageContainer,
  InnerContainer,
  MainContainer,
  ProductDescription,
  ProductName,
  TextContainer,
  Line,
} from "./styles";
import Preparation from "./Preparation";
import Ingredients from "./Ingredients";
import Instruction from "./Instruction";
import Nutrition from "./Nutrition";
const Main = () => {
  return (
    <MainContainer>
      <InnerContainer>
        <ImageContainer>
          <Image src={image} />
        </ImageContainer>
        <TextContainer>
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
        </TextContainer>
      </InnerContainer>
    </MainContainer>
  );
};

export default Main;

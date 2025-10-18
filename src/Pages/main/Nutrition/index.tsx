import {
  Text,
  NutritionContainer,
  NutritionHeading,
  Line,
  Container,
  Values,
} from "./styles";
const Nutrition = () => {
  return (
    <NutritionContainer>
      <NutritionHeading>Nutrition</NutritionHeading>
      <Text>
        The table below shows nutritional values per serving without the
        additional fillings.
      </Text>
      <Container>
        <Text>Calories</Text>
        <Values>277kcal</Values>
      </Container>
      <Line></Line>
      <Container>
        <Text>Carbs</Text>
        <Values>0g</Values>
      </Container>
      <Line></Line>{" "}
      <Container>
        <Text>Protein</Text>
        <Values>20g</Values>
      </Container>
      <Line></Line>{" "}
      <Container>
        <Text>Fat</Text>
        <Values>22g</Values>
      </Container>
    </NutritionContainer>
  );
};

export default Nutrition;

import {
  IngredientsContainer,
  IngredientHeading,
  IngredientList,
  IngredientListItem,
} from "./styles";

const Ingredients = () => {
  return (
    <IngredientsContainer>
      <IngredientHeading>Ingredients</IngredientHeading>
      <IngredientList>
        <IngredientListItem>2-3 large eggs</IngredientListItem>
        <IngredientListItem>Salt, to taste</IngredientListItem>
        <IngredientListItem>Pepper, to taste</IngredientListItem>
        <IngredientListItem>1 tablespoon of butter or oil</IngredientListItem>
        <IngredientListItem>
          Optional fillings: cheese, diced vegetables, cooked meats, herbs
        </IngredientListItem>
      </IngredientList>
    </IngredientsContainer>
  );
};

export default Ingredients;

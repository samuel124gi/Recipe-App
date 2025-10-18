import {
  Text,
  InstructionContainer,
  InstructionHeading,
  InstructiontList,
  InstructionsListItem,
} from "./styles";
const Instruction = () => {
  return (
    <InstructionContainer>
      <InstructionHeading>Instructions</InstructionHeading>
      <InstructiontList>
        <InstructionsListItem>
          Beat the eggs:{" "}
          <Text>
            In a bowl, beat the eggs with a pinch of salt and pepper until they
            are well mixed. You can add a tablespoon of water or milk for a
            fluffier texture.
          </Text>
        </InstructionsListItem>
        <InstructionsListItem>
          Heat the pan:{" "}
          <Text>
            Place a non-stick frying pan over medium heat and add butter or oil.
          </Text>
        </InstructionsListItem>
        <InstructionsListItem>
          Cook the omelette:{" "}
          <Text>
            Once the butter is melted and bubbling, pour in the eggs. Tilt the
            pan to ensure the eggs evenly coat the surface.
          </Text>
        </InstructionsListItem>
        <InstructionsListItem>
          Add fillings (optional):{" "}
          <Text>
            When the eggs begin to set at the edges but are still slightly runny
            in the middle, sprinkle your chosen fillings over one half of the
            omelette.
          </Text>
        </InstructionsListItem>
        <InstructionsListItem>
          Fold and serve:{" "}
          <Text>
            As the omelette continues to cook, carefully lift one edge and fold
            it over the fillings. Let it cook for another minute, then slide it
            onto a plate.
          </Text>
        </InstructionsListItem>
        <InstructionsListItem>
          Enjoy:{" "}
          <Text> Serve hot, with additional salt and pepper if needed.</Text>
        </InstructionsListItem>
      </InstructiontList>
    </InstructionContainer>
  );
};

export default Instruction;

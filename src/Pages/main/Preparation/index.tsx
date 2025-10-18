import {
  ListContainer,
  PreparationDescription,
  PreparationHeading,
  PreparationList,
  PreparationListItem,
  Text,
} from "./styles";

const Preparation = () => {
  return (
    <PreparationDescription>
      <PreparationHeading>Preparation time</PreparationHeading>
      <ListContainer>
        <PreparationList>
          <PreparationListItem>
            Total: <Text>Approximately 10 minutes</Text>
          </PreparationListItem>
          <PreparationListItem>
            Preparation: <Text>5 minut</Text>
          </PreparationListItem>
          <PreparationListItem>
            Cooking: <Text>5 minutes</Text>
          </PreparationListItem>
        </PreparationList>
      </ListContainer>
    </PreparationDescription>
  );
};

export default Preparation;

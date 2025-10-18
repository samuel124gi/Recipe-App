import styled from "@emotion/styled";
import colors from "../../../styles/color";

export const IngredientHeading = styled.h1`
  color: ${colors.primary02};
  font-weight: 400;
  font-size: 28px;
  line-height: 100%;
  font-family: Young Serif;
`;

export const Text = styled.span`
  color: ${colors.primary03};
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0%;
  font-weight: 400;
`;

export const IngredientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const IngredientList = styled.ul`
  padding: 0px 20px;
`;
export const IngredientListItem = styled.li`
  color: ${colors.primary03};
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0%;
  font-weight: 400;
`;

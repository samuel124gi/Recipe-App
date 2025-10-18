import styled from "@emotion/styled";
import colors from "../../../styles/color";

export const Text = styled.span`
  color: ${colors.secondary05};
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0%;
  font-weight: 400;
`;
export const NutritionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const NutritionHeading = styled.h1`
  color: ${colors.primary02};
  font-weight: 400;
  font-size: 28px;
  line-height: 100%;
  font-family: Young Serif;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-left: 20px;
  justify-content: center;
`;

export const Line = styled.hr`
  background-color: "#E3DDD7";
  height: 1px;
`;

export const Values = styled.p`
  color: ${colors.primary02};
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0%;
  font-weight: bold;
`;

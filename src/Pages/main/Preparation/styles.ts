import styled from "@emotion/styled";
import colors from "../../../styles/color";

export const PreparationHeading = styled.p`
  font-size: 20px;
  line-height: 100%;
  color: ${colors.secondary03};
  letter-spacing: 0%;
`;

export const ListContainer = styled.nav`
  padding: 0px 20px;
`;

export const PreparationListItem = styled.li`
  font-weight: bold;
  line-height: 150%;
  font-size: 16px;
  color: ${colors.secondary02};
`;

export const PreparationDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 16px;
  border-radius: 12px;
  background-color: ${colors.secondary01};
`;
export const PreparationList = styled.ul``;

export const Text = styled.span`
  color: ${colors.secondary05};
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0%;
  font-weight: 400;
`;

import styled from "@emotion/styled";
import colors from "../../../styles/color";

export const InstructionHeading = styled.h1`
  color: ${colors.primary02};
  font-weight: 400;
  font-size: 28px;
  line-height: 100%;
  font-family: Young Serif;
`;
export const InstructionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const InstructionsListItem = styled.li`
  font-weight: bold;
  line-height: 150%;
  font-size: 16px;
  color: ${colors.secondary02};
`;

export const InstructiontList = styled.ol`
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Text = styled.span`
  color: ${colors.secondary05};
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0%;
  font-weight: 400;
`;

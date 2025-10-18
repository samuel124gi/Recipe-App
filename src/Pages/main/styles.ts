import styled from "@emotion/styled";
import colors from "../../styles/color";

export const MainContainer = styled.div`
  display: flex;
  background-color: ${colors.primary01};
  padding: 100px 0px;
  height: 100%;
`;
export const InnerContainer = styled.div`
  display: flex;
  width: 736px;
  max-width: 736px;
  flex-direction: column;
  margin: auto;
  padding: 40px;
  background-color: ${colors.white};
  border-radius: 24px;
  gap: 40px;
`;
export const ImageContainer = styled.div`
  border-radius: 12px;
  overflow: hidden;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
`;
export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

export const ProductName = styled.h1`
  color: ${colors.secondary04};
  font-weight: 400;
  font-size: 40px;
  line-height: 100%;
  font-family: Young Serif;
`;
export const ProductDescription = styled.p`
  color: ${colors.secondary05};
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0%;
`;

export const Line = styled.hr`
  background-color: "#E3DDD7";
  height: 1px;
`;

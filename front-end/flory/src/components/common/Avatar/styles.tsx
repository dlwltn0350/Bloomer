import styled from "styled-components";
export const SAvatar = styled.div<any>`
  width: ${(props) => (props.size === "small" ? "2rem" : "4rem")};
  height: ${(props) => (props.size === "small" ? "2rem" : "4rem")};
  /* border: 2px solid #dec5fd; */
  border-radius: 50%;

  border: 2px solid transparent;
  background-image: ${(props) =>
    props.status === "pick"
      ? "linear-gradient(#fff, #fff), linear-gradient(to right, #BD00FF, #FF00D6)"
      : "linear-gradient(#fff, #fff), linear-gradient(#DEC5FD, #DEC5FD)"};
  background-origin: border-box;
  background-clip: content-box, border-box;

  img {
    width: 100%;
    height: 100%;
  }
`;
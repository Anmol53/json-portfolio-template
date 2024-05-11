import styled from "styled-components";

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 1.5rem 0;
  gap: 1rem;
`;

const StyledButton = styled.a`
  text-decoration: none;
  font-size: ${({ $size }) => $size}rem;
  color: ${({ theme }) => theme.primaryTextColor};
  background: linear-gradient(
    163deg,
    ${({ theme }) => theme.accentSecondaryColor} 50%,
    ${({ theme }) => theme.accentColor} 100%
  );
  padding: ${({ $size }) => $size * 0.5}rem ${({ $size }) => $size * 3}rem;
  border-radius: 0.5rem;
  transition: 500ms;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  &:hover {
    transition: 500ms;
    padding: ${({ $size }) => $size * 0.75}rem ${({ $size }) => $size * 3.5}rem;
  }
`;

export default function ButtonGroup({ groupName, buttons }) {
  const getButtonSize = (sizeName) => {
    switch (sizeName) {
      case "sm":
        return 0.75;
      case "md":
        return 1;
      case "lg":
        return 1.5;
      default:
        return 1;
    }
  };
  return (
    <Buttons>
      {buttons.map((button, idx) => (
        <StyledButton
          key={`${groupName}_button_${idx}`}
          href={button.link}
          $size={button.size ? getButtonSize(button.size) : 1}
        >
          {button.text}
        </StyledButton>
      ))}
    </Buttons>
  );
}

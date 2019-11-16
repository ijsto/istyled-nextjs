import styled, { css } from "styled-components";

const buttonStyles = () => {
  return css`
    border-radius: 4px;
    border: 0;
    cursor: pointer;
    font-weight: 600;
    font-size: 1.25em;
    padding: 0.5em 1.2em;
    &:focus,
    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.11);
    }
  `;
};

const StyledButton = styled.button`
  ${buttonStyles};
`;

export const Button = ({ children, ...props }) => {
  return (
    <StyledButton {...props}>
      <div>
        <span>{children}</span>
      </div>
    </StyledButton>
  );
};

export default Button;

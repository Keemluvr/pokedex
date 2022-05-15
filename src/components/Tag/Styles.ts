import styled from "styled-components"

export const TagWrapper = styled.div<{ color: string }>`
  border-radius: 30px;
  background-color: ${({ color }) => color};
  padding: 10px 20px;
  width: min-content;
  color: white;
  font-size: ${({ theme }) => theme.font.size.medium};
`

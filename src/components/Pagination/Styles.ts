import styled from "styled-components"

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
`

export const PaginationCurrentPage = styled.div`
  background: ${({ theme }) => theme.color.secondary};
  font-size: ${({ theme }) => theme.font.size.medium};
  color: ${({ theme }) => theme.color.text.withBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  border: none;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  padding: 5px;

  :disabled {
    background: ${({ theme }) => theme.color.disabled};
    cursor: default;
  }
`

export const PaginationButton = styled.button`
  background: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.font.size.medium};
  color: ${({ theme }) => theme.color.text.withBackground};
  font-weight: bold;
  cursor: pointer;
  border: none;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  padding: 5px;
  transition: all 0.1s ease-in-out;

  :hover {
    transform: scale(1.1);
  }

  :disabled {
    background: ${({ theme }) => theme.color.disabled};
    cursor: default;
    transform: none;
  }
`

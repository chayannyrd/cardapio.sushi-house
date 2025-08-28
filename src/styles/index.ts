import styled from 'styled-components'
import { devices } from './global'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`
export const Section = styled.section`
  margin-block: 16px;
  padding-inline: 24px;
  h2 {
    color: #333;
    font-size: 18px;
    font-weight: 700;
    line-height: 16px;
    margin-bottom: 8px;
  }
`
export const SectionItems = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;
  @media (min-width: ${devices.medium}) {
    grid-template-columns: repeat(2, 1fr);
  }
`
export const ItemCard = styled.div`
  cursor: pointer;
  border: 1px solid #EBEBEB;
  border-radius: 8px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  transition: .2s;
  &:hover {
  box-shadow: 0 1px 4px #0003;
  }
`
export const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`
export const ItemDescription = styled.p`
  color: #595959;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  white-space: pre-line;
  word-break: break-word;
  overflow: hidden;
`
export const ItemPrice = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #5a5a5a;
`
export const ItemImage = styled.img`
  flex-shrink: 0;
  width: 90px;
  height: 90px;
  border-radius: 4px;
`

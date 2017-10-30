import styled from 'styled-components'

export const Wrapper = styled.div`
  height: calc(100vh - 4rem);
  overflow: hidden;
  display: flex;
  flex-direction: column;
	justify-content: flex-end;
	> div {
    overflow-y: scroll;
  }
`

export const ChatLine = styled.div`
  display: flex;
  align-items: flex-start;
`
export const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  padding: 1rem;
`
export const Message = styled.div`
  flex-grow: 1;
  margin: 1rem 1rem 1rem 0;
  align-self: stretch;
  line-height: 1.5;
`

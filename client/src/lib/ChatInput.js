import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 4rem;
  background: hsl(25,40%,92%);
  display: flex;
  align-items: center;
  overflow: hidden;
  box-shadow: 0 -1px 0 #ccc;
`

const TextInput = styled.div`
  flex-grow: 1;
  > input {
    margin: 1rem;
    width: calc(100% - 4rem);
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: 1px solid #ccc;
    &:invalid {
      box-shadow: none;
    }
  }
`

const SubmitButton = styled.button`
  box-shadow: none;
  border: none;
  font-size: 1.25rem;
  margin: 1rem 2rem 1rem 1rem;
  transform: rotate(-90deg);
  width: 2.5rem;
  height: 4.5rem;
  border-radius: 0.5rem;
  background-color: mediumseagreen;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  &:hover {
    box-shadow: -1px 1px 2px rgba(0,0,0,0.5);
  }
  &:active {
    position: relative;
    top: 1px;
    left: 1px;
    box-shadow: none;
  }
`

export default ({
  handleSubmit,
  currentMessage,
  handleChange,
}) => (
  <form onSubmit={handleSubmit}>
    <Wrapper>
      <TextInput>
        <input type="text"
               name="message"
               required
               value={currentMessage}
               onChange={handleChange}/>
      </TextInput>
      <SubmitButton type="submit">➡</SubmitButton>
    </Wrapper>
  </form>
)

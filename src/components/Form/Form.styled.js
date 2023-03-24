import styled from 'styled-components';

export const Button = styled.button`
  background-color: #736ced;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  margin-left: 10px;
  border-radius: 3px;
  transition: box-shadow 300ms ease-in-out, background-color 300ms ease-in-out;
  &:hover {
    background-color: #5850e2;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export const Input = styled.input`
  width: 70px;
  padding: 15px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin-left: 15px;
  &:focus {
    outline: none;
    border-color: #9f9fed;
  }
`;

export const Label = styled.label`
  display: inline-block;
  font-size: 20px;
  vertical-align: center;
`;

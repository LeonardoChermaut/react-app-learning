import styled from "styled-components";

export const Container = styled.div`
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
`;

export const Input = styled.input`
  width: 100%;
  background-color: #667967;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: none;
    border-radius: 4px;
    box-sizing: border-box;
  }
`;

export const Button = styled.button`
  box-shadow: inset 0px 1px 0px 0px #ffffff;
  background: linear-gradient(to bottom, #ededed 5%, #dfdfdf 100%);
  background-color: #ededed;
  border-radius: 6px;
  border: 1px solid #dcdcdc;
  display: inline-block;
  cursor: pointer;
  color: #777777;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffffff;
  margin: 2rem;
  :hover {
    background: linear-gradient(to bottom, #dfdfdf 5%, #ededed 100%);
    background-color: #dfdfdf;
  }
  :active {
    position: relative;
    top: 1px;
  }
`;

export const Label = styled.label`
  font-family: monospace;
  font-size: 17px;
`;

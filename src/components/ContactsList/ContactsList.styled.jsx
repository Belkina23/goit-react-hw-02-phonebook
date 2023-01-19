import styled from '@emotion/styled';

const ListOfContact = styled.ul`
  list-style-type: circle;
  padding: 0;
  margin: 0;
`;

const Container = styled.div`
  width: 300px;
  margin: 0;
  border: 1px solid gray;
  padding: 20px;
`;

const ContactItem = styled.li`
  margin: 5px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 60px;
  height: 30px;
  font-size: 14px;
  text-align: center;
  color: #fff;
  background-color: #a5a2a2;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
  border-radius: 5px;
  border: none;
  cursor: pointer;
  
  :hover,
    :focus {
      background-color: #918d8d;}
`;

export { ListOfContact, Container, ContactItem, Button };
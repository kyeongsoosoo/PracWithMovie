import styled from 'styled-components';

const LogInForm = styled.form`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const LogInFormBox = styled.div`
  display: flex;
  align-items: center;
`;

const LogInInput = styled.input`
  width: 500px;
  height: 100px;
  font-size: 50px;
`;

const LogInButton = styled.button`
  width: 100px;
  height: 50px;
`;

export default {
  LogInButton,
  LogInForm,
  LogInInput,
  LogInFormBox,
};

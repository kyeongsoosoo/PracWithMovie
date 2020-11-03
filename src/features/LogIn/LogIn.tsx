import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import useInput from '../../hooks/useInput';
import { loginSuccess } from '../../module/Login/login';
import Styled from './LogIn.styled';

function LogIn() {
  const { state, handleChange, handleReset } = useInput();

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('hi');
    localStorage.setItem('user', state);
    handleReset();
    dispatch(loginSuccess());
    history.push('/');
  };
  return (
    <Styled.LogInForm onSubmit={handleSubmit}>
      <Styled.LogInFormBox>
        <Styled.LogInInput
          placeholder="Write your name"
          value={state}
          onChange={handleChange}
        />
        <Styled.LogInButton type="submit">Submit</Styled.LogInButton>
      </Styled.LogInFormBox>
    </Styled.LogInForm>
  );
}

export default LogIn;

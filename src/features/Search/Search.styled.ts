import styled from 'styled-components';

type InputProp = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type SubmitProp = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const SearchForm = styled.form<SubmitProp>`
  margin-top: 15px;
  width: 300px;
  height: 100px;
`;

const SearchInput = styled.input<InputProp>`
  width: 300px;
  height: 100px;
  font-size: 40px;
  color: white;
`;

const SearchResultWrapper = styled.div`
  height: 400px;
  overflow: auto;
`;

const SearchResultTitle = styled.div`
  displaay: flex;
  align-items: center;
  margin-top: 20px;
  width: 300px;
  height: 50px;
  font-size: 30px;
  font-weight: 800;
  color: white;
`;

const SearchResultContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(100, 1fr));
  grid-template-rows: repeat(2, 200px);
  grid-auto-flow: column;
  grid-gap: 25px;
`;

export default {
  SearchForm,
  SearchInput,
  SearchResultContent,
  SearchResultTitle,
  SearchResultWrapper,
};

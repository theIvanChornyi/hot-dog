import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { NoticesCategoriesNav } from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import {
  Section,
  NavBox,
  SectionTitle,
  SearchIcon,
  CloseIcon,
  AddIcon,
  SearchInput,
  SearchForm,
  SearchButton,
  AddBtnBox,
  AddBtnText,
  AddBtn,
} from './NoticesPage.styled';

export const Notices = ({ searchQuery, setSearchQuery }) => {
  const location = useLocation();
  const [params, setParams] = useSearchParams();
  const query = params.get('query');
  const [name, setName] = useState(query ?? searchQuery);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearchButton = e => {
    setParams({ query: name });
    setSearchQuery(name);
    e.preventDefault();
  };

  useEffect(() => {
    if (query !== null) {
      setSearchQuery(query);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    setParams({ query: name });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearchClear = e => {
    e.preventDefault();
    setParams({ query: '' });
    setName('');
  };

  const handleInputChange = e => {
    setName(e.target.value);
    e.preventDefault();
  };

  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyModalClose);
    return () => {
      window.removeEventListener('keydown', handleKeyModalClose);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleKeyModalClose = e => {
    if (e.code === 'Escape') {
      setIsModalOpen(false);
    }
  };

  const handleBackdropClose = e => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  return (
    <Section>
      <NavBox>
        <SectionTitle>Find your favorite pet</SectionTitle>
        <SearchForm>
          <SearchInput
            value={name}
            onChange={handleInputChange}
            type="text"
            placeholder="Search"
          />
          {query !== '' || query === null ? (
            <SearchButton type="submit" onClick={handleSearchClear}>
              <CloseIcon />
            </SearchButton>
          ) : (
            <SearchButton type="submit" onClick={handleSearchButton}>
              <SearchIcon />
            </SearchButton>
          )}
        </SearchForm>
        <NoticesCategoriesNav location={location} />
        <AddBtnBox>
          <AddBtnText>Add pet</AddBtnText>
          <AddBtn onClick={handleModalOpen} type="button">
            <AddIcon />
          </AddBtn>
        </AddBtnBox>
      </NavBox>
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            width: '100%',
            height: '100%',
            top: '0',
            left: '0',
          }}
          onClick={handleBackdropClose}
        >
          <div style={{ backgroundColor: 'red' }}>MODAL FORM</div>
        </div>
      )}
    </Section>
  );
};

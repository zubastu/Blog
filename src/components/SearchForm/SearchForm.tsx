import styles from './styles.module.scss';
import { FormProvider, useForm } from 'react-hook-form';
import { searchTextContent } from '../../constants/textContentConstants';
import { API_URL } from '../../constants/apiConstants';
import searchIcon from '../../assets/images/searchIcon.svg';
import { TSearchForm } from '../../types/types';

const SearchForm = () => {
  const formMethods = useForm<TSearchForm>();
  const { formState, register, handleSubmit, setValue } = formMethods;
  const onSubmit = (name: string) => {
    fetch(`${API_URL}/posts?title=${name}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setValue('title', '');
      });
  };

  return (
    <FormProvider {...formMethods}>
      <form
        noValidate={true}
        className={styles.form}
        onSubmit={handleSubmit((inputValue) => onSubmit(inputValue.title))}
      >
        <button
          className={styles.button}
          disabled={!formState.isValid}
          type="submit"
        >
          <img src={searchIcon} alt="Поиск" />
        </button>
        <input
          className={styles.input}
          type="text"
          placeholder={searchTextContent}
          {...register('title')}
          required={true}
          autoFocus={true}
        />
      </form>
    </FormProvider>
  );
};

export default SearchForm;

import styles from './styles.module.scss';
import { FormProvider, useForm } from 'react-hook-form';
import { searchTextContent } from '../../constants/textContentConstants';
import searchIcon from '../../assets/images/searchIcon.svg';
import { TSearchForm, useAppDispatch } from '../../types/types';
import { thunkSearchTopics } from '../../services/thunks/topicsThunk';

const SearchForm = () => {
  const dispatch = useAppDispatch();
  const formMethods = useForm<TSearchForm>();
  const { formState, register, handleSubmit, setValue } = formMethods;
  const onSubmit = (name: string) => {
    dispatch(thunkSearchTopics(name));
    setValue('title', '');
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

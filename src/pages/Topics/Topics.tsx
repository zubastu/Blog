import styles from './styles.module.scss';
import SearchForm from '../../components/SearchForm/SearchForm';
import MainTopic from '../../components/MainTopic/MainTopic';
import { getRandomImage } from '../../utils/utils';

const Topics = () => {
  return (
    <section className={styles.main}>
      <SearchForm />
      <MainTopic
        title={'Что нужно знать об эффективной интернет-рекламе?'}
        subtitle={
          'Интернет - огромный ресурс, позволяющий продвигать свои услуги практически на любую аудиторию. Ежедневно в сеть выходит более 5 миллиардов людей - каждый из них может увидеть вашу рекламу и стать вашим потенциальным клиентом. Рассказываем, как правильно настраивать рекламу в интернете.'
        }
        image={getRandomImage()}
        likesCount={0}
        dislikesCount={0}
      />
    </section>
  );
};

export default Topics;

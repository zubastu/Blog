import styles from './styles.module.scss';
import SearchForm from '../../components/SearchForm/SearchForm';
import MainTopic from '../../components/MainTopic/MainTopic';
import { getRandomImage } from '../../utils/utils';
import TopicItem from '../../components/TopicItem/TopicItem';

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
      <ul className={styles.topicList}>
        <TopicItem
          image={getRandomImage()}
          likesCount={100}
          dislikesCount={60}
          title={
            'Что нужно знать об эффективной интернет-рекламе? Что нужно знать об эффективной интернет-рекламе? Что нужно знать об эффективной интернет-рекламе?'
          }
        />
        <TopicItem
          image={getRandomImage()}
          likesCount={546}
          dislikesCount={234}
          title={'Что нужно знать об эффективной интернет-рекламе?'}
        />
        <TopicItem
          image={getRandomImage()}
          likesCount={234}
          dislikesCount={634}
          title={'Что нужно знать об эффективной интернет-рекламе?'}
        />
        <TopicItem
          image={getRandomImage()}
          likesCount={624}
          dislikesCount={324}
          title={'Что нужно знать об эффективной интернет-рекламе?'}
        />
      </ul>
    </section>
  );
};

export default Topics;

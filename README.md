### Для запуска нужно ввести `npm run previev` или `npm run dev` для разработки 

## [Ссылка](https://blog-test-case.netlify.app/) на рабочий прототип.

Проект сделан по тестовому заданию ниже, сделал responsive верстку.

Необходимо реализовать SPA, содержащее страницу со списком постов блога и
страницу одного поста. Макет страниц доступен по ссылке -
https://www.figma.com/file/wD3dyENc6WwTWKB11IGOmO
Функциональные требования
* На главной странице отображается список постов и строка поиска. Первый пост —
  на всю ширину, остальные — в две колонки. Оформление главной страницы и
  страницы поста смотреть в фигме.
* Страница поста содержит картинку, заголовок, текст, блок с реакциями
* Если пользователь поставил реакцию в списке постов — это должно быть
  отображено на странице конкретного поста, и наоборот.
* Если пользователь обновил страницу, поставленные реакции не сохраняются
* Фильтрация через поиск — серверная. Совпадение по полному названию поста
* Данные для списка постов (в том числе с учетом фильтра), одного поста
  запрашиваем из https://jsonplaceholder.typicode.com/ (GET/posts, GET/posts/{id}).
  Посты в фигме только для примера. Их переносить НЕ нужно — все данные
  запрашиваем по апи.
* В качестве картинок можно использовать статические изображения, или
  https://placehold.co/
* Начальные значения счетчиков (в блоке с реакциями для каждого поста) —
  случайное число от 0 до 50
* Не требуется pixel perfect, однако итоговый результат должен быть максимально
  близок к макету
  Требования к стеку
* React
* Typescript
* Если нужен стейт-менеджер, просьба использовать Redux
* Допускается использование css-in-js библиотеки
* Запрещено использовать CSS фреймворки / готовые библиотеки компонентов

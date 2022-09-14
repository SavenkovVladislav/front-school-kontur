import * as React from "react";
import Grid, { GridProps } from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import useStyles from "./styles";
import { getFileUrl } from "../utils";

export default function Task3(props: GridProps) {
  const classes = useStyles();

  return (
    <Grid
      {...props}
      container
      direction="column"
      className={classes.root}
      spacing={3}
      xs={12}
      md={10}
      xl={6}
    >
      <Grid container item justify="center">
        <Typography variant="h3" paragraph>
          Задание №4
        </Typography>
      </Grid>
      <Grid container item direction="column">
        <Typography variant="body1" paragraph>
          В файле{" "}
          <a href={getFileUrl("/public/tasks/task_4/index.html")}>
            /public/tasks/task_4/index.html
          </a>{" "}
          сверстайте страницу "О себе". .
        </Typography>
        <Typography variant="body1" paragraph>
          <h2>Требования к содержанию</h2>
          <b>Расскажите о себе:</b>
          <ul>
            <li>Имя</li>
            <li>Фото</li>
            <li>Образование и специальность</li>
            <li>
              Опыт программирования:
              <ul>
                <li>Что умеете?</li>
                <li>Какие языки используте?</li>
                <li>Какими инструментами владеете?</li>
              </ul>
            </li>
            <li>Чем еще увлекаетесь?</li>
          </ul>
          <p>
            Кроме перечисленных выше пунктов вы можете дополнять страницу любой
            информацией и интерактивными элементами на ваш вкус.
          </p>

          <h2>Технические требования</h2>
          <ul>
            <li>
              Страница должна работать и одинаково отображаться во всех
              современных браузерах
            </li>
            <li>
              HTML CSS JS код должен быть валидным и не должен содержать ошибок
            </li>
            <li>
              В процессе верстки важно использовать семантические теги (поменьше
              DIVов и SPANов), если не знаете какие теги использовать, то
              обратите внимание на раздел "Семантика" в{" "}
              <a
                href="https://doka.guide/html/"
                target="_blank"
                rel="noopener noreferrer"
              >
                справочнике
              </a>
            </li>
            <li>Адаптивная верстка будет плюсом</li>
          </ul>

          <h2>Рекомендации</h2>
          <p>Кроме HTML для оформления страницы вы можете использовать:</p>
          <ul>
            <li>Различные шрифты</li>
            <li>Изображения</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>

          <h2>Полезные ссылки</h2>
          <ul>
            <li>
              <a
                href="https://doka.guide/html/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Справочник по HTML-тегам
              </a>
            </li>
            <li>
              <a
                href="https://doka.guide/css/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Справочник по CSS
              </a>
            </li>
            <li>
              <a
                href="https://doka.guide/css/adding-styles/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Статья о том как подключить внешний файл стилей
              </a>
            </li>
            <li>
              Примеры страниц для вдохновения:{" "}
              <a href="/images/example1.jpg" target="_blank">
                Вот
              </a>
              &nbsp;
              <a href="/images/example2.jpg" target="_blank">
                несколько
              </a>
              &nbsp;
              <a href="/images/example3.png" target="_blank">
                примеров
              </a>
              &nbsp;
              <a href="/images/example4.png" target="_blank">
                подобных
              </a>
              &nbsp;
              <a href="/images/example5.jpg" target="_blank">
                страниц
              </a>
            </li>
            <li>
              <a
                href="https://fonts.google.com/?subset=cyrillic"
                target="_blank"
                rel="noopener noreferrer"
              >
                Шрифты
              </a>
            </li>
            <li>
              <a
                href="https://unsplash.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Бесплатный фотосток
              </a>
            </li>
          </ul>

          <h2>Кратко о том как подключить шрифт</h2>
          <ul>
            <li>
              На примере шрифта{" "}
              <a
                href="https://fonts.google.com/specimen/Open+Sans?subset=cyrillic"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Sans
              </a>
            </li>
            <li>На странице шрифта выберите нужные вам начертания</li>
            <li>
              Кликните на иконку сверху справа (квадратики с плюсом) чтобы
              увидеть боковое меню импорта
            </li>
            <li>
              Скопируйте код под надписью <b>link</b> в head-секцию вашего
              html-файла (туда же, куда вы подключали CSS-стили)
            </li>

            <li>
              Затем используйте шрифт в CSS c помощью{" "}
              <a
                href="https://doka.guide/css/font-family/"
                target="_blank"
                rel="noopener noreferrer"
              >
                font-family
              </a>
            </li>
          </ul>

          <h2>Дополнительные инструменты</h2>
          <ul>
            <li>
              <a
                href="https://caniuse.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                caniuse
              </a>{" "}
              - инструмент для проверки поддержки CSS различными браузерами
            </li>
            <li>
              <a
                href="https://www.figma.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                figma
              </a>{" "}
              - инструмент для прототипирования, тут можно нарисовать макеты
              прежде чем их верстать
            </li>
            <li>
              <a
                href="https://validator.w3.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                HTML-валидатор
              </a>
            </li>
            <li>
              <a
                href="https://jigsaw.w3.org/css-validator/"
                target="_blank"
                rel="noopener noreferrer"
              >
                CSS-валидатор
              </a>
            </li>
          </ul>

          <h2>Еще почитать</h2>
          <ul>
            <li>
              <a
                href="https://developer.mozilla.org/ru/docs/Web/HTML"
                target="_blank"
                rel="noopener noreferrer"
              >
                руководство по HTML на MDN
              </a>
            </li>
            <li>
              <a
                href="https://developer.mozilla.org/ru/docs/Web/CSS"
                target="_blank"
                rel="noopener noreferrer"
              >
                руководство по CSS на MDN
              </a>
            </li>
            <li>
              <a
                href="https://webmasters.teamdev.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                пособие для тех, кому надо верстать
              </a>
            </li>
          </ul>
        </Typography>
        <Typography variant="body1" paragraph>
          Результат на отдельной странице можно посмотреть{" "}
          <a href="/tasks/task_4/index.html" target="_blank">
            здесь
          </a>
        </Typography>
      </Grid>
    </Grid>
  );
}

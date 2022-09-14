import * as React from "react";
import Grid, { GridProps } from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import useStyles from "./styles";

export default function Home(props: GridProps) {
  const classes = useStyles();

  return (
    <Grid
      {...props}
      container
      item
      direction="column"
      className={classes.root}
      spacing={3}
      xs={12}
      md={10}
      xl={6}
    >
      <Grid container item justify="center">
        <Typography variant="h3" paragraph>
          Тестовое задание
        </Typography>
      </Grid>
      <Grid container item direction="column">
        <Typography variant="h5">Подготовка</Typography>
        <ul>
          <Typography variant="body1" component="li">
            Перед выполнением задач нажми кнопку <b>Fork</b> &ndash; таким
            образом будет создана твоя личная копия песочницы со своей
            уникальной ссылкой.
          </Typography>
          <Typography variant="body1" component="li">
            Сохрани в закладках ссылку на копию, чтобы не потерять к ней доступ.
          </Typography>
          <Typography variant="body1" component="li">
            После выполнения всех заданий отправь ссылку на свою песочницу
            через&nbsp;
            <a
              href="https://kontur.ru/education/programs/kurs/front_nsk"
              target="_blank"
              rel="noopener noreferrer"
            >
              форму
            </a>
            .
          </Typography>
        </ul>
        <p>
          <img src="/images/6aiB-fork.jpg" width="550px" />
        </p>
      </Grid>
      <Grid container item direction="column">
        <Typography variant="h5" paragraph>
          Описание заданий
        </Typography>
        <Typography variant="body1">
          Тестовое задание состоит из следующих задач:
        </Typography>
        <ul>
          <Typography variant="body1" component="li">
            <i>task_1</i>, <i>task_2</i>, <i>task_3</i> &ndash; алгоритмические
            задачи на проверку базовых знаний программирования.
          </Typography>
          <Typography variant="body1" component="li">
            <i>task_4</i> &ndash; <b>творческое</b> задание на базовые навыки
            вёрстки.
          </Typography>
        </ul>
        <Typography variant="body1" paragraph>
          Все задания расположены в индивидуальных директориях в папке&nbsp;
          <i>/public/tasks</i>.
        </Typography>
        <Typography variant="body1">
          В директориях с задачами 1, 2, 3 находятся следующие файлы:
        </Typography>
        <ul>
          <Typography variant="body1" component="li">
            <i>index.js</i> - файл для написания решения
          </Typography>
          <Typography variant="body1" component="li" paragraph>
            <i>index.test.js</i> - файл с автотестами.
          </Typography>
        </ul>

        <Typography variant="h5" paragraph>
          Автотесты
        </Typography>
        <Typography variant="body1" paragraph>
          Тесты запускаются автоматически после внесения изменений в файлы{" "}
          <i>index.js</i>.
        </Typography>
        <Typography variant="body1" paragraph>
          Для выполнения задач 1, 2, 3 необходимо чтобы успешно проходили все
          тесты, т.е. стали зелёными.
        </Typography>
        <Typography variant="body1" paragraph>
          На вкладке <b>Tests</b> можно посмотреть отчет по выполненным
          автотестам.
        </Typography>
        <Typography variant="body1" paragraph>
          В нём показаны результаты тестирования для каждой задачи.
        </Typography>
        <Typography variant="body1" paragraph>
          Если какой-то тест выполнился с ошибкой, то можно посмотреть на каких
          входных данных тестировалась функция и какие данные ожидались в
          результате её выполнения.
        </Typography>
        <Typography variant="body1" paragraph>
          <img src="/images/tests_big.PNG" width="550px" />
        </Typography>

        <Typography variant="h5" paragraph>
          Памятка по JS
        </Typography>
        <Typography variant="body1">
          При решении задач на JavaScript, тебе могут пригодиться следующие
          ссылки:
        </Typography>
        <ul>
          <Typography variant="body1" component="li">
            <a
              href="http://learn.javascript.ru/variables"
              rel="noopener noreferrer"
              target="_blank"
            >
              переменные
            </a>
          </Typography>
          <Typography variant="body1" component="li">
            <a
              href="http://learn.javascript.ru/string"
              rel="noopener noreferrer"
              target="_blank"
            >
              строки
            </a>
          </Typography>
          <Typography variant="body1" component="li">
            <a
              href="http://learn.javascript.ru/while-for"
              rel="noopener noreferrer"
              target="_blank"
            >
              циклы
            </a>
          </Typography>
          <Typography variant="body1" component="li">
            <a
              href="http://learn.javascript.ru/array"
              rel="noopener noreferrer"
              target="_blank"
            >
              массивы
            </a>
          </Typography>
          <Typography variant="body1" component="li">
            <a
              href="http://learn.javascript.ru/function-basics"
              rel="noopener noreferrer"
              target="_blank"
            >
              функции
            </a>
          </Typography>
        </ul>
      </Grid>
    </Grid>
  );
}

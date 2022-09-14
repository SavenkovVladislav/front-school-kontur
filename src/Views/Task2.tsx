import * as React from "react";
import Grid, { GridProps } from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import useStyles from "./styles";
import { getFileUrl } from "../utils";

export default function Task2(props: GridProps) {
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
          Задание №2
        </Typography>
      </Grid>
      <Grid container item direction="column">
        <Typography variant="body1" paragraph>
          В файле{" "}
          <a href={getFileUrl("/public/tasks/task_2/index.js")} target="_blank">
            /public/tasks/task_2/index.js
          </a>{" "}
          допишите функцию шифрования&nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ru.wikipedia.org/wiki/%D0%A8%D0%B8%D1%84%D1%80_%D0%BF%D0%BE%D0%B4%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B8"
          >
            методом подстановки
          </a>
          &nbsp;
          <i>encode(text, openAlph, secureAlph)</i>. <br />
        </Typography>
        <Typography variant="body1" paragraph>
          Аргументы функции encode:
          <ul>
            <li>text - текст, который нужно зашифровать</li>
            <li>openAlph - открытый алфавит</li>
            <li>secureAlph - шифрованный алфавит</li>
          </ul>
          Возвращаемое значение &mdash; строка (зашифрованный текст).
        </Typography>
        <Typography variant="body1" paragraph>
          Для шифрования необходимо каждый символ открытого алфавита заменять
          соответствующим символом закрытого алфавита. Если в тексте встречаются
          небуквенные символы, то их нужно оставлять без изменения.
        </Typography>
        <Typography variant="body1" component="div">
          Например:
          <pre className={classes.code}>
            encode(
            <br /> "message",
            <br /> "abcdefghijklmnopqrstuvwxyz",
            <br /> "rsyxuqldnmzvpofceiwktjgabh",
            <br />
            ); // должен вернуть "puwwrlu"
          </pre>
        </Typography>
      </Grid>
    </Grid>
  );
}

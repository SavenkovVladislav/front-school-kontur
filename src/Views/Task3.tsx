import * as React from "react";
import Grid, { GridProps } from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import useStyles from "./styles";
import { getFileUrl } from "../utils";

export default function Task4(props: GridProps) {
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
          Задание №3
        </Typography>
      </Grid>
      <Grid container item direction="column">
        <Typography variant="body1" paragraph>
          В файле{" "}
          <a href={getFileUrl("/public/tasks/task_3/index.js")} target="_blank">
            /public/task_3/index.js{" "}
          </a>{" "}
          допишите функцию проверки &nbsp;
          <a
            target="_blank"
            href="https://ru.wikipedia.org/wiki/%D0%90%D0%BD%D0%B0%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0"
          >
            анаграмм
          </a>
          &nbsp;
          <i>checkAnagram(anagramArray)</i>. <br />
        </Typography>
        <Typography variant="body1" paragraph>
          Аргументом функции checkAnagram является массив строк, которые нужно
          проверить.
        </Typography>
        <Typography variant="body1">
          Возвращаемое значение &mdash; true/false в зависимости от того можно
          ли все слова массива составить из одних и тех же букв.
        </Typography>
      </Grid>
    </Grid>
  );
}

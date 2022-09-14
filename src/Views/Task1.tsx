import * as React from "react";
import Grid, { GridProps } from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import useStyles from "./styles";

import { getFileUrl } from "../utils";

export default function Task1(props: GridProps) {
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
          Задание №1
        </Typography>
      </Grid>
      <Grid container item direction="column">
        <Typography variant="body1" paragraph>
          В файле{" "}
          <a href={getFileUrl("/public/tasks/task_1/index.js")} target="_blank">
            /public/tasks/task_1/index.js
          </a>{" "}
          допишите функцию&nbsp;
          <i>getArrays</i>. Функция должна принимать в качестве аргументов любое
          целое число и возвращать два массива чисел. В первый массив должны
          попасть числа от 0 до заданного числа, которые делятся на 3, во второй
          - все числа от 0 до заданного числа, которые делятся на 5.
        </Typography>
        <Typography variant="body1" component="div">
          Например:
          <pre className={classes.code}>
            getArrays(5); // должен вернуть [[3], [5]]
          </pre>
        </Typography>
      </Grid>
    </Grid>
  );
}

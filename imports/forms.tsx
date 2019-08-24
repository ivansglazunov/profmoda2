import React, { useState, useEffect } from 'react';

import AutoForm from 'uniforms-material/AutoForm';
import AutoField from 'uniforms-material/AutoField';
import SubmitField from 'uniforms-material/SubmitField';
// import TextField from "uniforms-material/TextField";
import BoolField from 'uniforms-material/BoolField';
import ErrorField from 'uniforms-material/ErrorField';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';

import { Schema, onSubmit } from './formsSchema';

const styles = theme => ({
  root: {
    flexGrow: 1,
    boxSizing: 'border-box',
    padding: 15,
    '& button': {
      background: 'linear-gradient(150deg, rgb(235, 226, 153) 0%, rgb(206, 188, 128) 100%)',
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
      border: '1px solid black',
    },
  },
  commentBigField: {
    height: 171,
  },
});

const SchemaForm = ({ classes, onDone }) => {
  let timeout;
  useEffect(() => () => clearTimeout(timeout));
  const [disabled, setDisabled] = useState(false);

  return (
    <AutoForm
      schema={Schema}
      onSubmit={doc => {
        setDisabled(true);
        onSubmit(doc, onDone);
        timeout = setTimeout(() => setDisabled(false), 5000);
      }}
      disabled={disabled}
      model={{}}
    >
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={12} sm={6}>
          <AutoField name="fullname" variant="outlined" />
          <AutoField name="email" variant="outlined" />
        </Grid>
        <Grid item sm={12}>
          <BoolField
            name="consent"
            label={
              <span>
                Я даю согласие на обработку персональных данных и соглашаюсь
                c&ensp;
                <a href="/" target="_blank">
                  политикой конфиденциальности
                </a>
              </span>
            }
          />
          <ErrorField
            name="consent"
            errorMessage="Необходимо дать согласие на обработку персональных данных."
          />
        </Grid>
        <Grid item xs={12}>
          <SubmitField fullWidth label="Отправить"/>
        </Grid>
      </Grid>
    </AutoForm>
  );
};

const VerticalSchemaForm = ({ classes, onDone }) => {
  let timeout;
  useEffect(() => () => clearTimeout(timeout));
  const [disabled, setDisabled] = useState(false);

  return (
    <AutoForm
      schema={Schema}
      onSubmit={doc => {
        setDisabled(true);
        onSubmit(doc, onDone);
        timeout = setTimeout(() => setDisabled(false), 5000);
      }}
      disabled={disabled}
      model={{}}
    >
      <Grid container spacing={0} className={classes.root}>
        <Grid item sm={12}>
          <AutoField name="fullname" variant="outlined" />
          <AutoField name="email" variant="outlined" />
        </Grid>
        <Grid item sm={12}>
          <BoolField
            name="consent"
            label={
              <span>
                Я даю согласие на обработку персональных данных и соглашаюсь
                c&ensp;
                <a href="/" target="_blank">
                  политикой конфиденциальности
                </a>
              </span>
            }
          />
          <ErrorField
            name="consent"
            errorMessage="Необходимо дать согласие на обработку персональных данных."
          />
        </Grid>
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <SubmitField fullWidth label="Отправить"/>
        </Grid>
      </Grid>
    </AutoForm>
  );
};

export const HorizontalForm = withStyles(styles)(SchemaForm);
export const VerticalForm = withStyles(styles)(VerticalSchemaForm);

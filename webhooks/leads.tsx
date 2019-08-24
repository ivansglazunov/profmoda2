import * as passport from 'passport';
import { initApollo } from '../imports/apollo';
import gql from 'graphql-tag';
import { Strategy as BearerStrategy } from 'passport-http-bearer';
import * as _ from 'lodash';
import * as Debug from 'debug';

import b24 from '../imports/b24';
import reactMail from '../imports/react-mailer';

const debug = Debug('webhooks:leads');

export const leadsMiddleware = async (req, res, next) => {
  debug('middleware', { body: req.body });
  await b24(req.body);
  await reactMail(req.body);
  res.send("");
};

export default (app) => {
  debug('init');
  app.post('/_webhooks/leads', leadsMiddleware);
};

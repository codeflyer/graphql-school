#!/usr/bin/env babel-node --optional es7.asyncFunctions

import fs from 'fs';
import path from 'path';
import Schema  from '../server/schema';
import { graphql }  from 'graphql';
import { introspectionQuery, printSchema } from 'graphql/utilities';

graphql(Schema, introspectionQuery)
    .then(result => {
      if (result.errors) {
        console.error(
            'ERROR introspecting schema: ',
            JSON.stringify(result.errors, null, 2)
        );
      } else {
        fs.writeFileSync(
            path.join(__dirname, '../server/schema/schema.json'),
            JSON.stringify(result, null, 2)
        );
      }
    });

// Save user readable type system shorthand of schema
fs.writeFileSync(
    path.join(__dirname, '../server/schema/schema.graphql'),
    printSchema(Schema)
);
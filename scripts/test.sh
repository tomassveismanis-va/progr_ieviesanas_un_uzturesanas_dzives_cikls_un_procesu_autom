#!/bin/bash
set -e
npx knex migrate:latest
npm test
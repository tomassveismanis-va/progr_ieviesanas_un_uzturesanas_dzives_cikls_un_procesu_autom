#!/bin/bash
set -e
createdb task_tracker
npx knex migrate:latest
echo "Setup complete."
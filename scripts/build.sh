#!/bin/bash

set -ex

NODE_ENV=production
export NODE_ENV

pushd client/

npm install
npm run build

popd

mv client/build/* public/

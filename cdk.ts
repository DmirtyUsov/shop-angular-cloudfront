#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkStack } from './cdk/cdk-stack';

const stackName = process.env.CDK_STACK_NAME || 'ShopAngularDima';

const app = new cdk.App();
new CdkStack(app, 'CdkStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
  stackName,
  tags: { rsCrossCheck: stackName },
});

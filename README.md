# Shop Angular Cloudfront

Angular version: ~15.

## The purpose

The repository based on an Angular version of e-shop for EPAM NodeJS AWS course. https://github.com/EPAM-JS-Competency-center/shop-angular-cloudfront

## NodeJS AWS course integration

All the necessary API endpoints are in the environments files `environment.ts` (for dev builds). Also it contains feature flags to enable/disable endpoints invocations from within the app so to ensure that you don't get errors for not implemented API endpoints.

## Get up and running

Prerequisites: 
- NodeJS v14.20.x and higher
- AWS account
- AWS CLI v2 

Follow the steps:

- `git clone git@github.com:DmirtyUsov/shop-angular-cloudfront.git`
- `git switch task-NumberYouCheck`
- `npm i`
- `npm run angular:build`  
  >Generate output files dist/app
- `cp .env.example .env`
  > Copy and change name for file with environment variables  
  IMPORTANT! Set variables in `.env` file
- `npm run cdk:bootstrap`


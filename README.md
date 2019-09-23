# looker2optly

This is a proof of concept for an integration between Looker and Optimizely.

The integration would work the following way:

Scheduling sending data from Looker to an Amazon S3 bucket
https://docs.looker.com/sharing-and-publishing/scheduling-and-sharing/send-amazon-s3

Triggering a Lambda function

In the Lambda function, parsing JSON file and sending conversion data to Optimizely via Optimizely Event API
https://developers.optimizely.com/x/events/api/index.html

This proof of concept demonstrates how we can parse a JSON file in S3 in Lambda and then send conversion data to Optimizely via the Optimizely Event API.

This solves use cases such as:

Sending Salesforce MQL and SQL data to Optimizely via Looker
Sending any other conversion events to Optimizely via Looker

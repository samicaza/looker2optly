const aws = require('aws-sdk');
const s3 = new aws.S3({ apiVersion: '2006-03-01' });
var eventAPI = require('./eventAPI').targetFunctions
var axios = require('axios')
var axiosCall = eventAPI.axiosCall

exports.handler = async (event, context) => {
  
    const params = {
        Bucket: 'thisislooker2optimizelybucket',
        Key: 'convertcsv.json',
    }
    
    try {
    const jsonParser =  await s3.getObject(params).promise()
    const parsed = JSON.parse(jsonParser.Body)
    
    for (var i=0;i<jsonParser.length;i++){
      var optimizely_id = jsonParser[i].optimizely_id
      var eventId = jsonParser[i]['event id']
      var eventKey = jsonParser[i]['event key']
      var eventUUID = jsonParser[i]['event uuid']

      var axiosCampaignActivated = eventAPI.campaignActivated(optimizely_id,Date.now())
      axiosCall(axiosCampaignActivated)
      var axiosEETActivated = eventAPI.eventAPI(optimizely_id,eventId,eventKey,eventUUID,Date.now())
      axiosCall(axiosEETActivated)
    }
    
    return parsed;

    } 
    catch (err) {
        console.log('this is an error',err);
    }
};

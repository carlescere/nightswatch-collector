var snowplow = require('snowplow-tracker'),
	queueName,
	queue,
	windowAlias = window;

var y_nsp = function() {
  var sp = new snowplow.Snowplow([]);
  return function() {
    sp.apply(arguments);
  }
}

y_nsp("newTracker", ["primary", "testclojuretrackv1-env.eu-west-1.elasticbeanstalk.com", {
  appId: 12,
  platform: "desktop"
}]);

y_nsp(['trackPageView']);

y_nsp('trackUnstructEvent', [{
  schema: "iglu:com.yieldify/impression/jsonschema/1-0-0",
  data: {
    event_type: 'Impression',
    tag_version: "v2",
    execution_component_id: '123',
    execution_collection_id: '456',
    campaign_id: '789'
  }
}]);

y_nsp('trackUnstructEvent', [{
  schema: "iglu:com.yieldify/click/jsonschema/1-0-0",
  data: {
    event_type: 'Click',
    tag_version: "v2",
    execution_component_id: '123',
    execution_collection_id: '456',
    campaign_id: '789'
  }
}]);

y_nsp('trackUnstructEvent', [{
  schema: "iglu:com.yieldify/close/jsonschema/1-0-0",
  data: {
    event_type: 'Close',
    tag_version: "v2",
    execution_component_id: '123',
    execution_collection_id: '456',
    campaign_id: '789'
  }
}]);

y_nsp('trackUnstructEvent', [{
  schema: "iglu:com.yieldify/formsubmit/jsonschema/1-0-0",
  data: {
    event_type: 'FormSubmit',
    tag_version: "v2",
    execution_component_id: '123',
    execution_collection_id: '456',
    campaign_id: '789'
  }
}]);

y_nsp('trackUnstructEvent', [{
  schema: "iglu:com.yieldify/sale/jsonschema/1-0-0",
  data: {
    event_type: 'Sale',
    tag_version: "v2",
    basket_id: '123',
    currency: '456',
    value: '789',
    order_id: '340',
    opt: {}
  }
}]);

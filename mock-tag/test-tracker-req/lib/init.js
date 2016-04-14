var snowplow = require('yi-snowplow-tracker'),
	queueName,
	queue,
	windowAlias = window;

var y_nsp = (function() {
 var sp = new snowplow.Snowplow([]);
 return function() {
   sp.push.apply(sp, [arguments]);
 }
})();

y_nsp("newTracker", "primary", "dc.yieldify.com", {
  appId: 6419,
  platform: "desktop"
});

/* 
Impression V1
appId --> WebsiteID
[
  se_category, -->  campaign_id 
  se_action,   -->  type_of_action 
  se_label,    -->  tag_version 
  se_property, -->  metadata
  se_value,    -->  action specific payload
]
*/

// In these events websiteId 6419, has campaigns: []
// Alternative 6423


// Track Impressions
y_nsp('trackStructEvent', '2', 'Impression', 'v2', null, null);
y_nsp('trackStructEvent', '2', 'Impression', 'v2', null, null);
y_nsp('trackStructEvent', '2', 'Impression', 'v2', null, null);

y_nsp('trackStructEvent', '4', 'Impression', 'v2', null, null);
y_nsp('trackStructEvent', '4', 'Impression', 'v2', null, null);


// Track Clicks
y_nsp('trackStructEvent', '2', 'Click', 'v2', null, null);
y_nsp('trackStructEvent', '4', 'Click', 'v2', null, null);

// Track Closes
y_nsp('trackStructEvent', '2', 'Close', 'v2', null, null);
y_nsp('trackStructEvent', '2', 'Close', 'v2', null, null);
y_nsp('trackStructEvent', '4', 'Close', 'v2', null, null);

// Track Sales
y_nsp('trackStructEvent', '4', 'Sale', 'v2', 'i', '999');
y_nsp('trackStructEvent', '4', 'Sale', 'v2', 'c', '111');
y_nsp('trackStructEvent', '2', 'Sale', 'v2', 'i', '888');
y_nsp('trackStructEvent', '2', 'Sale', 'v2', '-', '777');

// Track Form Submits
//y_nsp('trackStructEvent', '2', 'FormSubmit', 'v2', null, 'iason@yieldify.com|iason|male');
//y_nsp('trackStructEvent', '2', 'FormSubmit', 'v2', null, 'krishan@yieldify.com|krishan|male');
//y_nsp('trackStructEvent', '2', 'FormSubmit', 'v2', null, 'miguel@yieldify.com|miguel|male');
//y_nsp('trackStructEvent', '4', 'FormSubmit', 'v2', null, 'maria@yieldify.com|maria|male');

//y_nsp('trackStructEvent', '2', 'FormSubmit', 'exec_coll', 'v2', 'ERROR');




// --- END OF TEST FOR TAG V2 WITH STRUCTURED EVENTS ---
/*
{
  eventType: 'Impression',
  tagVersion: 'v2',
  exCollId: '123',
  exCompId: '456'
  cmpID: '789'
}
*/

y_nsp('trackPageView');

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

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
  appId: 1  ,
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
/*
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
*/

// Track Form Submits
//y_nsp('trackStructEvent', '2', 'FormSubmit', 'v2', null, 'iason@yieldify.com|iason|male');
//y_nsp('trackStructEvent', '2', 'FormSubmit', 'v2', null, 'krishan@yieldify.com|krishan|male');
//y_nsp('trackStructEvent', '2', 'FormSubmit', 'v2', null, 'miguel@yieldify.com|miguel|male');
//y_nsp('trackStructEvent', '4', 'FormSubmit', 'v2', null, 'maria@yieldify.com|maria|male');

//y_nsp('trackStructEvent', '2', 'FormSubmit', 'exec_coll', 'v2', 'ERROR');
// --- END OF TEST FOR TAG V1 WITH STRUCTURED EVENTS ---



// TEST TAG V2 - UNSTRUCTURED EVENTS

// Track PageView
y_nsp('trackUnstructEvent', [{
  schema: "iglu:com.yieldify/pageview/jsonschema/1-0-0",
  data: {
    event_type: 'PageView',
    tag_version: 'v2',
    xCompId: '123',
    xCollId: '456',
    client_id: '2',
    campaign_id: '4',
    device: 'tablet'
  }
}]);


// Track Impression
y_nsp('trackUnstructEvent', [{
  schema: "iglu:com.yieldify/impression/jsonschema/1-0-0",
  data: {
    event_type: 'Impression',
    tag_version: 'v2',
    xCompId: '123',
    xCollId: '456',
    client_id: '2',
    campaign_id: '4',
    device: 'tablet'
  }
}]);

y_nsp('trackUnstructEvent', [{
  schema: "iglu:com.yieldify/impression/jsonschema/1-0-0",
  data: {
    event_type: 'Impression',
    tag_version: 'v2',
    xCompId: '123',
    xCollId: '456',
    client_id: '2',
    campaign_id: '4',
    device: 'desktop'
  }
}]);

// Track Click
y_nsp('trackUnstructEvent', [{
  schema: "iglu:com.yieldify/click/jsonschema/1-0-0",
  data: {
    event_type: 'Click',
    tag_version: 'v2',
    xCompId: '123',
    xCollId: '456',
    client_id: '2',
    campaign_id: '4',
    device: 'tablet'
  }
}]);

// Track Close
y_nsp('trackUnstructEvent', [{
  schema: "iglu:com.yieldify/close/jsonschema/1-0-0",
  data: {
    event_type: 'Close',
    tag_version: 'v2',
    xCompId: '123',
    xCollId: '456',
    client_id: '2',
    campaign_id: '5',
    device: 'mobile'
  }
}]);

// Track Formsubmits
y_nsp('trackUnstructEvent', [{
  schema: "iglu:com.yieldify/formsubmit/jsonschema/1-0-0",
  data: {
    event_type: 'FormSubmit',
    tag_version: 'v2',
    xCompId: '123',
    xCollId: '456',
    client_id: '2',
    campaign_id: '5',
    email: 'iason@yieldify.com',
    device: 'desktop'
  }
}]);

y_nsp('trackUnstructEvent', [{
  schema: "iglu:com.yieldify/formsubmit/jsonschema/1-0-0",
  data: {
    event_type: 'FormSubmit',
    tag_version: 'v2',
    xCompId: '123',
    xCollId: '456',
    client_id: '2',
    campaign_id: '5',
    email: 'iason@yieldify.com',
    device: 'mobile'
  }
}]);

y_nsp('trackUnstructEvent', [{
  schema: "iglu:com.yieldify/formsubmit/jsonschema/1-0-0",
  data: {
    event_type: 'FormSubmit',
    tag_version: 'v2',
    xCompId: '123',
    xCollId: '456',
    client_id: '2',
    campaign_id: '5',
    email: 'krishan@yieldify.com',
    device: 'tablet'
  }
}]);

y_nsp('trackUnstructEvent', [{
  schema: "iglu:com.yieldify/formsubmit/jsonschema/1-0-0",
  data: {
    event_type: 'FormSubmit',
    tag_version: 'v2',
    xCompId: '123',
    xCollId: '456',
    client_id: '2',
    campaign_id: '5',
    email: 'miguel@yieldify.com',
    device: 'desktop'
  }
}]);

y_nsp('trackUnstructEvent', [{
  schema: "iglu:com.yieldify/formsubmit/jsonschema/1-0-0",
  data: {
    event_type: 'FormSubmit',
    tag_version: 'v2',
    xCompId: '123',
    xCollId: '456',
    client_id: '2',
    campaign_id: '5',
    email: 'menelaos@yieldify.com',
    device: 'other'
  }
}]);

// Track Sale
y_nsp('trackUnstructEvent', [{
  schema: "iglu:com.yieldify/sale/jsonschema/1-0-0",
  data: {
    event_type: 'Sale',
    tag_version: 'v2',
    xCompId: '123',
    xCollId: '456',
    client_id: '2',
    campaign_id: '5',
    total_value: '111',
    device: 'desktop'
  }
}]);


// Track Sale
y_nsp('trackUnstructEvent', [{
  schema: "iglu:com.yieldify/sale/jsonschema/1-0-0",
  data: {
    event_type: 'Sale',
    tag_version: 'v2',
    xCompId: '123',
    xCollId: '456',
    client_id: '2',
    campaign_id: '5',
    total_value: '222',
    device: 'desktop'
  }
}]);

y_nsp('trackUnstructEvent', [{
  schema: "iglu:com.yieldify/sale/jsonschema/1-0-0",
  data: {
    event_type: 'Sale',
    tag_version: 'v2',
    xCompId: '123',
    xCollId: '456',
    client_id: '2',
    campaign_id: '5',
    total_value: '111',
    device: 'mobile'
  }
}]);

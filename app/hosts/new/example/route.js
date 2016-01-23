import DriverRoute from 'ui/hosts/new/driver-route';

export default DriverRoute.extend({
  driverName: 'example',

  newModel: function() {
    var store = this.get('store');

    var config = store.createRecord({
      type: 'exampleConfig',
      size: 1024,
    });

    return store.createRecord({
      type: 'machine',
      exampleConfig: config,
    });
  },
});

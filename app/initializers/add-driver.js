import { addDriver, setDefaultDriver /*, removeDriver, getDrivers*/ } from 'ui/hosts/new/controller';

export function initialize(/*container, application*/) {

  // Example: Remove just the 3rd-party drivers
  //getDrivers().filter((driver) => {
  //  return driver.sort !== 1;
  //}).forEach(removeDriver);

  // Example: Remove a specific driver by name
  //removeDriver('amazonec2');


  addDriver({
    name:   'example',
    label:  'Example Driver',    // The alt text displayed for the button for screen-readers
    css:    'example',           // The CSS class which defines the background-image logo
                                 //   see addon/styles/host.scss
    sort:   2,                   // Sort grouping, 1: "custom", 2: 3rd party, 3: "other"
    //schema: 'exampleConfig',   // Optional: Name of a schema that must be found in the API for the driver to be usable/shown
  });

  setDefaultDriver('example');
}

export default {
  name: 'add-driver',
  initialize: initialize
};

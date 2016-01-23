import Ember from 'ember';
import NewHost from 'ui/mixins/new-host';

export default Ember.Controller.extend(NewHost, {
  validate() {
    // Get generic API validation errors
    this._super();
    var errors = this.get('errors')||[];

    // Add more specific errors

    // Check something and add an error entry if it fails
    if ( parseInt(this.get('model.exampleConfig.size'),10) < 1024 )
    {
      errors.push('Size must be at least 1024 MB');
    }

    // Set the array of errors for display,
    // and return true if saving should continue.
    if ( errors.get('length') )
    {
      this.set('errors', errors);
      return false;
    }
    else
    {
      this.set('errors', null);
      return true;
    }
  },
})

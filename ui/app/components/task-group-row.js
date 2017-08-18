import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({
  tagName: 'tr',

  classNames: ['task-group-row'],

  taskGroup: null,

  allocDistribution: computed(
    'taskGroup.summary.{queuedAllocs,completeAllocs,failedAllocs,runningAllocs,startingAllocs}',
    function() {
      const allocs = this.get('taskGroup.summary').getProperties(
        'queuedAllocs',
        'completeAllocs',
        'failedAllocs',
        'runningAllocs',
        'startingAllocs',
        'lostAllocs'
      );
      return [
        { label: 'Queued', value: allocs.queuedAllocs, className: 'queued' },
        { label: 'Starting', value: allocs.startingAllocs, className: 'starting', layers: 2 },
        { label: 'Running', value: allocs.runningAllocs, className: 'running' },
        { label: 'Complete', value: allocs.completeAllocs, className: 'complete' },
        { label: 'Failed', value: allocs.failedAllocs, className: 'failed' },
        { label: 'Lost', value: allocs.lostAllocs, className: 'lost' },
      ];
    }
  ),
});

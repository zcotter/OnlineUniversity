'use strict';

angular.module('onlineUniversity.version', [
  'onlineUniversity.version.interpolate-filter',
  'onlineUniversity.version.version-directive'
])

.value('version', '0.1');

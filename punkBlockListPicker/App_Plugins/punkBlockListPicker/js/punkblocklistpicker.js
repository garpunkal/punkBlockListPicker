angular
    .module('umbraco.services').config(['$httpProvider',
        function ($httpProvider) {
            $httpProvider.interceptors.push(
                function ($q) {
                    return {
                        'request': function (request) {
                            if (request.url.toLowerCase().indexOf('views/common/infiniteeditors/blockpicker/blockpicker.html') !== -1)
                                request.url = '/app_plugins/punkblocklistpicker/views/punkblocklistpicker.html';

                            return request || $q.when(request);
                        }
                    };
                });
        }
    ]);
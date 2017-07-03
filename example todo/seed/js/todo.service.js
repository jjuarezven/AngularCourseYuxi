(function () {
    'use strict';

    angular
        .module('app')
        .factory('TodoService', TodoService)

    function TodoService($http) {
        var API = 'http://jsonplaceholder.typicode.com/todos/';
        return {
            create: create,
            retrieve: retrieve,
            update: update,
            remove: remove
        }

        function create(todo) {
            return $http.post(API, todo).then(function (response) {
                return response.data;
            });
        }

        function retrieve(params) {
            return $http
                .get(API)
                .then(function (response) {
                    return response.data.splice(0, 10);
                })
        }

        function update(todo) {
            return $http.put(API + todo.id).then(function (response) {
                return response.data;
            });
        }

        function remove(todo) {
            return $http.delete(API + todo.id).then(function (response) {
                return response.data;
            });
        }
    }

}());
(function () {
  'use strict';

  angular
    .module('app')
    .controller('todoController', todoController);

  function todoController(TodoService) {
    var vm = this;
    vm.newTodo = '';
    vm.list = [];

    vm.getTodos = function () {
      TodoService.retrieve()
        .then(function (response) {
          vm.list = response;
        })
    }

    vm.updateTodo = function (item, index) {
      TodoService.update(item);
    }

    vm.addTodo = function () {
      if (!vm.newTodo) {
        return;
      }
      TodoService.create({title: vm.newTodo, completed: false})
      .then(function (response) {
          vm.list.unshift(response);
          vm.newTodo = '';
      });
    };

    vm.removeTodo = function (item, index) {
      TodoService.remove(item).then(function (response) {
        vm.list.splice(index, 1);        
      });      
    };

    vm.getRemaining = function () {
      return vm.list.filter(function (item) {
        return item.completed === false;
      })
    };

    vm.getTodos();
  }
})();

(function () {
    'use strict';

    angular
        .module ('app')
        .directive ('todoApp', todoApp);

    function todoApp() {

        return {
            controller: 'todoController as todo',
            restrict: 'E',
            template: `<div class="todo">
              <form class="todo__form" ng-submit="todo.addTodo()">
                <input type="text" ng-model="todo.newTodo" placeholder="Add new todo">
              </form>
              <ul class="todo__list">
                <li ng-repeat="item in todo.list">
                  <input type="checkbox" id="todo-{{$index}}" ng-model="item.completed">
                  <label class="toggle" for="todo-{{$index}}"></label>
                  <p ng-dblclick="showEditField = true;" ng-hide="showEditField">
                    {{item.title}}
                  </p>
                  <div ng-show="showEditField">
                    <input type="text" ng-model="item.title" ng-blur="todo.updateTodo(item, $index); showEditField = false;" todo-autofocus="showEditField">
                  </div>
                  <a href="" ng-click="todo.removeTodo(item, $index);">&#215;</a>
                </li>
              </ul>
              <p class="todo__remaining">
                <span ng-if="todo.getRemaining().length > 0">You have {{todo.getRemaining().length}} of {{todo.list.length}} items todo!</span>
                <span ng-if="todo.getRemaining().length === 0">You are super productive!</span>
              </p>
            </div>`,
            scope: {},
        }
    }

} ());
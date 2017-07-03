(function () {
    'use strict';

    angular
        .module('app')
        .directive('orderForm', orderForm);

    function orderForm() {
        return {
            scope: {},
            bindToController: {
                data: '=',
                submit: '&'
            },
            controller: 'orderFormController as form',
            restrict: 'E',
            template: `<pre>{{orderForm.name | json}} </pre>
            <form name="orderForm" novalidate ng-submit="form.onSubmit();">
    <input name="name" required="" type="text" ng-model="form.data.name" placeholder="Your name">
    <input name="email" type="email" ng-model="form.data.email" placeholder="Your email">
    <input name="location" type="text" ng-model="form.data.location" placeholder="Your location">
    <select>
        <option value="">Select...</option>
    </select>
    <textarea name="comments" placeholder="Any messages (optional)" cols="30" rows="10" ng-model="form.data.comments"></textarea>
    <button type="submit">Order</button>
</form>`

        }
    }

}());
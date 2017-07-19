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
            template: `<pre>{{form.data | json}} </pre>
            <form name="orderForm" novalidate ng-submit="form.onSubmit();">
    <input name="name" required="" type="text" ng-model="form.data.name" placeholder="Your name">
    <div ng-if="orderForm.name.$error.required && orderForm.name.$touched" >Name is required</div>    
    <input name="email" required="" type="email" ng-model="form.data.email" placeholder="Your email">
    <div ng-if="orderForm.email.$error.required && orderForm.email.$touched" >Email is required</div>  
    <div ng-if="orderForm.email.$error.email && orderForm.email.$touched" >Email is invalid</div>  
    <input name="location" required="" type="text" ng-model="form.data.location" placeholder="Your location">
    <select name="orderChoice" required=""required="" ng-model="form.data.product" ng-options="product.label for product in form.products">
        <option value="">Select...</option>
    </select>
    <textarea name="comments" placeholder="Any messages (optional)" cols="30" rows="10" ng-model="form.data.comments"></textarea>
    <button type="submit" ng-disabled="orderForm.$invalid">Order</button>
</form>`

        }
    }

}());
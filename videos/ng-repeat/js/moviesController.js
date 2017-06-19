(function () {
    'use strict';

    angular
        .module('app')
        .controller('moviesController', moviesController);

    function moviesController() {
        var vm = this;
        vm.favorites = [{ title: 'Terminator 2', year: '1991', popular: true, category: 'action', imdb: 'tt0103064', img: 'MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY999_CR0,0,672,999_AL_.jpg' },
        { title: 'Inception', year: '2010', popular: false, category: 'fantasy', imdb: 'tt1375666', img: 'MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg' },
        { title: 'The Matrix', year: '1999', popular: true, category: 'thriller', imdb: 'tt0133093', img: 'MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,665,1000_AL_.jpg' },
        { title: 'Saving Private Ryan', year: '1998', popular: false, category: 'action', imdb: 'tt0120815', img: 'MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY1000_CR0,0,679,1000_AL_.jpg' }];

        vm.showLikes = false;
        vm.likesList = [];
        vm.addToLikes = function (movie) {
            vm.likesList.push(movie);            
        };

        vm.unlike = function (index) {
            vm.likesList.splice(index, 1);
        };

        vm.newTitle = '';
        vm.newRelease = '';

        vm.addMovie = function () {
            vm.favorites.unshift({title: vm.newTitle, year: vm.newRelease});        
        };

        vm.onFocus = function () {
            console.log('Focus!');            
        };

        vm.onBlur = function () {
            console.log('Blur!');            
        };

        vm.onChange = function () {
            console.log('Change! ' + vm.newTitle); 
        };
    }
})();
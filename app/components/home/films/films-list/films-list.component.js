import controller from './films-list.controller'
export const FilmsListComponent = {
    bindings:{
      filmsResult: '<'
    },
    controller,
    template:`
    
    <div class="container-fluid fondo">
        <h1> Listado de peliculas </h1>
        <div class="row">
            <films-item class="col-sm-4" ng-repeat="film in $ctrl.filmsResult" data="film">
               
            </films-item>

        </div>
    </div>
    
    `
}
import controller from './series-list.controller'
export const seriesListComponent = {
    bindings:{
      SeriesResult: '<'
    },
    controller,
    template:`
    
    <div class="container-fluid fondo">
        <h1> Listado de series </h1>
        <div class="row">
        
            <div class="col-sm-4" ng-repeat="serie in $ctrl.SeriesResult">
                <div class="card center" style="width: 18rem">
                    <img class="card-image-top " src="https://image.tmdb.org/t/p/w400{{serie.poster_path}}"></img>
                    <div class="card-body">
                        <h5 class="card-title"> {{serie.title}}</h5>
                        <p class="card-text">{{serie.overview}}</p>
                    </div>
                </div>
                {{serie.title}}
            </div>
        </div>
    </div>
    
    `
}
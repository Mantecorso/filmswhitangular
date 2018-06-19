class seriesListController{
    constructor (SeriesService){
        this.SeriesService = SeriesService;
        this.getSeries();
    }

    getSeries(){
        console.log("Entra en Series");
        this.SeriesService.getSeries()
            .then(resultado=> {
                this.SeriesResult = resultado.results;
                console.log(JSON.stringify(this.SeriesResult));
            });
    }
}

export default seriesListController;

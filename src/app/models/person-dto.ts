import SerieDTO from "./series-dto"

class PersonDTO{

    constructor(id: number, name : string, job : string, series: SerieDTO[]){
        id: id
        name : name
        job : job
        serie : series
    }
}

export default PersonDTO
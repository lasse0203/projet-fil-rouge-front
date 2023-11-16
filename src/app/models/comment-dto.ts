import SerieDTO from "./series-dto";
import UserDTO from "./user-dto";

class CommentDTO{

    constructor(id: number, comment: string, user: UserDTO, serie: SerieDTO){
        id = id
        comment = comment
        user = user
        serie = serie
    }
}

export default CommentDTO
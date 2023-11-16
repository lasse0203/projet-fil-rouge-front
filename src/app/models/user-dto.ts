import CommentDTO from "./comment-dto";
import SerieDTO from "./series-dto";

class UserDTO{

    constructor(id: number, pseudo : string, email: string, password: string, favoriteSeries: SerieDTO[],
        comments: CommentDTO[]){
        id = id
        pseudo = pseudo
        email = email
        password = password
        favoriteSeries: favoriteSeries
        comments: comments
    

    }

}

export default UserDTO
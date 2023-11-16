import CommentDTO from "./comment-dto";
import GenreDTO from "./genre-dto";
import PersonDTO from "./person-dto";
import UserDTO from "./user-dto";

class SerieDTO {
    id: number;
    title : string;
    date : Date;
    description : string;
    country : string;
    poster : string;
    rating : number;
    genres : GenreDTO [];
    persons : PersonDTO [];
    users : UserDTO[];
    comments  : CommentDTO[];

    constructor(id: number,title : string, date : Date, description : string,country : string, poster : string,
        rating : number, genres : GenreDTO [], persons : PersonDTO [], users : UserDTO[], comments  : CommentDTO[]){
            this.id = id
            this.title = title
            this.date = date
            this.description = description
            this.country = country
            this.poster = poster
            this.rating = rating
            this.genres = genres
            this.persons = persons
            this.users = users
            this.comments = comments
    }
}

export default SerieDTO; 
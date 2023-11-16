

export interface MovieDTO {
  id: number;
  title: string;
  release_date: Date;
  rating: number;
  description: string;
  country: string;
  poster: string;
  genres: GenreDTO[];
  persons: PersonDTO[];
  users: UserDTO[];
  comments: CommentDTO[];
}

export interface GenreDTO {
  name: string;

}

export interface PersonDTO {

  id: number;
  name: string;
  job: string;
  movies: MovieDTO[];

}

export interface UserDTO {
  id: number;
  pseudo: string;
  email: string;
  password: string;
  favoriteMovies: MovieDTO[];
  comments: CommentDTO[];

  addFavorite(movieDTO: MovieDTO): void;
  addComment(commentDTO: CommentDTO): void;


  
}

export interface CommentDTO {
  id: number;
  comment: string;
  user: UserDTO;
  movie: MovieDTO;
}

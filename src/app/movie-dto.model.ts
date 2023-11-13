

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

}

export interface PersonDTO {

}

export interface UserDTO {

}

export interface CommentDTO {
}

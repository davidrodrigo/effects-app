export class UsuarioModel {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  constructor(
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
  ) {
    id = this.id;
    email = this.email;
    first_name = this.first_name;
    last_name = this.last_name;
    avatar = this.avatar;
  }
}

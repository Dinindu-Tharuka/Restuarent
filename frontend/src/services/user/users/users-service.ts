import { User } from "../../../Generics/interfaces";
import { HttpQueryService } from "../../http-service";


export default new HttpQueryService<User>("/users/page-users/");
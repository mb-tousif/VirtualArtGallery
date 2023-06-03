import { User } from "../Users/user.model";
import { Artist } from "../Artists/artist.model";
import { TUser } from "../Users/user.interfaces";
// Update user to artist
export const updateUserToArtist = async (payload: string) => {
  const result = await User.findOne( { userId: payload } ) as TUser;
  const newCollection = new Artist({
    userId: result.userId,
    email: result.email,
    password: result.password,
})
    return newCollection;
}

import { User } from "../Users/user.model";
import { Artist } from "../Artists/artist.model";
// Update user to artist
export const updateUserToArtist = async (payload: string) => {
  const result:any = await User.findOne( { userId: payload } );
  const newCollection = new Artist({
    userId: result.userId,
    email: result.email,
    password: result.password,
})
    return newCollection;
}

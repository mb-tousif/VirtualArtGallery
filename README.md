# Project:- Virtual Art Gallery

> I am building a <i>Virtual Art Gallery</i> management system. Where people can explore, view and buy various artworks. Users can register, log in, and upload their own artwork or browse and appreciate artworks uploaded by other users. The gallery should provide features like searching, filtering, rating, favoring, and commenting on artworks. There are three types of User such as Admin , Artist, User.

## Authentication service

### Functional Requirements:
#### Users Functionalities
- Users can login and log out
- Users can manage and update their profile.
- Users can update certain fields
- Users can buy an Art.
- Users can rent an Art for a specific time period.
- Users can pay their payment fees through offline or online.(Partial / Full Payment)
- Users can see their transaction histories.
- Users can see their favorites Art.
- Users can see their notice board and Art Gallery Events
- Users can see their brought Art Galleries.
- Users can evaluate Artist Art.

#### Admin Functionalities
- Admin can log in and log out
- Admin can manage and update their profile.
- Admin can only update certain fields.
- Admin can manage user accounts
- Block/Unblock
- Change Password
- Forcefully Log out
- Admin can manage multiple process:
> Art Gallery Events,
> Offered Arts,
> Manage Art Gallery,
> Payment
> Manage Artists,
> Manage Users,
> Permissions,
> Building,
> Room,
> Activity.

#### Artist Functionalities:
- Artist can log in and log out
- Artist can manage and update their profile.
- Artist can only update certain fields.
- Artist can manage user accounts
- Artist can manage User Arts
- Access to Art Gallery and Personal Information.
- Artist can manage their Art Gallery resources

#### Permission:
- Title

#### UserPermission:
- permissionId
- userId

#### Models

#### Common User Info for Authentication:
- Id
- email
- Password
- role
- createdAt
- updatedAt
- userId || adminId || artistId

#### User Model:
- id
- name [firstName, middleName, lastName]
- email
- gender
- DOB (Date of Birth)
- reference
- contactNo
- ECN (emergency contact number)
- presentAddress
- permanentAddress
- purchasedArt
- favoritesArt

#### Admin Model:
- Id
- name [firstName, middleName, lastName]
- email
- gender
- DOB (Date of Birth)
- contactNo
- ECN (emergency contact number)
- department
- designation

#### Artist Model:
- Id
- name [firstName, middleName, lastName]
- Email
- gender
- DOB (Date of Birth)
- contactNo
- ECN (emergency contact number)
- department
- Artist
- Designation
- artSold
> artId, artName, artPrice, artQuantity, artSoldDate, totalAmount

#### Art Model
- Id
- Name
- Artist
- Draw time
- Description
- Rating
- Origination
- Price
- Stock
- Sold Reference

### API END POINTS:
#### General Users API END POINTS:
- users/create-User (POST)
- users/create-Artist (POST)
- users/create-admin (POST)
- users/my-profile (GET)
- users/:id (GET)
- users/:id (PATCH)
- user/:id (DELETE)
- users/:id/force-logged-out
- users?page=1&limit=10 (GET)
- users/:id/available-permissions?page=1&limit=10 (GET)
- users/:id/assigned-permissions?page=1&limit=10 (GET)
- users/:id/assign-permissions (POST)
- users/:id/remove-permissions (POST)

#### User API END POINTS:
- Users?page=1&limit=10 (GET)
- Users/:id  (GET)
- Users/:id    (PATCH)

#### Artist API END POINTS:
- artists?page=1&limit=10 (GET)
- artists/:id  (GET)
- artists/:id    (PATCH)

#### Admin:
- admins?page=1&limit=10 (GET)
- admins/:id  (GET)
- admin/:id    (PATCH)
- Permission
- permissions?page=1&limit=10 (GET)
- permissions (POST)
- permissions/:id (GET)
- permissions/:id (PATCH)
- permissions/:id (DELETE)

#### Auth:
- auth/login (POST)
- auth/refresh-token (POST)
- auth/change-password (POST)
- auth/forgot-password(POST)
- auth/reset-password (POST)
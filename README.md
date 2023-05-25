# Project:- Virtual Art Gallery
## Authentication service
> I am building a <i>Virtual Art Gallery</i> management system where we have three types of roles such as Admin , Artist, User.

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
        - Art Gallery Events
        - Offered Arts
        - Manage Art Gallery
        - Manage Artists
        - Manage Users
        - Building
        - Room
        - Payment
        - Permissions
        - Activity

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
- role
- Password
- createdAt
- updatedAt
- userId || adminId || artistId

#### User Model:
- id
- name [firstName, middleName, lastName]
- email
- gender
- DOB
- reference
- contactNo
- emergencyContactNo
- presentAddress
- permanentAddress
- purchasedArt
- favoritesArt

#### Admin Model:
- Id
- name [firstName, middleName, lastName]
- email
- gender
- DOB
- contactNo
- emergencyContactNo
- department
- designation

#### Artist Model:
- Id
- name [firstName, middleName, lastName]
- Email
- gender
- DOB
- contactNo
- emergencyContactNo
- department
- Artist
- Designation

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
- Auth
- auth/login (POST)
- auth/refresh-token (POST)
- auth/change-password (POST)
- auth/forgot-password(POST)
- auth/reset-password (POST)
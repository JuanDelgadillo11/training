# training
•Smoke tests

oVerify that is possible to login in Agilefant page
oVerify that User name permits enter a valid email
oVerify that Password is not displayed
oVerify that login button is enabled
oVerify that remember me check save information about the account when session completes
oVerify that links are working in login page
oVerify that Backlogs, boards and administration options can be expanded
oVerify that My work option in the top of the page displays information
oVerify that Reporting option in the top of the page displays information
oVerify that Dashboards option in the top of the page displays information
oVerify that Search option is available
oVerify that Search option returns a result if something match with the pattern
oVerify that Help link is working and guide is displayed
oVerify that Administrator role is displayed for the user logged

•Sanity tests

oVerify that user account is displayed one user is logged
oVerify that is possible to logout
oVerify that after create a new product it is displayed with the same provided name
oVerify that after create a new product it is displayed with the same provided description
oVerify that after create a new product it is displayed with the same provided Access rights
oVerify that after create a new project it is displayed with the same provided name
oVerify that after create a new product it is displayed with the same added product
oVerify that after create a new product it is displayed with the same provided start date
oVerify that after create a new product it is displayed with the same provided End date
oVerify that after create a new product it is displayed with the same provided description
oVerify that after create a new iteration it is displayed with the same provided name
oVerify that after create a new iteration it is displayed with the same provided project
oVerify that after create a new iteration it is displayed with the same provided start date
oVerify that after create a new iteration it is displayed with the same provided end date
oVerify that after create a new iteration it is displayed with the same provided description
oVerify that after create a new iteration it is displayed with the same provided access rights
oVerify that after create a new story it is displayed with the same provided name
oVerify that after create a new story it is displayed with the same provided backlog
oVerify that after create a new story it is displayed with the same provided state
oVerify that after create a new story it is displayed with the same provided story points
oVerify that after create a new story it is displayed with the same provided due date
oVerify that after create a new story it is displayed with the same provided responsible
oVerify that after create a new story it is displayed with the same provided description
oVerify that after create a new board it is displayed with the same provided name
oVerify that after create a new board it is displayed with the same provided backlog filter
oVerify that after create a new board it is displayed with the same provided Margin
oVerify that after create a new board it is displayed with the same provided Calculate velocity based on past
oVerify that after create a new team it is displayed with the same provided name
oVerify that after create a new team it is displayed with the same provided access to all products
oVerify that after create a new team it is displayed with the same provided access to all standalone
oVerify that after create a new user it is displayed with the same name
oVerify that after create a new user it is displayed with the same provided email
oVerify that after create a new user it is displayed with the same provided display name
oVerify that after create a new user it is displayed with the same provided role
oVerify that after create a new user it is displayed with the same provided teams

•CRUD tests

Create
oVerify that is possible create a new product
oVerify that is possible create new iteration
oVerify that is possible create a new story
oVerify that is possible create a new user

Read
oVerify that is possible read the values of a new product
oVerify that is possible read the values of a new iteration
oVerify that is possible read the values of a new story
oVerify that is possible read the values of a new user

Update
oVerify that is possible update a new product
oVerify that is possible update a new iteration
oVerify that is possible update a new story
oVerify that is possible update a new user

Delete
oVerify that is possible delete a product
oVerify that is possible delete an iteration
oVerify that is possible delete a story
oVerify that is possible delete an user

•Negative tests
oVerify that an error message is raised if app tries to create new product without values
oVerify that an error message is raised if app tries to create new iteration without values
oVerify that an error message is raised if app tries to create new story without values
oVerify that an error message is raised if app tries to create new user without values
oVerify that an error message is raised if a user tries to be logged without provide a password
oVerify that an error message is raised if a user tries to be logged without provide an email and just provide the password
oVerify that an error message is raised if a user tries to be logged without provide user account and password
oVerify that is not possible go back to admin page after logout.

•Boundary tests
oVerify that fields that request string characters does not permit integer values
oVerify that field that request names does not exceeds the 256 characters
oVerify that password in login has a minimum requested of alpha numeric values
oVerify that account email does not exceeds the amount of alpha numeric values

•Security tests
oVerify that no field permits to enter JavaScript code
oVerify that no field permits to enter SQL queries code
oVerify that no field permits to enter cross side attacks
oVerify that no field permits to reuse cookies from previous session
oVerify that session is closed after some minutes of inactivity
oVerify that user without privileges access with administrator access rights
oVerify that URL does not displays information about passwords in clear text.


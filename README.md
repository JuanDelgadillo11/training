# training
•Smoke tests
o	Verify that is possible to login in Agilefant page
o	Verify that User name permits enter a valid email
o	Verify that Password is not displayed
o	Verify that login button is enabled
o	Verify that remember me check save information about the account when session completes
o	Verify that links are working in login page
o	Verify that Backlogs, boards and administration options can be expanded
o	Verify that My work option in the top of the page displays information
o	 Verify that Reporting option in the top of the page displays information
o	Verify that Dashboards option in the top of the page displays information
o	Verify that Search option is available
o	Verify that Search option returns a result if something match with the pattern
o	Verify that Help link is working and guide is displayed
o	Verify that Administrator role is displayed for the user logged

•Sanity tests
o	Verify that user account is displayed one user is logged
o	Verify that is possible to logout
o	Verify that after create a new product it is displayed with the same provided name
o	Verify that after create a new product it is displayed with the same provided description
o	Verify that after create a new product it is displayed with the same provided Access rights
o	 Verify that after create a new project it is displayed with the same provided name
o	Verify that after create a new product it is displayed with the same added product
o	Verify that after create a new product it is displayed with the same provided start date
o	Verify that after create a new product it is displayed with the same provided End date
o	Verify that after create a new product it is displayed with the same provided description
o	 Verify that after create a new iteration it is displayed with the same provided name
o	Verify that after create a new iteration it is displayed with the same provided project
o	Verify that after create a new iteration it is displayed with the same provided start date
o	Verify that after create a new iteration it is displayed with the same provided end date
o	Verify that after create a new iteration it is displayed with the same provided description
o	Verify that after create a new iteration it is displayed with the same provided access rights
o	Verify that after create a new story it is displayed with the same provided name
o	Verify that after create a new story it is displayed with the same provided backlog
o	Verify that after create a new story it is displayed with the same provided state
o	Verify that after create a new story it is displayed with the same provided story points
o	Verify that after create a new story it is displayed with the same provided due date
o	Verify that after create a new story it is displayed with the same provided responsible
o	Verify that after create a new story it is displayed with the same provided description
o	Verify that after create a new board it is displayed with the same provided name
o	Verify that after create a new board it is displayed with the same provided backlog filter
o	Verify that after create a new board it is displayed with the same provided Margin
o	Verify that after create a new board it is displayed with the same provided Calculate velocity based on past
o	Verify that after create a new team it is displayed with the same provided name
o	Verify that after create a new team it is displayed with the same provided access to all products
o	Verify that after create a new team it is displayed with the same provided access to all standalone
o	Verify that after create a new user it is displayed with the same name
o	Verify that after create a new user it is displayed with the same provided email
o	Verify that after create a new user it is displayed with the same provided display name
o	Verify that after create a new user it is displayed with the same provided role
o	Verify that after create a new user it is displayed with the same provided teams
•CRUD tests
o	Verify that is possible create a new product
o	Verify that is possible create new iteration
o	Verify that is possible create a new story
o	Verify that is possible create a new user
Read
o	Verify that is possible read the values of a new product
o	Verify that is possible read the values of a new iteration
o	Verify that is possible read the values of a new story
o	Verify that is possible read the values of a new user

Update
o	Verify that is possible update a new product
o	Verify that is possible update a new iteration
o	Verify that is possible update a new story
o	Verify that is possible update a new user

Delete
o	Verify that is possible delete a product
o	Verify that is possible delete an iteration
o	Verify that is possible delete a story
o	Verify that is possible delete an user

•Negative tests
o	Verify that an error message is raised if app tries to create new product without values
o	Verify that an error message is raised if app tries to create new iteration without values
o	Verify that an error message is raised if app tries to create new story without values
o	Verify that an error message is raised if app tries to create new user without values
o	Verify that an error message is raised if a user tries to be logged without provide a password
o	 Verify that an error message is raised if a user tries to be logged without provide an email and just provide the password
o	Verify that an error message is raised if a user tries to be logged without provide user account and password
o	Verify that is not possible go back to admin page after logout.
•Boundary tests
o	Verify that fields that request string characters does not permit integer values
o	Verify that field that request names does not exceeds the 256 characters
o	Verify that password in login has a minimum requested of alpha numeric values
o	Verify that account email does not exceeds the amount of alpha numeric values

•Security tests
o	Verify that no field permits to enter JavaScript code
o	Verify that no field permits to enter SQL queries code
o	Verify that no field permits to enter cross side attacks
o	Verify that no field permits to reuse cookies from previous session
o	Verify that session is closed after some minutes of inactivity
o	Verify that user without privileges access with administrator access rights
o	Verify that URL does not displays information about passwords in clear text.


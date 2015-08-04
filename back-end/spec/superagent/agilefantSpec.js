/*
 * Created by: Juan Delgadillo
 * Description:Marking an item as complete
 */

//Import library
var request = require('superagent');
var authorization='Basic anVhbi5wYWJsby5kZWxnYWRpbGxvLnBlcmVkb0BnbWFpbC5jb206ajA2MTAwOERQ';


describe('Testing CRUD for http://agilefant.com/api ', function(){


    it('Should return all teams with authentication', function(done){
        request
            .get('https://cloud.agilefant.com:443/juandelgadillo/api/v1/teams/all')//super Agent
            .set('Authorization',authorization)//add headers
            .end(function(error,response){
                expect(response.statusCode).toBe(200);
                expect(response.body.length).toBeGreaterThan(0);
                console.log(response.body);
                done();
            });	//End end
    });// End It


    it('Should return a specific team with authentication', function(done){
        var team =
        {
            type:'team',
            id: 25905
        };
        request
            .get('https://cloud.agilefant.com:443/juandelgadillo/api/v1/teams/'+team.id)//super Agent
            .set('Authorization',authorization)//add headers
            .end(function(error,response){
                expect(response.statusCode).toBe(200);
                expect(response.body.length).toBeGreaterThan(0);
                console.log(response.body);
                done();
            });	//End end
    });// End It

    it('Should return a specific user with authentication', function(done){
        // User variables
        var user =
        {
            type:'user',
            id: 55986

        };
        request
            .get('https://cloud.agilefant.com:443/juandelgadillo/api/v1/users/'+user.id)//super Agent
            .set('Authorization',authorization)//add headers
            .end(function(error,response){
                expect(response.statusCode).toBe(200);
                expect(response.body.length).toBeGreaterThan(0);
                console.log(response.body);
                done();
            });	//End end
    });// End  It

    //Test 4
    it('Should return all users with authentication', function(done){
        request
            .get('https://cloud.agilefant.com:443/juandelgadillo/api/v1/users/all')//super Agent
            .set('Authorization',authorization)//add headers
            .end(function(error,response){
                expect(response.statusCode).toBe(200);
                expect(response.body.length).toBeGreaterThan(0);
                console.log(response.body);
                done();
            });	//End end
    });// End It
    //Test 5
    it('Should create a new team in cloud.agilefant.com', function(done){
        var newTeam ={
            type: 'team',
            name :'ProjectTest1'
        };
        request
            .post('https://cloud.agilefant.com:443/juandelgadillo/api/v1/teams')//super Agent
            .set('Authorization',authorization)//add headers
            .send(newTeam)
            .end(function(error,response){
                expect(response.statusCode).toBe(200);
                expect(response.body.length).toBeGreaterThan(0);
                console.log(response.body);
                done();
            });	//End end
    });// End It

    it('Should delete a team in cloud.agilefant.com', function(done){
        // For Delete
        var deleteTeam ={
            id :26373
        };
        request
            .del('https://cloud.agilefant.com:443/juandelgadillo/api/v1/teams/'+deleteTeam.id)//super Agent
            .set('Authorization',authorization)//add headers
            .end(function(error,response){
                expect(response.statusCode).toBe(200);
                expect(response.body.length).toBeGreaterThan(0);
                console.log(response.body);
                done();
            });	//End end
    });// End It

    it('Should update a team in cloud.agilefant.com', function(done){
        var updateTeam ={
            type: 'team',
            name :'ProjectTestUpdated'
            id :26373
        };
        request
            .put('https://cloud.agilefant.com:443/juandelgadillo/api/v1/teams'+updateTeam.id)//super Agent
            .set('Authorization',authorization)//add headers
            .send(newTeam)
            .end(function(error,response){
                expect(response.statusCode).toBe(200);
                expect(response.body.length).toBeGreaterThan(0);
                done();
            });	//End end
    });// End It

    it('Should returns all backlogs with authentication', function(done){
        request
            .get('https://cloud.agilefant.com:443/juandelgadillo/api/v1/backlogs/all')//super Agent
            .set('Authorization',authorization)//add headers
            .end(function(error,response){
                expect(response.statusCode).toBe(200);
                expect(response.body.length).toBeGreaterThan(0);
                done();
            });	//End end
    });// End It

    it('Should returns a backlog with authentication', function(done){
        var backlog =
        {
            id: 25905
        };
        request
            .get('https://cloud.agilefant.com:443/juandelgadillo/api/v1/teams/'+backlog.id)//super Agent
            .set('Authorization',authorization)//add headers
            .end(function(error,response){
                expect(response.statusCode).toBe(200);
                expect(response.body.length).toBeGreaterThan(0);
                done();
            });	//End end
    });// End It

    it('Should returns a search with authentication', function(done){
        var test =
        {
            label: 25905
        };
        request
            .get('https://cloud.agilefant.com:443/juandelgadillo/api/v1/labels/search?term='+test.label)//super Agent
            .set('Authorization',authorization)//add headers
            .end(function(error,response){
                expect(response.statusCode).toBe(200);
                expect(response.body.length).toBeGreaterThan(0);
                done();
            });	//End end
    });// End It

    it('Should Returns a comments by id', function(done){
        var comment =
        {
            id: 25905
        };
        request
            .get('https://cloud.agilefant.com:443/juandelgadillo/api/v1/comments/'+comment.id)//super Agent
            .set('Authorization',authorization)//add headers
            .end(function(error,response){
                expect(response.statusCode).toBe(200);
                expect(response.body.length).toBeGreaterThan(0);
                done();
            });	//End end
    });// End It


    it('Should User has no access to object of type Story with id', function(done){
        var timeEnties =
        {
            id: 25905
        };
        request
            .get('https://cloud.agilefant.com:443/juandelgadillo/api/v1/stories/'+timeEnties.id +'/timeEntries')//super Agent
            .set('Authorization',authorization)//add headers
            .end(function(error,response){
                expect(response.statusCode).toBe(403);
                var errorMessage= "User has no access to object of type Story with id 25905";
                expect(response.body.errorMessage).toBe(errorMessage);
                done();
            });	//End end
    });// End It


    it('Should Returns a stories by id', function(done){
        var timeEnties =
        {
            id: 25905
        };
        request
            .get('https://cloud.agilefant.com:443/juandelgadillo/api/v1/stories/'+timeEnties.id )
            .set('Authorization',authorization)//add headers
            .end(function(error,response){
                expect(response.statusCode).toBe(403);
                var errorMessage= "User has no access to object of type Story with id 25905";
                expect(response.body.errorMessage).toBe(errorMessage);
                done();
            });	//End end
    });// End It

    it('Should Returns tasks by id', function(done){
        var task =
        {
            id: 25905
        };
        request
            .get('https://cloud.agilefant.com:443/juandelgadillo/api/v1/tasks/'+task.id )
            .set('Authorization',authorization)//add headers
            .end(function(error,response){
                expect(response.statusCode).toBe(403);
                var errorMessage= "User has no access to object of type Task with id 25905";
                expect(response.body.errorMessage).toBe(errorMessage);
                done();
            });	//End end
    });// End It

    it('Should Returns time entries for a set of tasks', function(done){
        var task =
        {
            id: 12345
        };
        request
            .get('https://cloud.agilefant.com:443/juandelgadillo/api/v1/tasks/'+task.id+'/timeEntries')
            .set('Authorization',authorization)//add headers
            .end(function(error,response){
                expect(response.statusCode).toBe(403);
                var errorMessage= "User has no access to object of type Task with id 12345";
                expect(response.body.errorMessage).toBe(errorMessage);
                done();
            });	//End end
    });// End It

    it('Should Returns time entries for a set of tasks', function(done){
        var timeEntries =
        {
            id: 12345
        };
        request
            .get('https://cloud.agilefant.com:443/juandelgadillo/api/v1/timeEntries/'+timeEntries.id)
            .set('Authorization',authorization)//add headers
            .end(function(error,response){
                expect(response.statusCode).toBe(404);
                var errorMessage= "HourEntry with id: 123 was not found!";
                expect(response.body.errorMessage).toBe(errorMessage);
                done();
            });	//End end
    });// End It

    it('Should Returns time entries for user', function(done){
        var timeEntries =
        {
            id: 12345
        };
        request
            .get('https://cloud.agilefant.com:443/juandelgadillo/api/v1/timeEntries/'+timeEntries.id)
            .set('Authorization',authorization)//add headers
            .end(function(error,response){
                expect(response.statusCode).toBe(404);
                var errorMessage= "HourEntry with id: 123 was not found!";
                expect(response.body.errorMessage).toBe(errorMessage);
                done();
            });	//End end
    });// End It
});// End describe

/**
 * Created by vmware on 7/26/2015.
 */
/**
 * Created by Juan Delgadillo
 * Course: RESTAPI
 * Description: agilefant page test cases task
 */

// require section
var frisby=require('frisby');

// Generic configurations
frisby.globalSetup({
    request:{
        headers:{
            'Authorization':'Basic anVhbi5wYWJsby5kZWxnYWRpbGxvLnBlcmVkb0BnbWFpbC5jb206ajA2MTAwOERQ'
        },
        json: true
    }
});

// Definitions for POST
var newProject ={
    type: 'team',
    name :'ProjectTest1'
};

// Definitions for GET
var team =
{
    type:'team',
    id: 25905
};

// User variables
var user =
{
    type:'user',
    id: 55986

};

// For Delete
var deleteTeam ={
    id :26373
};

/*
 * Smoke tests
 */

//Test case 1: Get specific team
frisby.create('Should return a specific team with authentication')
    .get('https://cloud.agilefant.com:443/juandelgadillo/api/v1/teams/'+team.id)
    .expectStatus(200)
    .expectJSON([
        {
            type: team.type,
            id: team.id
        }])
    .inspectJSON()
    .toss();

//Test case 2: Get all teams
frisby.create('Should return all teams with authentication')
    .get('https://cloud.agilefant.com:443/juandelgadillo/api/v1/teams/all')
    .expectStatus(200)
    .inspectJSON()
    .toss();


//userTest1, userTest1@test.com, userTest1

//Test case 3: Get specific user
frisby.create('Should return a specific user with authentication')
    .get('https://cloud.agilefant.com:443/juandelgadillo/api/v1/users/'+user.id)
    .expectStatus(200)
    .expectJSON([
        {
            type: user.type,
            id: user.id
        }])
    .inspectJSON()
    .toss();

//Test case 4: Get all users
frisby.create('Should return all users with authentication')
    .get('https://cloud.agilefant.com:443/juandelgadillo/api/v1/users/all')
    .expectStatus(200)
    .inspectJSON()
    .toss();

//Test case 5: Returns teams for user
frisby.create('Should return teams for user with authentication')
    .get('https://cloud.agilefant.com:443/juandelgadillo/api/v1/users/'+user.id+'/teams')
    .expectStatus(200)
    .expectJSON([
        {
            type: team.type
        }])
    .inspectJSON()
    .toss();

//Test case 6: Create a team
frisby.create('Should create a new team in cloud.agilefant.com')
    .post('https://cloud.agilefant.com:443/juandelgadillo/api/v1/teams',newTeam)
    .expectStatus(201)// 201 created
    .inspectJSON()
    .toss();

//Test case 7: Delete a team
frisby.create('Should create a new team in cloud.agilefant.com')
    .post('https://cloud.agilefant.com:443/juandelgadillo/api/v1/teams',deleteTeam)
    .expectStatus(204)//204 deleted
    .inspectJSON()
    .toss();



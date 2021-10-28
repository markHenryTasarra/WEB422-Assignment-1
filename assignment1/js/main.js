/*********************************************************************************
*  WEB422 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Mark-Henry Tasarra Student ID: 065360125 Date: January 19, 2019
*
*
********************************************************************************/ 

$(function () {
    console.log("jQuery working");
});

$(document).on("click", "#teams-menu", function () {
    event.preventDefault();
    $(".well").empty();
    $(".well").append("<h3>Teams</h3>");
    $.ajax({
        url: //"http://localhost:8081/teams"
            "https://fierce-eyrie-59581.herokuapp.com/teams",
        type: "GET",
        data: JSON.stringify({ some: "data" }),
        contentType: "application/json"
    })
        .done(function (data) {
            $(".well").append(JSON.stringify(data));
        })
        .fail(function (err) {
            console.log(`Error: ${err.statusText}`);
        });
});

$(document).on("click", "#employees-menu", function () {
    event.preventDefault();
    $(".well").empty();
    $(".well").append("<h3>Employees</h3>");
    $.ajax({
        url: //"http://localhost:8081/employees"
            "https://fierce-eyrie-59581.herokuapp.com/employees",
        type: "GET",
        data: JSON.stringify({ some: "data" }),
        contentType: "application/json"
    })
        .done(function (data) {
            $(".well").append(JSON.stringify(data));
        })
        .fail(function (err) {
            console.log(`Error: ${err.statusText}`);
        });
});

$(document).on("click", "#projects-menu", function () {
    event.preventDefault();
    $(".well").empty();
    $(".well").append("<h3>Projects</h3>");
    $.ajax({
        url: //"http://localhost:8081/projects"
            "https://fierce-eyrie-59581.herokuapp.com/projects",
        type: "GET",
        data: JSON.stringify({ some: "data" }),
        contentType: "application/json"
    })
        .done(function (data) {
            $(".well").append(JSON.stringify(data));
        })
        .fail(function (err) {
            console.log(`Error: ${err.statusText}`);
        });
});

$(document).on("click", "#positions-menu", function () {
    event.preventDefault();
    $(".well").empty();
    $(".well").append("<h3>Positions</h3>");
    $.ajax({
        url: //"http://localhost:8081/positions"
            "https://fierce-eyrie-59581.herokuapp.com/positions",
        type: "GET",
        data: JSON.stringify({ some: "data" }),
        contentType: "application/json"
    })
        .done(function (data) {
            $(".well").append(JSON.stringify(data));
        })
        .fail(function (err) {
            console.log(`Error: ${err.statusText}`);
        });
});
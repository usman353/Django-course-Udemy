// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT

// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array
function addNew(add_name){

    if (!(roster.includes(add_name))) {
        roster.push(name)
    }
    return roster


}


// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster
function remove(name){

  var index = roster.indexOf(name);
  roster.splice(index,1)
}
// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//

// DISPLAY ROSTER

// Create a function called display that prints out the roster to the console.

function display() {
    // body...

console.log(roster)

}
var z=prompt('Do you want to use the web app yes/quit')
// Start by asking if they want to use the web app
while(z=='y'&& z!=='quit') {


        var dem=prompt('What do you want to do, add,del or display or quit')
        if (dem=='add') {
            var name=prompt('enter name')
            addNew(name)
            alert('new list is '+roster)}
        else if (dem=='del') {
            var name=prompt('enter name')
            remove(name)

        }
        else if (dem=='display') {
            display()
        }
        if (dem=='quit') {
            break
        }

}
alert('please refresh for new list')
// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.

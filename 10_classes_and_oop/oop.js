const user = {
    username: 'Rahul',
    loginCount: '2',
    signin: true,

    getUserDetails: function(){
        console.log("got data from user database");
        //using this keyword.
        //this. keyword is basically meaned for CURRENT CONTEXT
        console.log(`Username: ${this.username}`);
        console.log(this)  // give output all the content of current block context 
    }
}

console.log(user.getUserDetails());

//-------------------------------------------------------------------------------------------------------------

// CONSTRUCTOR FUNCTION
// if we have to create many users, preventing from creating many users , we are having CONSTRUCTOR concepts...
// new keyword is a constructor function, allows us to create multiple instances from single object.

function User(Username, loginCount, isLoggedIn){
    this.Username = Username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    this.greeting = function(){
        console.log(`hello Coder: ${Username}`);
    }

    return this;   // returning this keyword is optional, because it is implicitly defined.
}

const userOne = new User('rahul',5,true);
const userTwo = new User('Rohit',2,true);
// we have to use new keyword to make different instance , to prevent from value overwrite.
console.log(userOne);
console.log(userTwo);
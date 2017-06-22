var getUser = (id, callback) => {
    var user = {
        id: id,
        name: "Erin"
    }

    callback(user);

}

getUser(3,(UserObject) => {
    console.log(UserObject);
});
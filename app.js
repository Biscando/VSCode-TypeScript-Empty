// DATA
// var myActivity = {
//     ID: 1,
//     Name: "Work",
//     Start: "08:00",
//     End: "16:00",
//     Color: "orange"
// };
// TODO: Create a function to loop through an array of activities and generate the UI dynamically
// e.g.
var myActivityList = [
    {
        ID: 1,
        Name: "Work",
        Start: "08:00",
        End: "16:00",
        Color: "orange"
    },
    {
        ID: 2,
        Name: "Eat Supper",
        Start: "17:00",
        End: "18:00",
        Color: "green"
    }
];
var activity = {
    ID: 1,
    Name: "Work",
    Start: "08:00",
    End: "16:00",
    Color: "orange"
};
myActivityList.push(activity);
myActivityList.pop();
for (var i = 0; i < myActivityList.length; i++) {
    var index = i + 1;
    var id = "activity" + index;
    var acitivityDiv = document.getElementById(id);
    var nameInput = document.getElementById("name" + index);
    var startInput = document.getElementById("start" + index);
    var endInput = document.getElementById("end" + index);
    var myActivity = myActivityList[i];
    nameInput.value = myActivity.Name;
    startInput.value = myActivity.Start;
    endInput.value = myActivity.End;
    acitivityDiv.style.backgroundColor = myActivity.Color;
}
//# sourceMappingURL=app.js.map
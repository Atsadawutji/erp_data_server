


var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getTestUser = async function getTestUser(data) {
    let data_json = [
        { id: 1, name: "Jim Sun", phone: "12425323" },
        { id: 2, name: "Jim Mon", phone: "00000000" },
        { id: 3, name: "Jim Dec", phone: "11111111" },
        { id: 4, name: "Jim Ju", phone: "22222222" },
    ]
    let arr = data_json.filter(function (item) {
        return item.id == data.user_id;
    });
    return arr;
}

export default Task;
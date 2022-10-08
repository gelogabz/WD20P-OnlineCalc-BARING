//arithmetic functions here
function insert(num) {
    let view = document.form.ansField;
    view.value += num;
}

function arithmetic(operation) {
    let view = document.form.ansField;
    if (view.value != "") {
        view.value += operation;
    }
}

function zero() {
    let view = document.form.ansField;
    if (view.value != "") {
        view.value += "0";
    }
}

function equal() {
    let ans = document.form.ansField;
    let eq = ans.value;

    if (eq) {
        ans.value = eval(eq);
    }
    if (ans.value == 0) {
        ans.value = "";
    }
}

function clean() {
    document.form.ansField.value = "";
}

function del() {
    let del = document.form.ansField.value;
    document.form.ansField.value = del.substring(0, del.length - 1);
}

/* Calculator */

//arithmetic functions here
function insert(num) {
    let view = document.form.textview;
    view.value += num;
}

function arithmetic(val) {
    let view = document.form.textview;
    if (view.value != "") {
        view.value += val;
    }
    parseFloat(val.toFixed(2));
    return val;
}

function zero() {
    let view = document.form.textview;
    if (view.value != "") {
        view.value += "0";
    }
}

function equal() {
    let ans = document.form.textview;
    let eq = ans.value;

    if (eq) {
        ans.value = eval(eq);
    }
    if (ans.value == 0) {
        ans.value = "";
    }
}

function clean() {
    document.form.textview.value = "";
}

function del() {
    let del = document.form.textview.value;
    document.form.textview.value = del.substring(0, del.length - 1);
}

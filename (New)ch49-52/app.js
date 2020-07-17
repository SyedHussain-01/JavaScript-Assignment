// QUESTION#1

function getDetails() {
    var un = document.getElementById("username")
    var mn = document.getElementById("mobno")
    var db = document.getElementById("dob")
    var gn = document.getElementById("gender")
    var p = document.getElementById("pas")


    document.getElementById("submissionpg1").innerHTML = '&nbsp;' + ' USERNAME : - ' + un.value
    document.getElementById("submissionpg2").innerHTML = '&nbsp;' + ' MOBILENUMBER : - ' + mn.value
    document.getElementById("submissionpg3").innerHTML = '&nbsp;' + ' DATE OF BIRTH : - ' + db.value
    document.getElementById("submissionpg4").innerHTML = '&nbsp;' + ' GENDER : - ' + gn.value
    document.getElementById("submissionpg5").innerHTML = '&nbsp;' + ' PASSWORD : - ' + p.value

}

// QUESTION#1

// QUESTION#2

function readMore() {
    var text = '<li><i>Science</i></li><li><i>Humanity</i></li><li><i>General Knowledge</i></li></ul>&nbsp;&nbsp;&nbsp; <b> and various other topics</b></p><p><b>&nbsp;&nbsp;&nbsp; thus making it a complete mixture of interesting issues all around the world</b><br>&nbsp;&nbsp;&nbsp;<b> So stay tuned for some interesting blogs.</b><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae at obcaecati, ea, dicta repudiandae natus nobis quae explicabo minus fugiat sequi saepe modi eos odit quam autem neque voluptate!</p><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae at obcaecati, ea, dicta repudiandae natus nobis quae explicabo minus fugiat sequi saepe modi eos odit quam autem neque voluptate!</p><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae at obcaecati, ea, dicta repudiandae natus nobis quae explicabo minus fugiat sequi saepe modi eos odit quam autem neque voluptate!</p><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae at obcaecati, ea, dicta repudiandae natus nobis quae explicabo minus fugiat sequi saepe modi eos odit quam autem neque voluptate!</p>'
    var read = document.getElementById("rm")
    read.innerHTML = text
}

// QUESTION#2

// QUESTION#3

function del(id) {
    var d = document.getElementById(id)
    d.remove()
    var n1 = document.getElementById("number1")
    var n2 = document.getElementById("number2")
    var n3 = document.getElementById("number3")
    if (id === "row1") {
        n1.innerHTML = "0"
        n2.innerHTML = "1"
        n3.innerHTML = "2"

    }
    if (id === "row2") {

        n2.innerHTML = "1"
        n3.innerHTML = "2"

    }
    if (id === "row3") {

        n3.innerHTML = "2"

    }

}


var n0 = document.getElementById("names");
var c0 = document.getElementById("classes");
var rn = document.getElementById("rollno");
function studentDetail0() {

    if (rn.value === "0") {
        document.getElementById("name0").innerHTML = n0.value
        document.getElementById("class0").innerHTML = c0.value
    }
    else if (rn.value === "1") {
        document.getElementById("name1").innerHTML = n0.value
        document.getElementById("class1").innerHTML = c0.value
    }
    else if (rn.value === "2") {
        document.getElementById("name2").innerHTML = n0.value
        document.getElementById("class2").innerHTML = c0.value

    }
    else if (rn.value === "3") {
        document.getElementById("name3").innerHTML = n0.value
        document.getElementById("class3").innerHTML = c0.value
    }


}

var indx = document.getElementById("index");
function editname() {
    var edn1 = document.getElementById("editn1")
    if (indx.value === "0") {
        document.getElementById("name0").innerHTML = edn1.value
    }
    if (indx.value === "1") {
        document.getElementById("name1").innerHTML = edn1.value
    }
    if (indx.value === "2") {
        document.getElementById("name2").innerHTML = edn1.value
    }
    if (indx.value === "3") {
        document.getElementById("name3").innerHTML = edn1.value
    }
}
function editclass() {
    var edc1 = document.getElementById("editc1")
    if (indx.value === "0") {
        document.getElementById("class0").innerHTML = edc1.value
    }
    if (indx.value === "1") {
        document.getElementById("class1").innerHTML = edc1.value
    }
    if (indx.value === "2") {
        document.getElementById("class2").innerHTML = edc1.value
    }
    if (indx.value === "3") {
        document.getElementById("class3").innerHTML = edc1.value
    }
}
function hide() {
    document.getElementById("popup").className = "hidden"
}
function pop() {
    document.getElementById("popup").className = "visible"
}


// QUESTION#3
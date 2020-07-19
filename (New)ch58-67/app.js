// Q1(i)
var a = document.childNodes[1].childNodes[2].childNodes[1].childNodes[5]
// Q1(ii)
var d = document.getElementById("q1")
for (var i = 0; i < a.childNodes.length; i++) {
    var child = a.childNodes[i]
    var ce = document.createElement("p")
    var tn = document.createTextNode(child)
    ce.appendChild(tn)
    d.appendChild(ce)
}
// Q1(iii)
var d = document.getElementById("q2")
for (var n = 0; n < a.childNodes.length; n++) {
    var kid = a.childNodes[n]
    var txtplace = document.createElement("p")
    var txtcontent = document.createTextNode(kid.innerHTML)
    txtplace.appendChild(txtcontent)
    d.appendChild(txtplace)
}
// Q1(iv)
var firstname = document.childNodes[1].childNodes[2].childNodes[1].childNodes[3].childNodes[3]
firstname.value = "Alex"
// Q1(v)
var lastname = document.childNodes[1].childNodes[2].childNodes[1].childNodes[3].childNodes[7]
lastname.value = "Bank"
var email = document.childNodes[1].childNodes[2].childNodes[1].childNodes[3].childNodes[11]
email.value = " alexbank@example.com"
// Q2(i)
var fc = document.childNodes[1].childNodes[2].childNodes[1].childNodes[3]
var nt = fc.nodeType
document.getElementById("q2i").innerHTML = nt
// Q2(ii)
var lastname2 = document.childNodes[1].childNodes[2].childNodes[1].childNodes[5].childNodes[1]
var lastname2nt = lastname2.nodeType
var childelement = lastname2.childNodes.length
var last = lastname2.childNodes[0].nodeType
for (i = 0; i < childelement; i++) {
    var childelementnode = lastname2.childNodes[i]
    document.getElementById("q2ii").innerHTML = "node type of id lastName :- " + lastname2nt + "<br>" + "child element of id lastName :- " + childelementnode + "<br>" + "node type of child element :- " + last
// Q2(iii)
    childelementnode.innerHTML = "Your Last Name"
    document.getElementById("q2iii").innerHTML = childelementnode.innerHTML
}
// Q2(iv)
var maincontentfirstchild = a.firstChild
var firstchildcontent = maincontentfirstchild.innerHTML
var maincontentlastchild = a.lastChild
var lastchildcontent = maincontentlastchild.innerHTML
document.getElementById("q2iv").innerHTML = maincontentfirstchild + " " + firstchildcontent + "<br>" + maincontentlastchild + " " + lastchildcontent
// Q2(v)
var lastnamenextsimbling = lastname2.nextSibling
var nextsimblingcontent = lastnamenextsimbling.innerHTML
var lastnameprevioussimbling = lastname2.previousSibling
var previoussimblingcontent = lastnameprevioussimbling.innerHTML
document.getElementById("q2v").innerHTML = lastnamenextsimbling + " " + nextsimblingcontent + "<br>" + lastnameprevioussimbling + " " + previoussimblingcontent
// Q2(vi)
var emailparentnode = email.parentNode
var parentnodecontent = emailparentnode.innerHTML
var emailnodetype = email.nodeType
document.getElementById("q2vi").innerHTML = emailparentnode + " " + parentnodecontent + "<br>" + "nodetype of id email :- " + " " + emailnodetype






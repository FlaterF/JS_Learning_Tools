  ///////////////////////////////////////
 //     DO NOT CHANGE THIS SCRIPT     //
///////////////////////////////////////

function Show(element) {

    // Fetch the targets
    var realTarget = document.getElementById("realTarget");
    var htmlTarget = document.getElementById("htmlTarget");

    // Clear the existing content;
    realTarget.innerHTML = "";
    htmlTarget.innerHTML = "";

    // Set the new content
    realTarget.appendChild(element);

    var htmlString = realTarget.innerHTML;
    console.log(htmlString);
    var indentedHtmlString = process(htmlString);
    console.log(indentedHtmlString);
    htmlTarget.innerText = indentedHtmlString;
}

function process(str) {

    var div = document.createElement('pre');
    div.innerHTML = str.trim();

    return format(div, 0).innerHTML.substring(1);
}

function format(node, level) {

    var indentBefore = new Array(level++ + 1).join('  '),
        indentAfter  = new Array(level - 1).join('  '),
        textNode;

    for (var i = 0; i < node.children.length; i++) {

        textNode = document.createTextNode('\n' + indentBefore);
        node.insertBefore(textNode, node.children[i]);

        format(node.children[i], level);

        if (node.lastElementChild == node.children[i]) {
            textNode = document.createTextNode('\n' + indentAfter);
            node.appendChild(textNode);
        }
    }

    return node;
}
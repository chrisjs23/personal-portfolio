// const btn = document.getElementById('btn')
// const image = document.getElementById('image');

// btn.addEventListener("click", () => {
//     //alert("Clicked!")
//     if (image.style.display === 'block'){
//         image.style.display = 'none';
//     } else{
//         image.style.display = 'block';
//     }
// });

document.getElementById("defaultOpen").click();

function openTab(event, tabName){
    var i, tabcontent, tablinks;

    //hide all tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    //disable tabs
    tablinks = document.getElementsByClassName("tablinks")
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    //show current tab and set as active class
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active"
}
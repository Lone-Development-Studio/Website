tabs = ["home", "abou","proj","cont"]

function setSelectedTab(tabName)
{
    for(let tab in tabs)
    {
        let div = document.getElementById(tabs[tab]);
        let navdiv = document.getElementById("nav " + tabs[tab]);
        div.style.visibility = "hidden"
        navdiv.className = "navelement";
    }

    let div = document.getElementById(tabName);
    let navdiv = document.getElementById("nav " + tabName);
    div.style.visibility = "visible";
    navdiv.className = "navelement navselected"
}
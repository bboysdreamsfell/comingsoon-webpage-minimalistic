//CALL 'package' USING package("package_name", "package_type", "message if applicable");
const modal = (type) => {
    type == "1" ?
        document.getElementById("modal").style.display = "flex" :
        document.getElementById("modal").style.display = "none" ; 
};


document.getElementById('modal').addEventListener('click', detectModalClickImproved);
function detectModalClickImproved(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        document.getElementById("modal").style.display = "none"; 
    }
}

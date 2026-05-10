


const  province = ["siemreab", "batdambong", "phnompenh", "kampongcham"];

const listContainer = document.getElementById("province-list");
province.forEach((name) => {
    const li = document.createElement("li");
    li.innerHTML = `province: ${name}`;
    listContainer.appendChild(li);

})





















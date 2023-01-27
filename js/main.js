const elBtn = document.querySelector("#form-btn-id");
const elName = document.querySelector("#name-id");
const elRelat = document.querySelector("#relationship-id");
const elPhone = document.querySelector("#number-id");
const elDivBox = document.querySelector("#right-box-id");
const elSpan = document.querySelector("#span-id");
const elSpan1 = document.querySelector("#span-id-1");
const elSpan2 = document.querySelector("#span-id-2");









elBtn.addEventListener("click", function () {

    const name = elName.value;
    const relat = elRelat.value;
    const phone = elPhone.value;


    if ((elName.value === "" && elRelat.value === "" && elPhone.value === "")) {

        elSpan.className = "salom";
        elSpan1.className = "salom";
        elSpan2.className = "salom";
    }
    else if ((elName.value === "" && elRelat.value === "")) {
        elSpan.className = "salom";
        elSpan1.className = "salom";
        elSpan2.className = "hero-span";
    }
    else if ((elName.value === "" && elPhone.value === "")) {
        elSpan.className = "salom";
        elSpan1.className = "hero-span";
        elSpan2.className = "salom";
    }

    else if ((elPhone.value === "" && elRelat.value === "")) {
        elSpan.className = "hero-span";
        elSpan1.className = "salom";
        elSpan2.className = "salom";
    }
    else if (elName.value === "") {
        elSpan.className = "salom";
        elSpan1.className = "hero-span";
        elSpan2.className = "hero-span";
    }
    else if (elRelat.value === "") {
        elSpan.className = "hero-span";
        elSpan1.className = "salom";
        elSpan2.className = "hero-span";
    }
    else if (elPhone.value === "") {
        elSpan.className = "hero-span";
        elSpan1.className = "hero-span";
        elSpan2.className = "salom";
    }




    else {
        elSpan.className = "hero-span";
        elSpan1.className = "hero-span";
        elSpan2.className = "hero-span";


        const newDiv = document.createElement("div");

        newDiv.innerHTML = `<div class="right-item-box">
    <h3 class="right-item-title">
       ${name}
    </h3>
    <p class="right-text">
       ${relat}
    </p>
    <p class="right-number">
        ${'+' + phone}
    </p>
    </div>`
        elName.value = "";
        elRelat.value = "";
        elPhone.value = "";

        elDivBox.appendChild(newDiv);
    }


});

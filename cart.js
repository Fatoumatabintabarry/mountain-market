

function emptyCart() {
    let items = document.querySelectorAll(".item-container");
    let total = Number(document.querySelector("#stotal").innerHTML.substring(1));

    if (items.length != 0) {
      let hr = document.querySelectorAll(".item-container-container hr");

      for (let i = 0, j = 0; i < items.length; i++){
        items[i].remove();
        if (i < hr.length)
          hr[i].remove();
      }

      addEmptyCartMessage();
      updatePrice(0);
  }
}

function updatePrice(price) {
  let subtotal = document.querySelector("#stotal").innerHTML.substring(1);
  subtotal = Number(subtotal);

  subtotal += price;

  let qst = subtotal * 0.09975;
  let gst = subtotal * 0.05;

  let total = subtotal + qst + gst;

  document.querySelector("#stotal").innerHTML = "$" + subtotal.toFixed(2);
  document.querySelector("#qst-amnt").innerHTML = "$" + qst.toFixed(2);
  document.querySelector("#gst-amnt").innerHTML = "$" + gst.toFixed(2);
  document.querySelector("#total-price").innerHTML = "$" + total.toFixed(2);
}

function removeItem(itemID) {
  let items = document.querySelectorAll(".item-container");

  let item = document.querySelector("#id-" + itemID);
  let itemQuantity = document.querySelector("#quantity-" + itemID).value;
  let itemPrice = itemQuantity * Number(document.querySelector("#price-" + itemID).innerHTML.substring(1));

  if (item == items[0])
    prev = item.nextElementSibling;
  else
    prev = item.previousElementSibling;

  item.remove();

  if (prev){
    if (prev.nodeName == "HR")
      prev.remove();
  }

  document.querySelector("#noitems").innerHTML = Number(document.querySelector("#noitems").innerHTML) - itemQuantity;

  updatePrice(-itemPrice);

  items = document.querySelectorAll(".item-container");

  if (items.length == 0)
    addEmptyCartMessage()
}

function addEmptyCartMessage() {

  let msg = document.createElement("div");
  msg.innerHTML = "<h4>Your cart is empty!</h4>"
  msg.className = "empty-cart-message"

  document.querySelector(".item-container-container").appendChild(msg);
  document.querySelector(".rmvall-top").style.display = "none";
  document.querySelector(".rmvall-btm").style.display = "none";


  let size = window.matchMedia("(min-width:1280px)")
  if (size.matches) {
    document.querySelector(".cart-container").style.height = "60%";
  }

  document.querySelector("#noitems").innerHTML = "0";
  document.querySelector("#stotal").innerHTML = "$0.00";
}

function subQuantity(itemID) {

  let itemQuantity = document.querySelector("#quantity-" + itemID).value;
  let itemPrice = Number(document.querySelector("#price-" + itemID).innerHTML.substring(1));

  if (itemQuantity == 1) {
    removeItem(itemID);
  } else {
    document.querySelector("#quantity-" + itemID).stepDown();
    document.querySelector("#noitems").innerHTML = Number(document.querySelector("#noitems").innerHTML) - 1;
    updatePrice(-itemPrice);
  }
}

function addQuantity(itemID) {
  let itemPrice = Number(document.querySelector("#price-" + itemID).innerHTML.substring(1));

  document.querySelector("#quantity-" + itemID).stepUp();
  document.querySelector("#noitems").innerHTML = Number(document.querySelector("#noitems").innerHTML) + 1;
  updatePrice(itemPrice);
}

function createItemDIV(itemID) {
    // col 1
    let item_img = document.createElement("img");
    item_img.src = "images/lemon.png";
    item_img.width = 120;
    item_img.alt = "";

    let item_img_div = document.createElement("div");
    item_img_div.className = "item-img";
    item_img_div.appendChild(item_img);

    // col 2
    let itemName = document.createElement("h2");
    itemName.innerHTML = "__ITEM NAME__";

    let item_name = document.createElement("div");
    item_name.className = "item-name";
    item_name.appendChild(itemName);

    let itemPrice = document.createElement("h3");
    itemPrice.innerHTML = "$5.00";
    itemPrice.id = "price-" + itemID;

    let item_price = document.createElement("div");
    item_price.className = "item-price";
    item_price.appendChild(itemPrice);

    let itemAisle = document.createElement("h3");
    itemAisle.innerHTML = "__ITEM AISLE__";

    let item_aisle = document.createElement("div");
    item_aisle.className = "item-aisle";
    item_aisle.appendChild(itemAisle);

    // col 3
    let subBtn = document.createElement("button");
    subBtn.className = "btn-link"
    subBtn.type = "button";
    //subBtn.onclick = subQuantity(itemID);
    subBtn.innerHTML = "<i class='fas fa-minus'></i>";

    let inputBox = document.createElement("input");
    inputBox.id = "quantity-" + itemID;
    inputBox.type = "number";
    inputBox.min = 0;
    inputBox.value = 1;
    inputBox.className = "form-control form-control-sm";

    let quantity = document.createElement("div");
    quantity.className = "quantity";
    quantity.appendChild(inputBox);

    let addBtn = document.createElement("button");
    addBtn.className = "btn-link"
    addBtn.type = "button";
    //addBtn.onclick = addQuantity(itemID);
    addBtn.innerHTML = "<i class='fas fa-plus'></i>";

    let sc = document.createElement("div");
    sc.className = "sub col-md-3 col-lg-3 col-xl-2 d-flex";
    sc.appendChild(subBtn);

    let ac = document.createElement("div");
    ac.className = "add col-md-3 col-lg-3 col-xl-2 d-flex";
    ac.appendChild(addBtn);

    let qcontainer = document.createElement("div");
    qcontainer.className = "quantity-container d-flex flex-row";
    qcontainer.appendChild(sc);
    qcontainer.appendChild(quantity);
    qcontainer.appendChild(ac);

    // col 4
    let rmvBtn = document.createElement("button");
    rmvBtn.className = "btn-link";
    rmvBtn.type = "button";
    //rmvBtn.onclick = removeItem(itemID);
    rmvBtn.innerHTML = "<i class='fas fa-times'></i>";

    let rmvBtn_container = document.createElement("div");
    rmvBtn_container.className = "rmv-btn-container";
    rmvBtn_container.appendChild(rmvBtn);

    let col1 = document.createElement("div");
    col1.className = "col1";
    col1.appendChild(item_img_div);

    let col2 = document.createElement("div");
    col2.className = "col2";
    col2.appendChild(item_name);
    col2.appendChild(item_price);
    col2.appendChild(item_aisle);

    let col3 = document.createElement("div");
    col3.className = "col3";
    col3.appendChild(qcontainer);

    let col_container = document.createElement("div");
    col_container.className = "col-container";
    col_container.appendChild(col2);
    col_container.appendChild(col3);

    let col4 = document.createElement("div");
    col4.className = "col4";
    col4.appendChild(rmvBtn_container);

    let item = document.createElement("div");
    item.id = "id-" + itemID;
    item.className = "item-container";
    item.appendChild(col1);
    item.appendChild(col_container);
    item.appendChild(col4);

    return item;
}

function addItem(itemID) {
    let item = document.querySelector("#id-" + itemID);

    if (item == null) {
      let items = document.querySelectorAll(".item-container");

      if (items.length == 0) {
        document.querySelector(".empty-cart-message").remove();
        document.querySelector(".rmvall-top").style.display = "";
        document.querySelector(".rmvall-btm").style.display = "";
      }

      let item = createItemDIV(itemID);
      let hr = document.createElement("hr");

      if (items.length != 0) {
        document.querySelector(".item-container-container").appendChild(hr);
      }
      document.querySelector(".item-container-container").appendChild(item);

      let itemPrice = Number(document.querySelector("#price-" + itemID).innerHTML.substring(1));
      document.querySelector("#noitems").innerHTML = Number(document.querySelector("#noitems").innerHTML) + 1;
      updatePrice(itemPrice);
    } else {
      addQuantity(itemID);
    }
}

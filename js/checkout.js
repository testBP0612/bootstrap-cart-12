// 商品項目
let orderItem = document.querySelectorAll(".order-item");
// 商品數量 + / - 按鈕
let addBtn = document.querySelectorAll(".add");
let reduceBtn = document.querySelectorAll(".reduce");
// 商品數量 input 輸入框
let itemNumInput = document.querySelectorAll(".order-input");
// 單品小計價格
let itemSubtotal = document.querySelectorAll(".order-item-subtotal span");
// 單品原始價格
let itemPrice = document.querySelectorAll(".order-item-price");
// 訂單金額總計
let orderTotal = document.querySelector(".total");
// 訂單單品金額小計
let orderSubtotal = document.querySelector(".subtotal");
// 訂單商品數量總計
let orderQty = document.querySelector(".qty");
// 訂單運費
let orderFee = document.querySelector(".fee");

window.onload = function () {
    // 初始化 將所有商品價格都計算一次
    for (let i = 0; i < orderItem.length; i++) {
        calculateOrderItemSubtotal(i);
    }
};

addBtn.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
        handleButton(index, 1);
    });
});

reduceBtn.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
        if (itemNumInput[index].value <= 1) {
            let yes = confirm("是否確定要刪除該商品");

            if (yes) {
                orderItem[index].remove();
            } else {
                return;
            }
        }
        handleButton(index, -1);
    });
});

itemNumInput.forEach(function (input, index) {
    input.addEventListener("change", function () {
        if (input.value <= 0) {
            input.value = 1;
        }
        calculateOrderItemSubtotal(index);
    });
});

// 處理按鈕功能 單品數量增減
function handleButton(index, num) {
    itemNumInput[index].value = parseInt(itemNumInput[index].value) + num;
    calculateOrderItemSubtotal(index);
}

// 計算單品價格
function calculateOrderItemSubtotal(index) {
    // 單品小計 = 單品數量 * 單品價格
    itemSubtotal[index].innerHTML =
        parseInt(itemNumInput[index].value) *
        parseInt(itemPrice[index].textContent);

    calculateOrderPrice();
}

// 計算所有單品總和
function calculateOrderPrice() {
    let qty = 0;
    let subtotal = 0;
    let fee = 60;

    for (let i = 0; i < orderItem.length; i++) {
        qty = qty + parseInt(itemNumInput[i].value);
        subtotal = subtotal + parseInt(itemSubtotal[i].textContent);
    }

    if (subtotal >= 100) fee = 0;

    orderQty.innerHTML = qty;
    orderSubtotal.innerHTML = "$ " + subtotal;
    orderFee.innerHTML = "$ " + fee;
    orderTotal.innerHTML = "$ " + parseInt(subtotal + fee);
}

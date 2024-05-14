//Masks
$("#inputPrice").mask("000.000.000.000.000,00", { reverse: true });

function convertToNumber(priceFormat){
    return priceFormat.replace(/\./g, '').replace(',', '.');
}

var products = [
    {
        id: 1,
        name: "Computador M1-TX",
        description: "Intel i7, 16GB, SSD 256, HD 1T",
        price: 4900,
        category: 1,
        promotion: true,
        new: true
    },
    {
        id: 2,
        name: "Computador M2-TX",
        description: "Intel i7, 32GB, SSD 512, HD 1T",
        price: 5000,
        category: 2,
        promotion: false,
        new: true
    },
    {
        id: 3,
        name: "Computador M1-T",
        description: "Intel i5, 8GB, HD 1T",
        price: 2900,
        category: 3,
        promotion: false,
        new: false
    }
];

var categories = [
    { id: 1, name: "Produção Própria" },
    { id: 2, name: "Nacional" },
    { id: 3, name: "Importado" }
];

//Onload
loadProducts();

//Load all products
function loadProducts(){
    for(let prod of products){
        addNewRow(prod);
    }
}

//save a product
function save(){

    var prod = {
        id: products.length + 1,
        name: document.getElementById("inputName").value,
        description: document.getElementById("inputDescription").value,
        price: document.getElementById("inputPrice").value,
        category: document.getElementById("selectCategory").value,
        promotion: document.getElementById("checkboxpromotion").checked,
        new: document.getElementById("checkboxnewproduct").checked
    };
    addNewRow(prod);
    products.push(prod);

    document.getElementById("formProduct").reset();
}




//Add new Row
function addNewRow(prod){
    var table = document.getElementById("productsTable");

    var newRow = table.insertRow();

    //Insert id product
    var idNode = document.createTextNode(prod.id);
    newRow.insertCell().appendChild(idNode);

    //Insert name product
    var nameNode = document.createTextNode(prod.name);
    newRow.insertCell().appendChild(nameNode);

    //Insert description product
    var descriptionNode = document.createTextNode(prod.description);
    newRow.insertCell().appendChild(descriptionNode);

    //Insert price product
    var formatter = new Intl.NumberFormat("pt-BR",{
        style: "currency",
        currency: "BRL"
    });

    var priceNode = document.createTextNode(formatter.format(prod.price));
    newRow.insertCell().appendChild(priceNode);

    //Insert category product
    var categoryNode = document.createTextNode(categories[prod.category-1].name);
    newRow.insertCell().appendChild(categoryNode);


    //Insert badge options

    var options = '';
    if (prod.promotion){
        options = "<span class='badge bg-success me-1'>P</span>";
    }

    if (prod.new){
        options += "<span class='badge bg-primary'>L</span>";
    }

    newRow.insertCell().innerHTML = options;
    
}
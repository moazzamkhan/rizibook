var TypeEditor = {
    render: function (el, content) {
        EditorFactory.get(content.type).render(el, content)
    }
};

var EditorFactory = {
    get: function (type) {
        switch (type) {
            case "web-account":
                return new WebAccountEditor();
            case "bank-account":
                return new BankAccountEditor();
            default:
                return new BaseEditor();
        }
    }
};

function BaseEditor() {

}

BaseEditor.prototype.render = function (el, content) {
    el.innerHTML = JSON.stringify(content);
};

function WebAccountEditor() {

}

WebAccountEditor.prototype.render = function (el, content) {
    el.innerHTML = content.value.map((data) => {
        return `<div data-type="web-account">
        <h3>${data.title}</h3>
        <form>
        <div class="form-group">
            <input type="text" class="form-control" placeholder="URL" value="${data.url}">
            <label>URL</label>
        </div>
        <div class="form-group">            
            <input type="text" class="form-control" placeholder="Login Id" value="${data.loginId}">
            <label>Login Id</label>
        </div>
        <div class="form-group">
            <input type="text" class="form-control" placeholder="Password" value="${data.password}">
            <label>Password</label>
        </div>
    </form></div>`
    }).join("");
};


function BankAccountEditor() {

}

BankAccountEditor.prototype.render = function (el, content) {
    el.innerHTML = content.value.map((data) => {
        return `<div data-type="bank-account">
        <h3>${data.bank}</h3>
        <form>
        <div class="form-group">
            <input type="text" class="form-control" placeholder="Name" value="${data.name}"> 
            <label>Account Holder Name</label>
        </div>
        <div class="form-group">
            <input type="text" class="form-control" placeholder="Bank Account Number" value="${data.accountNumber}">
            <label>Account Number</label>
        </div>
        <div class="form-group">
            <input type="text" class="form-control" placeholder="Bank Name" value="${data.bank}">
            <label>Bank Name</label>
        </div>
        <div class="form-group">
            <input type="text" class="form-control" placeholder="IFSC Code" value="${data.ifsc}">
            <label>IFSC Code</label>
        </div>
        <div class="form-group">            
            <input type="text" class="form-control" placeholder="Login Id" value="${data.loginId}">
            <label>Login Id</label>            
        </div>
        <div class="form-group">
            <input type="text" class="form-control" placeholder="Password" value="${data.password}">
            <label>Password</label>
        </div>
    </form></div>`
    }).join("");
};

module.exports = TypeEditor;
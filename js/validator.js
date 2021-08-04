
// Doi tuong Validator
function Validator(options){

    // Ham thuc hien validate
    function validate(inputElement, rule){
        var errorMessage = rule.test(inputElement.value);
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        if(errorMessage){
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        } else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }
    }
    
    // Lay element cua form can validate
    var formElement = document.querySelector(options.form);
    if (formElement){
        // Khi submit form
        formElement.onsubmit = function (e) {
            e.preventDefault();

            // Lap qua tung rules va validate
            options.rules.forEach(function (rule){
                var inputElement = formElement.querySelector(rule.selector);
                validate(inputElement, rule);
            });
        }

        // Lap qua moi rule va xu ly (lang nghe su kien)
        options.rules.forEach(function (rule){
            var inputElement = formElement.querySelector(rule.selector);
            if(inputElement){
                // Xu li truong hop blur khi input
                inputElement.onblur = function (){
                    validate(inputElement, rule);
                }
                // Xu ly moi khi nguoi dung nhap input
                inputElement.oninput = function (){
                    var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid');
                }
            } 
        });
    }
};

// Dinh nghia cac rules
// Nguyen tac cua cac rule:
// 1> Khi co loi => tra ra message loi
// 2> Khi hop le => Ko tra ra gi ca (undefined) 
Validator.isRequired = function (selector, message){
    return {
       selector: selector,
       test: function (value) {
        return value.trim() ? undefined : message || 'Please enter your name';
        }
    };
}

Validator.isEmail = function (selector, message){
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'Please enter your email';
       }
     };
}
Validator.minLength = function (selector, min, message){
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min? undefined : message || 'Please enter your password'
        }
    }
}
Validator.isConfirmed = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value){
            return value === getConfirmValue() ? undefined : message || 'Gia tri nhap vao khong chinh xac'
        }
    }
}


Validator.isFirst = function (selector, message){
    return {
       selector: selector,
       test: function (value) {
        return value.trim() ? undefined : message || 'Please enter your first name';
        }
    };
}
Validator.isLast = function (selector, message){
    return {
       selector: selector,
       test: function (value) {
        return value.trim() ? undefined : message || 'Please enter your last name';
        }
    };
}
Validator.isEmailCheck = function (selector, message){
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'Please enter your email';
       }
    };
}
Validator.isPhone = function (selector, message){
    return {
        selector: selector,
        test: function (value) {
            var phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
            return phoneRegex.test(value) ? undefined : message || 'Please enter your phone number';
         }
     };
}
Validator.isAddress = function (selector, message){
    return {
       selector: selector,
       test: function (value) {
        return value.trim() ? undefined : message || 'Please enter your address';
        }
    };
}

Validator.isZip = function (selector, message){
    return {
       selector: selector,
       test: function (value) {
        return value.trim() ? undefined : message || 'Please enter your postcode';
        }
    };
}
Validator.isCity = function (selector, message){
    return {
       selector: selector,
       test: function (oninput) {
        return oninput.trim() ? undefined : message || 'Choose your location';
        }
    };
}
// they are attributes that we apply to classes or their members. with this we can change how they behave.


function Component(constructor: Function) {

    constructor.prototype.isComponent = true;

    console.log("Component decorator called");

}


@Component
class ProfileComponent { }


// parameterized decorator

function Component1(value: Number) {
    return (constructor: Function) => {

        constructor.prototype.dataValue = value;

        console.log("Component decorator called");
    }
}


@Component1(1)
class ProfileComponent1 { }



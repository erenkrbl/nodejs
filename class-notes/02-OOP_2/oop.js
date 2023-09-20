"use strict"

/* -------------------------------------------------------
    OOP & CLASSES
------------------------------------------------------- */
//? OOP: Object Oriented Programming
//? DRY: Don't Repeat Yourself
//? BLUEPRINT: Taslak (Mimarların kullandığı mavi şablon kağıdı)
//? CLASS: Obje türetmek için kullanılacak şablon.

// Class Declaration:
// class PascalNamedClassName { ... }

// Class Expression:
const PascalNamedClassName = class {

    undefinedProperty // Onle definition ('undefined')
    extraField = 'field-value'

    methodName1() {
        return this
    }

    methodName2() {
        return this.extraField
    }

    //? "new Class" ile obje oluştururken veri göndermek için "constructor" methodu kullanılır.


}

//? INSTANCE: Bir classtan türetilen objedir.
const instance = new PascalNamedClassName()
console.log(instance)
console.log(instance.methodName2())
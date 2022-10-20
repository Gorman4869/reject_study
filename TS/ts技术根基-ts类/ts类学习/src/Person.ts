class Person {
    // public name:string | undefined//在ts4.0之前定义变量不赋值可以通过赋undefined解决

    public name: string = "noname";
    public age:number = 26;
    public phoneNumber = '123456'

    constructor(name_:string , age_:number, phoneNumber_:string){
        this.name = name_;
        this.age = age_;
        this.phoneNumber = phoneNumber_;
    }

    public dinner(who:string,address:string):void{
        console.log(`${this.name} is going to grab some food with ${who} ,restaurant:${address}`)
    }

    public car(){

    }
}


//通过属性直接赋值
// let handsomeBoy = new Person();
// handsomeBoy.name = "Gorman";
// handsomeBoy.age = 26;
// handsomeBoy.phoneNumber = "123456";
// handsomeBoy.dinner('prettyGirl','KFC')

//通过构造器赋值
// 创建对象一共做了三件事
// 第一件事: 在堆中为类的某个对象【实例】分配一个空间
// 第二件事：调用对应的构造函数【构造器】并且把构造器中的各个参数值赋值给对象属性
//   new Person()自动匹配无参数的构造器
// 第三件事：把对象赋值给对象变量 【把实例赋值给实例变量】
let handsomeBoy = new Person('Gorman',26,'123456')
handsomeBoy.dinner('prettyGirl','KFC')
console.log(handsomeBoy)

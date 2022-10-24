type type_params={//各种图形参数
    width?:number,
    height?:number,
    radius?:number,
}


class figure{
    public width:number;
    public height:number;

    constructor(width_:number,height_:number);//重载签名
    constructor(type:type_params);
    constructor(widthOrType:any,height_:number = 0){

        if(typeof widthOrType === 'object'){
            this.width = widthOrType.width;
            this.height = widthOrType.height
        }else{
            this.width = widthOrType;
            this.height = height_;
        }
    }

    public getArea():number{
        return this.width * this.height;
    }
}

let area = new figure(20,10);
console.log(area.getArea())

let typeObject:type_params = {width:100,height:200}

let  area2 = new figure(typeObject)
console.log(area2.getArea())
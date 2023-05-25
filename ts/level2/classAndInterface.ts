// 接口可以用于对对象的形状进行描述
interface Alarm {
    alert(): void;
}

interface Light {
    lightOn(): void;
    lightOff(): void;
}
class Door {

}

class SecurityDoor extends Door implements Alarm {
    alert(): void {
        console.log('SecurityDoor alert');
    }
}

// 一个类可以实现多个接口
class Car implements Alarm, Light{
    lightOn(): void {
        console.log("Car light on");
    }
    lightOff(): void {
        console.log("Car light off");
    }
    alert(): void {
        console.log("Car alert");
    }
}

// 接口继承接口
interface LightableAlarm extends Alarm {
    lightOn():void;
    lightOff():void;
}
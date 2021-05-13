class Person{
    constructor(path){
        this.path=path;
        this.state = path.includes("yes");
    }
    isPresident(){
        return this.state;
    }
    getPath(){
        return this.path;
    }
}
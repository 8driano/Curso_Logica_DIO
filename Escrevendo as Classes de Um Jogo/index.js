class infoHero{
    constructor(nameHero, ageHero, classHero){
    this.nameHero = nameHero
    this.ageHero = ageHero
    this.classHero = classHero
    }

    hit(){
        do{
            this.hitHero
            if (this.classHero == "Mago"){
                this.hitHero = "magia"
            } else if(this.classHero == "Guerreiro"){
                this.hitHero = "espada"
            } else if(this.classHero == "Monge"){
                this.hitHero = "artes marciais"
            } else if(this.classHero == "Ninja"){
                this.hitHero = "shuriken"
            }
        } while(this.hitHero === undefined)
        
        console.log(`O ${this.classHero} atacou usando ${this.hitHero}`)

    }

}

let newHero1 = new infoHero("Galaxxy", 28, "Mago")
let newHero2 = new infoHero("Misthurd", 17, "Guerreiro")
let newHero3 = new infoHero("Boyle", 42, "Monge")
let newHero4 = new infoHero("Kammy", 22, "Ninja")

newHero1.hit()
newHero2.hit()
newHero3.hit()
newHero4.hit()
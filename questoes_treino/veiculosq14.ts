abstract class veiculos{
    abstract mover():void
}
class bicicleta extends veiculos{
    mover(): void {
        console.log('a motocicleta esta em movimento')
    }
}
class motocicleta extends veiculos{
    mover(): void {
    console.log('a motocicleta esta em movimento') 
    }
}
let bike = new bicicleta
let biz = new motocicleta
let automoveis: veiculos[] = [new bicicleta(), new motocicleta()];
automoveis.forEach((automovel) => {
    automovel.mover();
  });
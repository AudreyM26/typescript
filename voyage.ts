class Sejour {
    constructor(private _nom: string, private _prix: number) {
    }

    getNom(): string {
        return this._nom;
    }

    setNom(newNom: string) {
        this._nom = newNom;
    }

    getPrix(): number {
        return this._prix;
    }

    setPrix(newPrix: number) {
        this._prix = newPrix;
    }
}


class SejourService {
    private listeSejours:Sejour[]=[];

    constructor() {
        this.listeSejours.push(new Sejour('Venise', 200));
        this.listeSejours.push(new Sejour('New York', 520));
        this.listeSejours.push(new Sejour('Paris', 100));
        this.listeSejours.push(new Sejour('Rio de Janeiro', 843));
        this.listeSejours.push(new Sejour('Portugal', 302));
    }

    rechercher(destination: string): Sejour|void {
        for (const sej of this.listeSejours) {
            if(sej.getNom() === destination) {
                return sej;
            }
        }
        return "Séjour non trouvé";
    }
}

const voyage = new SejourService().rechercher('Paris');
console.log(voyage);

const voyage2 = new SejourService().rechercher('Brésil');
console.log(voyage2);



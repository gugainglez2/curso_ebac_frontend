function Humano(vocacao = "Humano", forca, vigor, inteligencia, mente, ataque = "Soco", defesa = "Levantar os punhos") {
    let _vocacao = vocacao
    let _nivel = 1;
    this.forca = forca;
    this.vigor = vigor;
    this.inteligencia = inteligencia;
    this.mente = mente;
    this.ataque = ataque;
    this.defesa = defesa;

    this.getVocacao = function() {
        return _vocacao;
    }

    this.getNivel = function() {
        return _nivel;
    }

    this.subirDeNivel = function(atributo) {
        _nivel++;

        if (atributo in this) {
            this[atributo]++;
            console.log(`${this.getVocacao()} subiu de nível! ${atributo} agora é: ${this[atributo]}`);
        } else {
            console.log(`${atributo} não pertence à classe ${this.getVocacao()}!`);
        }
    };

    this.investida = function() {
        const nivel = this.getNivel();
        console.log(`${this.getVocacao()}: ${this.ataque} causou ${nivel} de dano!`);
    }

    this.evasao = function() {
        const nivel = this.getNivel();
        console.log(`${this.getVocacao()}: ${this.defesa} evitou ${nivel} da ofensiva inimiga!`);
    }

    this.status = function() {
        console.log(`Vocação: ${this.getVocacao()}`);
        console.log(`Nível: ${this.getNivel()}`);
        console.log(`Vigor: ${this.vigor}`);
        console.log(`Força: ${this.forca}`);
        console.log(`Mente: ${this.mente}`);
        console.log(`Inteligencia: ${this.inteligencia}`);
    }
}

function Guerreiro() {
    this.instinto = 1;
    Humano.apply(this, arguments);

    this.investida = function() {
        const nivel = this.getNivel();
        const eficacia = nivel + (this.forca * this.instinto);
        console.log(`${this.getVocacao()}: ${this.ataque} causou ${eficacia} de dano!`);
    }

    this.evasao = function() {
        const nivel = this.getNivel();
        const eficacia = nivel + (this.vigor * this.instinto);
        console.log(`${this.getVocacao()}: ${this.defesa} evitou ${eficacia} da ofensiva inimiga!`);
    }

    const statusPai = this.status;
    this.status = function() {
        statusPai.call(this);
        console.log(`Instinto: ${this.instinto}`);
    };
}

function Magico() {
    this.mana = 1;
    Humano.apply(this, arguments);

    this.investida = function() {
        const nivel = this.getNivel();
        const eficacia = nivel + (this.inteligencia * this.mana);
        console.log(`${this.getVocacao()}: ${this.ataque} causou ${eficacia} de dano!`);
    }

    this.evasao = function() {
        const nivel = this.getNivel();
        const eficacia = nivel + (this.mente * this.mana);
        console.log(`${this.getVocacao()}: ${this.defesa} evitou ${eficacia} da ofensiva inimiga!`);
    }

    const statusPai = this.status;
    this.status = function() {
        statusPai.call(this);
        console.log(`Mana: ${this.mana}`);
    };
}

const arqueiro = new Guerreiro("arqueiro", 2, 2, 0, 0, "Disparo de flecha", "Esquiva");
const cavaleiro = new Guerreiro("cavaleiro", 1, 3, 0, 0, "Golpe de lança", "Armadura de placas");
const samurai = new Guerreiro("samurai", 3, 1, 0, 0, "Corte com katana", "Defletir com a espada");
const necromante = new Magico("necromante", 0, 0, 2, 2, "Legião espectral", "Gaiola de ossos");
const feiticeiro = new Magico("feiticeiro", 0, 0, 1, 3, "Levitação e queda", "Teleporte");
const mago = new Magico("mago", 0, 0, 3, 1, "Labareda dracônica", "Barreira de vento");

arqueiro.subirDeNivel("instinto");
arqueiro.investida(); 
arqueiro.subirDeNivel("instinto");
arqueiro.evasao(); 
arqueiro.subirDeNivel("forca");
arqueiro.investida(); 
arqueiro.status();

mago.subirDeNivel("mana");
mago.investida(); 
mago.subirDeNivel("mente");
mago.evasao(); 
mago.subirDeNivel("instinto");
mago.status();
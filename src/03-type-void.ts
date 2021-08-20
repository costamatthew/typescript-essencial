function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Mateus',
  sobrenome: 'Costa',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

noReturn('Mateus', 'Costa');
pessoa.exibirNome();

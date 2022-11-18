let showName = () => {
  event.preventDefault();
  let User_Nome = document.querySelector("#nome").value;
  let User_Sobre_Nome = document.querySelector("#sobrenome").value;
  let User_Email = document.querySelector("#EmailContainer").value;
  let saida = document.querySelector("#saida");
  saida.innerHTML = `Seu nome é ${User_Nome} ${User_Sobre_Nome}, e ${User_Email} é seu email ☺.`;
};

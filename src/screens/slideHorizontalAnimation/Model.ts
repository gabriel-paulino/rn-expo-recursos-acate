export interface IProduct {
  title: string;
  subtitle: string;
  mainColor: string;
  secondaryColor: string;
  picture: string;
  ratio: number;
}

export const products = [
  {
    title: "Hamburguer A",
    subtitle:
      "Pão briochi, hamburger, alface, tomate, cebola roxa, catchup e mostarda",
    mainColor: "#F9AC8A",
    secondaryColor: "#FBC6AE",
    picture: require("./assets/hamburguer1.png"),
    ratio: 1,
  },
  {
    title: "Hamburguer B",
    subtitle:
      "Pão briochi, hamburger, alface, tomate, cebola roxa, catchup e mostarda",
    mainColor: "#4DD2A5",
    secondaryColor: "#63D8B0",
    picture: require("./assets/hamburguer2.png"),
    ratio: 1,
  },
  {
    title: "Hamburguer C",
    subtitle:
      "Pão briochi, hamburger, alface, tomate, cebola roxa, catchup e mostarda",
    mainColor: "#FEB829",
    secondaryColor: "#FDD446",
    picture: require("./assets/hamburguer3.png"),
    ratio: 757 / 735,
  },
];

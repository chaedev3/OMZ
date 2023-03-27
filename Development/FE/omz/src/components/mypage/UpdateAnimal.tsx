import { useState } from "react";
import { images } from "../../assets/images";

type Props = {
  animalPrefer: {
    [key: string]: number;
  };
  changePrefer(e: any): void;
};

export default function UpdateAnimal({ animalPrefer, changePrefer }: Props) {
  const animalList = ["강아지", "고양이", "곰", "여우", "토끼", "공룡"];

  const animalEng: { [key: string]: string } = {
    강아지: "dog",
    고양이: "cat",
    곰: "bear",
    여우: "fox",
    토끼: "rabbit",
    공룡: "dino",
  };

  const imgsrc = (i: string): string => {
    switch (i) {
      case "강아지":
        return "dog_img";
      case "고양이":
        return "cat_img";
      case "여우":
        return "fox_img";
      case "토끼":
        return "rabbit_img";
      case "공룡":
        return "dino_img";
      case "곰":
        return "bear_img";
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {animalList.map((item) => (
        <div className="grid grid-cols-4 gap-4 items-center" key={item}>
          <div className="flex flex-col items-center">
            <img
              src={images[imgsrc(item)]}
              alt=""
              className="w-full rounded-full object-cover aspect-square"
            />
            <p>{item}</p>
          </div>
          <div className="col-span-2 h-1/2">
            <input
              className="w-full appearance-none h-1 shadow-md bg-purple-300"
              id={animalEng[item]}
              value={animalPrefer[animalEng[item]]}
              type="range"
              min={0}
              max={100}
              step={5}
              onChange={(e) => changePrefer(e)}
            />
          </div>
          <div className="h-1/2">
            <p className="text-end ">{animalPrefer[animalEng[item]]}%</p>
          </div>
        </div>
      ))}
    </div>
  );
}

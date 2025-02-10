import React from "react";


const EditorsPick = () => {
  const categories = [
    {
      title: "MEN",
      image: "/editorPick/men.png",
      className: "w-[510px] h-[500px]",
    },
    {
      title: "WOMEN",
      image: "/editorPick/women.png",
      className: "w-[240px] h-[500px]",
    },
    {
      title: "ACCESSORIES",
      image: "/editorPick/accessories.png",
      className: "w-[240px] h-[240px]",
    },
    {
      title: "KIDS",
      image: "/editorPick/kid.png",
      className: "w-[240px] h-[240px]",
    },
  ];

  return (
    <div className="bg-lightGray w-full p-4">
      <h1 className="mb-4 text-center text-2xl font-bold">EDITOR'S PICK</h1>
      <p className="mb-8 text-center text-gray-600">
        Problems trying to resolve the conflict between
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <div className={`relative ${categories[0].className}`}>
          <div className="h-full w-full overflow-hidden">
            <img
              src={categories[0].image}
              alt={categories[0].title}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute bottom-6 left-6">
            <button className="bg-white px-10 py-3 text-sm font-bold">
              {categories[0].title}
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className={`relative ${categories[1].className}`}>
            <div className="h-full w-full overflow-hidden">
              <img
                src={categories[1].image}
                alt={categories[1].title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute bottom-6 left-6">
              <button className="bg-white px-10 py-3 text-sm font-bold">
                {categories[1].title}
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {categories.slice(2).map((category, index) => (
            <div key={index} className={`relative ${category.className}`}>
              <div className="h-full w-full overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute bottom-6 left-6">
                <button className="bg-white px-10 py-3 text-sm font-bold">
                  {category.title}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EditorsPick;
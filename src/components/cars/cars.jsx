import React from 'react'

function cars() {
  return (
    <div>
       <main className=" flex items-center flex-col my-4 pb-3">
        <div className="my-[60px]">
          <h1 className="w-[204px] h-[68px]  text-center font-black text-6xl">
            Features
          </h1>
          <p className="bg-gray">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
        </div>
        <div className="flex justify-between gap-6">
          {featuresData.map((item) => {
            return (
              <Card
                key={item.id}
                img={item.img}
                title={item.title}
                desc={item.desc}
              />
            );
          })}
        </div>
        {menuData.map((item) => {
          return (
            <Card
              key={item.id}
              img={item.img}
              title={item.title}
              desc={item.desc}
            />
          );
        })}

        <div className=" flex items-center flex-col my-4 pb-3">
          {menuData.map((item) => {
            return (
              <Card
                key={item.id}
                img={item.img}
                title={item.title}
                desc={item.desc}
                position="left"
              />
            );
          })}
        </div>
      </main>
    </div>
  )
}

export default cars

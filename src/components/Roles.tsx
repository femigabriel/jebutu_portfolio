const role1 = "./images/taxes.jpg";
const role2 = "./images/writing.jpg";
const role3 = "./images/audit.jpg";
const role4 = "./images/finance.jpg";

const items = [
  {
    id: 0,
    title: "Accounting",
    body: "",
    img: <img src={role2} className="" />,
  },
  {
    id: 1,
    title: "Financial Services",
    body: "",
    img: <img src={role4} className="" />,
  },
  {
    id: 0,
    title: "Audit",
    body: "",
    img: <img src={role3} className="" />,
  },
  {
    id: 0,
    title: "Taxes",
    body: "",
    img: <img src={role1} className="" />,
  },
];

export default function ItemCard() {
  return (
    <div className="flex justify-center items-center pt-10">
      <div className="">
        <div className="lg:grid gap-5 grid-cols-4 sm:block p- ">
          {items.map((list) => {
            return (
              <div
                key={list.id}
                className=" rounded-xl cursor-pointer item_card bg-white"
              >
                <div className="">
                  <div>{list.img}</div>
                  <h3 className="font-bold text-[17px] my-5 uppercase text-gray-700 tracking-wide">
                    {list.title}
                  </h3>
                  <p className="text-gray-400 text-[14px] line-clamp-2 ">
                    {list.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

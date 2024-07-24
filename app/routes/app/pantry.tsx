import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getAllShelves } from "./models/pantry-shelf.server";
import classNames from "classnames";
import { SearchIcon } from "~/components/icons";

export async function loader() {
  const shelves = await getAllShelves();
  return json({ shelves });
}

export default function Pantry() {
  const data = useLoaderData<typeof loader>();
  return (
    <div>
      <form
        className={classNames(
          "flex border-2 border-gray-300 rounded-md",
          "focus-within:border-primary md:w-80"
        )}
      >
        <button className="px-2 mr-1">
          <SearchIcon />
        </button>
        <input
          type="text"
          name="q"
          autoComplete="off"
          placeholder="Search Shelves..."
          className="w-full py-3 px-2 outline-none"
        />
      </form>
      <ul
        className={classNames(
          "flex gap-8 overflow-x-auto mt-4",
          "snap-x snap-mandatory md:snap-none"
        )}
      >
        {data.shelves.map((shelf) => (
          <li
            key={shelf.id}
            className={classNames(
              "border-2 border-primary rounded-md p-4 h-fit",
              "w-[calc(100vw-2rem)] flex-none snap-center",
              "md:w-96"
            )}
          >
            <h1 className="text-2xl font-extrabold mb-2">{shelf.name}</h1>
            <ul>
              {shelf.items.map((item) => (
                <li key={item.id} className="py-2">
                  {item.name}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

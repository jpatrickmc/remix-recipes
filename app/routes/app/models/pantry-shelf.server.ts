import { Prisma } from "@prisma/client";
import db from "~/db.server";

export function getAllShelves(query: string | null) {
  return db.pantryShelf.findMany({
    where: {
      name: {
        contains: query ?? "",
        mode: "insensitive",
      },
    },
    include: {
      items: {
        orderBy: {
          name: "asc",
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export function createShelf() {
  return db.pantryShelf.create({
    data: {
      name: "New Shelf",
    },
  });
}

export async function deleteShelf(shelfId: string) {
  try {
    const deletedShelf = await db.pantryShelf.delete({
      where: {
        id: shelfId,
      },
    });
    return deletedShelf;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return error.message;
      }
    }
    throw error;
  }
}

export async function saveShelfName(shelfId: string, shelfName: string) {
  try {
    const updatedShelf = await db.pantryShelf.update({
      where: {
        id: shelfId,
      },
      data: {
        name: shelfName,
      },
    });
    return updatedShelf;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return error.message;
      }
    }
    throw error;
  }
}
